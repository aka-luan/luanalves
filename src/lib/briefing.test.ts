import { describe, it, expect } from "vitest";
import { briefingSchema } from "./briefing";
import { sampleBriefing } from "./briefing.fixture";

describe("shared briefing validation", () => {
  it("normalizes empty values, URLs and Brazilian phones", () => {
    const input = sampleBriefing();
    input.contact.instagram = "@meunegocio";
    input.appearance.references = ["example.com", ""];
    const data = briefingSchema.parse(input);
    expect(data.contact.whatsapp).toBe("5591999990000");
    expect(data.contact.siteWhatsapp).toBe(data.contact.whatsapp);
    expect(data.contact.email).toBeNull();
    expect(data.appearance.references).toEqual(["https://example.com/", null]);
    expect(data.contact.instagram).toBe(
      "https://www.instagram.com/meunegocio/",
    );
  });
  it("requires core fields and authorization", () => {
    const input = sampleBriefing();
    input.business.name = " ";
    input.confirmations.authorized = false as true;
    const result = briefingSchema.safeParse(input);
    expect(result.success).toBe(false);
    if (!result.success)
      expect(result.error.issues.map((i) => i.path.join("."))).toEqual(
        expect.arrayContaining(["business.name", "confirmations.authorized"]),
      );
  });
  it("enforces item, reference, link and text limits", () => {
    const input = sampleBriefing();
    input.content.items = Array.from({ length: 9 }, () => ({
      name: "Item",
      description: "",
      price: "",
    }));
    input.business.description = "x".repeat(601);
    input.contact.notes = "x".repeat(1001);
    input.appearance.references = ["a.com", "b.com", "c.com"];
    input.contact.links = ["a.com", "b.com", "c.com", "d.com"];
    expect(briefingSchema.safeParse(input).success).toBe(false);
    input.content.items = [];
    expect(briefingSchema.safeParse(input).success).toBe(false);
  });
  it("rejects executable URLs and invalid alternate contact", () => {
    const input = sampleBriefing();
    input.appearance.references = ["javascript:alert(1)"];
    input.contact.sameWhatsapp = false;
    input.contact.siteWhatsapp = "123";
    expect(briefingSchema.safeParse(input).success).toBe(false);
  });
  it("does not publish a nonexistent address", () => {
    const input = sampleBriefing();
    input.business.publishAddress = true;
    expect(briefingSchema.parse(input).business.publishAddress).toBe(false);
  });
});
