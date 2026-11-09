import {
  briefingSchema,
  stepSchemas,
  type BriefingInput,
} from "../lib/briefing";

const titles = [
  "Seu negócio",
  "Conteúdo",
  "Aparência",
  "Contato e envio",
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
  const shell = form.closest<HTMLElement>(".briefing-shell");
  const stepMarkers = Array.from(
    root.querySelectorAll<HTMLElement>(".bf-steps li"),
  );
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
      const details = (
        field instanceof RadioNodeList ? field[0] : field
      )?.parentElement?.closest("details");
      if (details) details.open = true;
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
    if (shell) shell.dataset.currentStep = String(step);
    stepMarkers.forEach((li, i) => {
      li.dataset.state =
        i < step ? "done" : i === step ? "current" : "upcoming";
    });
    find<HTMLElement>("#step-label").textContent =
      `Etapa ${step + 1} de 4`;
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
      const header = document.createElement("div");
      header.className = "bf-item-header";
      const heading = document.createElement("h3");
      heading.textContent = `Item ${i + 1}`;
      header.append(heading);
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "bf-text-button";
      remove.textContent = "Remover";
      remove.setAttribute("aria-label", `Remover item ${i + 1}`);
      remove.hidden = values.length === 1;
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
      header.append(remove);
      group.append(header);
      for (const [prop, label, max, optional] of [
        ["name", "Nome", 120, false],
        ["price", "Preço", 100, true],
        ["description", "Descrição curta", 300, true],
      ] as const) {
        const name = `content.items.${i}.${prop}`,
          id = name.replaceAll(".", "-");
        const wrap = document.createElement("div");
        wrap.className = `bf-field bf-item-${prop}`;
        const l = document.createElement("label");
        l.htmlFor = id;
        l.textContent = label;
        if (optional) {
          const tag = document.createElement("span");
          tag.className = "bf-optional";
          tag.textContent = "opcional";
          l.append(tag);
        }
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
      items.append(group);
    });
    add.hidden = values.length >= 8;
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
    const groups: [string, string][][] = [
      [
        ["Nome", business.name],
        ["Segmento", business.segment],
        ["Descrição", business.description],
        [
          "Cidade",
          [business.city, business.state].filter(Boolean).join(" / "),
        ],
        ["Região atendida", business.region],
        ["Forma de atendimento", business.attendance],
        ["Endereço", business.address],
        [
          "Publicar endereço",
          business.address ? (business.publishAddress ? "Sim" : "Não") : "",
        ],
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
        ...((contact.sameWhatsapp
          ? [["WhatsApp", `${contact.whatsapp}\nTambém aparece no site`]]
          : [
              ["WhatsApp de contato", contact.whatsapp],
              ["WhatsApp no site", contact.siteWhatsapp],
            ]) as [string, string][]),
        ["E-mail", contact.email],
        ["Instagram", contact.instagram],
        ["Outros links", contact.links.filter(Boolean).join("\n")],
        ["Observações finais", contact.notes],
      ],
    ];
    groups.forEach((entries, i) => {
      const article = document.createElement("article");
      const header = document.createElement("div");
      header.className = "bf-review-header";
      const h = document.createElement("h4");
      h.textContent = titles[i];
      const edit = document.createElement("button");
      edit.type = "button";
      edit.className = "bf-text-button";
      edit.textContent = "Editar";
      edit.setAttribute("aria-label", `Editar ${titles[i].toLowerCase()}`);
      edit.addEventListener("click", () => show(i), { signal });
      header.append(h, edit);
      article.append(header);
      const dl = document.createElement("dl");
      entries.forEach(([label, v]) => {
        if (!v) return;
        const dt = document.createElement("dt");
        dt.textContent = label;
        const dd = document.createElement("dd");
        dd.textContent = v;
        dl.append(dt, dd);
      });
      if (!dl.childElementCount) {
        const empty = document.createElement("p");
        empty.className = "bf-help";
        empty.textContent = "Nada preenchido nesta etapa.";
        article.append(empty);
      } else article.append(dl);
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
      next.textContent = "Enviando…";
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
        if (shell) shell.dataset.currentStep = "done";
        stepMarkers.forEach((li) => {
          li.dataset.state = "done";
        });
        const number = find<HTMLElement>("#briefing-number");
        number.textContent = result.id.slice(0, 8).toUpperCase();
        number.title = result.id;
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
