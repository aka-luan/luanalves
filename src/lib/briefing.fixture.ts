import type { BriefingInput } from "./briefing";
export function sampleBriefing(): BriefingInput {
  return {
    business: {
      name: "Negócio de teste",
      segment: "Consultoria",
      description: "Atendimento a pequenos negócios.",
      city: "Belém",
      state: "PA",
      region: "",
      attendance: "Online",
      address: "",
      publishAddress: false,
      hours: "",
    },
    content: {
      items: [{ name: "Consultoria", description: "", price: "" }],
      differences: "",
      action: "Pedir orçamento",
      materials: [],
      notes: "",
    },
    appearance: {
      style: "Pode escolher por mim",
      colors: "",
      avoidColors: "",
      references: ["", ""],
      referenceNotes: "",
      avoid: "",
    },
    contact: {
      name: "Pessoa de teste",
      whatsapp: "(91) 99999-0000",
      sameWhatsapp: true,
      siteWhatsapp: "",
      email: "",
      instagram: "",
      links: ["", "", ""],
      notes: "",
    },
    confirmations: { authorized: true },
  };
}
