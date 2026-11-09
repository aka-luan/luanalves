import { z } from "zod";

const required = (max = 160) =>
  z
    .string()
    .trim()
    .min(1, "Preencha este campo.")
    .max(max, `Use até ${max} caracteres.`);
const optional = (max = 600) =>
  z
    .string()
    .trim()
    .max(max, `Use até ${max} caracteres.`)
    .transform((v) => v || null);
export const segments = [
  "Beleza e estética",
  "Saúde e bem-estar",
  "Alimentação",
  "Comércio",
  "Serviços para casa",
  "Consultoria",
  "Educação",
  "Outro",
] as const;
export const attendance = [
  "Estabelecimento físico",
  "No endereço do cliente",
  "Online",
  "Combinado",
] as const;
export const actions = [
  "Pedir orçamento",
  "Conversar no WhatsApp",
  "Conhecer os serviços",
  "Visitar o estabelecimento",
] as const;
export const styles = [
  "Limpo e discreto",
  "Elegante",
  "Descontraído",
  "Marcante",
  "Pode escolher por mim",
] as const;
export const states = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
] as const;
const choice = <T extends readonly [string, ...string[]]>(values: T) =>
  z.enum(values, { error: "Escolha uma opção." });
const phone = required(30)
  .transform((v) => v.replace(/\D/g, ""))
  .transform((v) => (v.length === 10 || v.length === 11 ? `55${v}` : v))
  .refine(
    (v) => /^55[1-9]{2}(?:[2-5]\d{7}|9\d{8})$/.test(v),
    "Informe um WhatsApp válido com DDD.",
  );
const url = optional(500).transform((v, ctx) => {
  if (!v) return null;
  try {
    const u = new URL(/^[a-z][a-z\d+.-]*:/i.test(v) ? v : `https://${v}`);
    if (
      !["http:", "https:"].includes(u.protocol) ||
      !u.hostname.includes(".") ||
      u.username ||
      u.password
    )
      throw Error();
    return u.href;
  } catch {
    ctx.addIssue({
      code: "custom",
      message: "Informe um link válido (https://...).",
    });
    return z.NEVER;
  }
});
export const businessSchema = z
  .object({
    name: required(),
    segment: choice(segments),
    description: required(600),
    city: required(100),
    state: choice(states),
    region: optional(250),
    attendance: choice(attendance),
    address: optional(300),
    publishAddress: z.boolean(),
    hours: optional(300),
  })
  .transform((v) => ({
    ...v,
    publishAddress: !!v.address && v.publishAddress,
  }));
export const contentSchema = z.object({
  items: z
    .array(
      z.object({
        name: required(120),
        description: optional(300),
        price: optional(100),
      }),
    )
    .min(1, "Adicione pelo menos um serviço ou produto.")
    .max(8),
  differences: optional(),
  action: choice(actions),
  materials: z
    .array(choice(["Logo", "Fotos próprias", "Textos prontos"] as const))
    .max(3),
  notes: optional(),
});
export const appearanceSchema = z.object({
  style: choice(styles),
  colors: optional(200),
  avoidColors: optional(200),
  references: z.array(url).max(2),
  referenceNotes: optional(),
  avoid: optional(),
});
export const contactSchema = z
  .object({
    name: required(),
    whatsapp: phone,
    sameWhatsapp: z.boolean(),
    siteWhatsapp: z.string().max(30),
    email: optional(254).refine(
      (v) => !v || z.email().safeParse(v).success,
      "Informe um e-mail válido.",
    ),
    instagram: optional(200).transform((v, ctx) => {
      if (!v) return null;
      if (/^@?[a-z\d._]{1,30}$/i.test(v))
        return `https://www.instagram.com/${v.replace(/^@/, "")}/`;
      const parsed = url.safeParse(v);
      if (
        parsed.success &&
        parsed.data &&
        /^(www\.)?instagram\.com$/.test(new URL(parsed.data).hostname)
      )
        return parsed.data;
      ctx.addIssue({
        code: "custom",
        message: "Informe o @perfil ou link do Instagram.",
      });
      return z.NEVER;
    }),
    links: z.array(url).max(3),
    notes: optional(1000),
  })
  .superRefine((v, ctx) => {
    if (!v.sameWhatsapp && !phone.safeParse(v.siteWhatsapp).success)
      ctx.addIssue({
        code: "custom",
        path: ["siteWhatsapp"],
        message: "Informe um WhatsApp válido com DDD.",
      });
  })
  .transform((v) => ({
    ...v,
    siteWhatsapp: v.sameWhatsapp ? v.whatsapp : phone.parse(v.siteWhatsapp),
  }));
export const briefingSchema = z.object({
  business: businessSchema,
  content: contentSchema,
  appearance: appearanceSchema,
  contact: contactSchema,
  confirmations: z.object({
    authorized: z.literal(true, {
      error: "Confirme a autorização para enviar.",
    }),
  }),
});
export const submissionSchema = z.object({
  key: z.uuid(),
  website: z.string().max(0),
  data: briefingSchema,
});
export type BriefingInput = z.input<typeof briefingSchema>;
export type BriefingData = z.output<typeof briefingSchema>;
export type BriefingRecord = BriefingData & {
  schemaVersion: "1.0";
  id: string;
  createdAt: string;
  status: "received";
  assets: [];
};
export const stepSchemas = [
  businessSchema,
  contentSchema,
  appearanceSchema,
  contactSchema,
] as const;
