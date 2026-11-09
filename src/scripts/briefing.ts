import {
  briefingSchema,
  stepSchemas,
  type BriefingInput,
} from "../lib/briefing";

const titles = [
  "Seu negócio",
  "O que mostrar no site",
  "Aparência",
  "Contato e revisão",
];
export function initBriefing(root: ParentNode = document): () => void {
  const candidate = root.querySelector<HTMLFormElement>("#briefing-form");
  if (!candidate) return () => {};
  const form: HTMLFormElement = candidate;
  const controller = new AbortController();
  const { signal } = controller;
  const find = <T extends HTMLElement>(selector: string) =>
    root.querySelector<T>(selector)!;
  const value = (name: string) =>
    (form.elements.namedItem(name) as HTMLInputElement | null)?.value ?? "";
  const checked = (name: string) =>
    (form.elements.namedItem(name) as HTMLInputElement)?.checked ?? false;
  const sections = Array.from(
    form.querySelectorAll<HTMLElement>("[data-step]"),
  );
  const previous = find<HTMLButtonElement>("#previous-step");
  const next = find<HTMLButtonElement>("#next-step");
  const message = find<HTMLElement>("#submission-message");
  const items = find<HTMLElement>("#briefing-items");
  const add = find<HTMLButtonElement>("#add-item");
  let step = 0,
    dirty = false,
    sending = false,
    done = false;
  let key = crypto.randomUUID();
  let attemptedPayload: string | null = null;

  function read(): BriefingInput {
    return {
      business: {
        name: value("business.name"),
        segment: value(
          "business.segment",
        ) as BriefingInput["business"]["segment"],
        description: value("business.description"),
        city: value("business.city"),
        state: value("business.state") as BriefingInput["business"]["state"],
        region: value("business.region"),
        attendance: value(
          "business.attendance",
        ) as BriefingInput["business"]["attendance"],
        address: value("business.address"),
        publishAddress: checked("business.publishAddress"),
        hours: value("business.hours"),
      },
      content: {
        items: Array.from(items.children).map((_, i) => ({
          name: value(`content.items.${i}.name`),
          description: value(`content.items.${i}.description`),
          price: value(`content.items.${i}.price`),
        })),
        differences: value("content.differences"),
        action: value("content.action") as BriefingInput["content"]["action"],
        materials: Array.from(
          form.querySelectorAll<HTMLInputElement>('[name="materials"]:checked'),
        ).map((el) => el.value) as BriefingInput["content"]["materials"],
        notes: value("content.notes"),
      },
      appearance: {
        style: value(
          "appearance.style",
        ) as BriefingInput["appearance"]["style"],
        colors: value("appearance.colors"),
        avoidColors: value("appearance.avoidColors"),
        references: [
          value("appearance.references.0"),
          value("appearance.references.1"),
        ],
        referenceNotes: value("appearance.referenceNotes"),
        avoid: value("appearance.avoid"),
      },
      contact: {
        name: value("contact.name"),
        whatsapp: value("contact.whatsapp"),
        sameWhatsapp: checked("contact.sameWhatsapp"),
        siteWhatsapp: value("contact.siteWhatsapp"),
        email: value("contact.email"),
        instagram: value("contact.instagram"),
        links: [0, 1, 2].map((i) => value(`contact.links.${i}`)),
        notes: value("contact.notes"),
      },
      confirmations: {
        authorized: checked("confirmations.authorized") as true,
      },
    };
  }
  function clearErrors() {
    form!.querySelectorAll<HTMLElement>("[data-error]").forEach((el) => {
      el.textContent = "";
    });
    form!
      .querySelectorAll("[aria-invalid]")
      .forEach((el) => el.removeAttribute("aria-invalid"));
  }
  function errors(
    issues: { path: PropertyKey[]; message: string }[],
    prefix = "",
  ) {
    for (const issue of issues) {
      const path = [prefix, ...issue.path].filter((v) => v !== "").join(".");
      const el = Array.from(
        form!.querySelectorAll<HTMLElement>("[data-error]"),
      ).find((el) => el.dataset.error === path);
      if (el && !el.textContent) el.textContent = issue.message;
      const field = form!.elements.namedItem(path);
      if (field instanceof HTMLElement)
        field.setAttribute("aria-invalid", "true");
      else if (field instanceof RadioNodeList)
        field.forEach((el) => {
          if (el instanceof HTMLElement)
            el.setAttribute("aria-invalid", "true");
        });
    }
    const first = form!.querySelector<HTMLElement>('[aria-invalid="true"]');
    first?.focus();
    if (!first) {
      message.textContent = "Revise os campos indicados.";
      message.focus();
    }
  }
  function validateCurrent() {
    clearErrors();
    message.textContent = "";
    const data = read();
    const names = ["business", "content", "appearance", "contact"] as const;
    const result = stepSchemas[step].safeParse(data[names[step]]);
    if (!result.success) {
      errors(result.error.issues, names[step]);
      return false;
    }
    return true;
  }
  function show(n: number) {
    step = n;
    sections.forEach((s, i) => {
      s.hidden = i !== step;
    });
    previous.hidden = step === 0;
    next.textContent = step === 3 ? "Enviar informações" : "Continuar";
    find<HTMLElement>("#step-label").textContent =
      `Etapa ${step + 1} de 4 · ${titles[step]}`;
    find<HTMLProgressElement>("#briefing-progress").value = step + 1;
    message.textContent = "";
    clearErrors();
    if (step === 3) review();
    sections[step].querySelector<HTMLElement>("h2")!.focus();
  }
  function renderItems(
    values: BriefingInput["content"]["items"],
    focus = false,
  ) {
    items.replaceChildren();
    values.forEach((item, i) => {
      const group = document.createElement("div");
      group.className = "bf-item";
      const heading = document.createElement("h3");
      heading.textContent = `Item ${i + 1}`;
      group.append(heading);
      for (const [prop, label, max] of [
        ["name", "Nome", 120],
        ["description", "Descrição curta (opcional)", 300],
        ["price", "Preço (opcional)", 100],
      ] as const) {
        const name = `content.items.${i}.${prop}`,
          id = name.replaceAll(".", "-");
        const wrap = document.createElement("div");
        wrap.className = "bf-field";
        const l = document.createElement("label");
        l.htmlFor = id;
        l.textContent = label;
        const input = document.createElement("input");
        input.id = id;
        input.name = name;
        input.maxLength = max;
        input.value = item[prop];
        input.required = prop === "name";
        input.setAttribute("aria-describedby", `${id}-error`);
        const err = document.createElement("p");
        err.className = "bf-error";
        err.id = `${id}-error`;
        err.dataset.error = name;
        wrap.append(l, input, err);
        group.append(wrap);
      }
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "bf-secondary";
      remove.textContent = `Remover item ${i + 1}`;
      remove.disabled = values.length === 1;
      remove.addEventListener(
        "click",
        () => {
          const current = read().content.items;
          current.splice(i, 1);
          dirty = true;
          renderItems(current);
          (
            items.children[Math.min(i, current.length - 1)].querySelector(
              "input",
            ) as HTMLInputElement
          ).focus();
        },
        { signal },
      );
      group.append(remove);
      items.append(group);
    });
    add.disabled = values.length >= 8;
    if (focus)
      (
        items.lastElementChild!.querySelector("input") as HTMLInputElement
      ).focus();
  }
  function review() {
    const data = read();
    const review = find<HTMLElement>("#briefing-review");
    review.replaceChildren();
    const business = data.business,
      content = data.content,
      appearance = data.appearance,
      contact = data.contact;
    const groups: [string, string | boolean][][] = [
      [
        ["Nome", business.name],
        ["Segmento", business.segment],
        ["Descrição", business.description],
        ["Cidade / estado", `${business.city} / ${business.state}`],
        ["Região atendida", business.region],
        ["Forma de atendimento", business.attendance],
        ["Endereço", business.address],
        ["Publicar endereço", !!business.address && business.publishAddress],
        ["Horários", business.hours],
      ],
      [
        ...content.items.map(
          (v, i) =>
            [
              `Serviço ou produto ${i + 1}`,
              [
                v.name,
                v.description,
                v.price ? `Preço informado: ${v.price}` : "",
              ]
                .filter(Boolean)
                .join("\n"),
            ] as [string, string],
        ),
        ["Diferenciais", content.differences],
        ["Ação principal", content.action],
        ["Materiais", content.materials.join(", ")],
        ["Observações", content.notes],
        ["Imagens", "Poderão ser enviadas depois."],
      ],
      [
        ["Estilo", appearance.style],
        ["Cores", appearance.colors],
        ["Cores a evitar", appearance.avoidColors],
        ["Referências", appearance.references.filter(Boolean).join("\n")],
        ["O que gostou", appearance.referenceNotes],
        ["O que evitar", appearance.avoid],
      ],
      [
        ["Responsável", contact.name],
        ["WhatsApp de contato", contact.whatsapp],
        [
          "WhatsApp no site",
          contact.sameWhatsapp ? contact.whatsapp : contact.siteWhatsapp,
        ],
        ["E-mail", contact.email],
        ["Instagram", contact.instagram],
        ["Outros links", contact.links.filter(Boolean).join("\n")],
        ["Observações finais", contact.notes],
      ],
    ];
    groups.forEach((entries, i) => {
      const article = document.createElement("article");
      const h = document.createElement("h4");
      h.textContent = titles[i];
      article.append(h);
      const dl = document.createElement("dl");
      entries.forEach(([label, v]) => {
        const dt = document.createElement("dt");
        dt.textContent = label;
        const dd = document.createElement("dd");
        dd.textContent =
          typeof v === "boolean" ? (v ? "Sim" : "Não") : v || "Não informado";
        dl.append(dt, dd);
      });
      article.append(dl);
      const edit = document.createElement("button");
      edit.type = "button";
      edit.className = "bf-secondary";
      edit.textContent = `Editar ${titles[i].toLowerCase()}`;
      edit.addEventListener("click", () => show(i), { signal });
      article.append(edit);
      review.append(article);
    });
  }
  function updateConditions() {
    const hasAddress = !!value("business.address").trim();
    find<HTMLElement>("#publish-address").hidden = !hasAddress;
    if (!hasAddress)
      (
        form!.elements.namedItem("business.publishAddress") as HTMLInputElement
      ).checked = false;
    find<HTMLElement>("#other-whatsapp").hidden = checked(
      "contact.sameWhatsapp",
    );
    const swatches = find<HTMLElement>("#color-swatches");
    swatches.replaceChildren();
    for (const token of value("appearance.colors")
      .split(/[;,\s]+/)
      .slice(0, 12)) {
      if (
        token &&
        CSS.supports("color", token) &&
        ![
          "inherit",
          "initial",
          "unset",
          "transparent",
          "currentcolor",
        ].includes(token.toLowerCase())
      ) {
        const swatch = document.createElement("span");
        swatch.style.backgroundColor = token;
        swatch.title = token;
        swatch.setAttribute("aria-label", token);
        swatches.append(swatch);
      }
    }
  }
  form.addEventListener(
    "input",
    () => {
      dirty = true;
      updateConditions();
      if (step === 3) review();
    },
    { signal },
  );
  form.addEventListener(
    "change",
    () => {
      dirty = true;
      updateConditions();
      if (step === 3) review();
    },
    { signal },
  );
  add.addEventListener(
    "click",
    () => {
      const current = read().content.items;
      if (current.length >= 8) return;
      current.push({ name: "", description: "", price: "" });
      dirty = true;
      renderItems(current, true);
    },
    { signal },
  );
  previous.addEventListener(
    "click",
    () => {
      if (!sending) show(Math.max(0, step - 1));
    },
    { signal },
  );
  form.addEventListener(
    "submit",
    async (e) => {
      e.preventDefault();
      if (sending || done) return;
      if (!validateCurrent()) return;
      if (step < 3) {
        show(step + 1);
        return;
      }
      const data = read();
      const parsed = briefingSchema.safeParse(data);
      if (!parsed.success) {
        const first = String(parsed.error.issues[0].path[0]);
        const target = ["business", "content", "appearance", "contact"].indexOf(
          first,
        );
        if (target >= 0 && target !== step) show(target);
        errors(parsed.error.issues);
        return;
      }
      const serialized = JSON.stringify(data);
      if (attemptedPayload !== null && attemptedPayload !== serialized)
        key = crypto.randomUUID();
      attemptedPayload = serialized;
      sending = true;
      find<HTMLProgressElement>("#submission-progress").hidden = false;
      form.setAttribute("aria-busy", "true");
      // Freeze editing while a request is in flight so retries have a stable payload.
      const controls = Array.from(
        form.querySelectorAll<
          | HTMLInputElement
          | HTMLButtonElement
          | HTMLSelectElement
          | HTMLTextAreaElement
        >("input,button,select,textarea"),
      );
      const disabled = controls.map((el) => el.disabled);
      controls.forEach((el) => {
        el.disabled = true;
      });
      next.textContent = "Enviando informações…";
      message.textContent = "";
      try {
        const response = await fetch("/api/briefings/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ key, website: value("website"), data }),
          signal: AbortSignal.timeout(25000),
        });
        const result = await response.json();
        if (!response.ok) {
          if (Array.isArray(result.fields))
            errors(
              result.fields.map((f: { path: string; message: string }) => ({
                path: f.path.replace(/^data\./, "").split("."),
                message: f.message,
              })),
            );
          throw new Error(
            result.error || "Não foi possível salvar. Tente novamente.",
          );
        }
        if (
          typeof result.id !== "string" ||
          !/^[a-f0-9-]{36}$/i.test(result.id)
        )
          throw new Error(
            "O servidor não confirmou o recebimento. Tente novamente.",
          );
        done = true;
        dirty = false;
        form.hidden = true;
        find<HTMLElement>("#briefing-number").textContent = result.id;
        const success = find<HTMLElement>("#briefing-success");
        success.hidden = false;
        success.focus();
      } catch (error) {
        if (!signal.aborted) {
          message.textContent =
            error instanceof Error && error.name !== "TimeoutError"
              ? error.message
              : "A conexão demorou ou falhou. Suas respostas continuam aqui. Tente novamente.";
          message.focus();
        }
      } finally {
        sending = false;
        find<HTMLProgressElement>("#submission-progress").hidden = true;
        form.removeAttribute("aria-busy");
        controls.forEach((el, i) => {
          el.disabled = disabled[i];
        });
        next.textContent = "Enviar informações";
      }
    },
    { signal },
  );
  const beforeUnload = (e: BeforeUnloadEvent) => {
    if (dirty && !done) {
      e.preventDefault();
      e.returnValue = "";
    }
  };
  window.addEventListener("beforeunload", beforeUnload, { signal });
  // All departures use a full navigation so beforeunload also covers links and browser history.
  form.hidden = false;
  renderItems([{ name: "", description: "", price: "" }]);
  updateConditions();
  return () => controller.abort();
}
