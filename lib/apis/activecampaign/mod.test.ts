import { assertEquals, assertExists } from "../deps.ts";
import { activecampaign } from "./mod.ts";

Deno.test("activecampaign", async (t) => {
  const { api } = activecampaign({
    accountName: Deno.env.get("ACTIVECAMPAIGN_ACCOUNT_NAME")!,
    apiKey: Deno.env.get("ACTIVECAMPAIGN_API_KEY")!,
  });

  await t.step("find contacts", async () => {
    const result = await api.contacts.get();
    assertExists(result.contacts);
    assertEquals(Array.isArray(result.contacts), true);
  });

  await t.step("get contact", async () => {
    const data = await api.contacts["CONTACT_ID"].get();
    assertExists(data);
    assertEquals(typeof data, "object");
  });

  await t.step("add contact", async () => {
    const data = await api.contacts.post({
      contact: {
        email: "example@email.com",
      },
    });
    assertExists(data);
    assertEquals(typeof data, "object");
  });

  await t.step("update contact", async () => {
    const data = await api.contacts["CONTACT_ID"].put({
      contact: {
        email: "updated-email@email.com",
      },
    });
    assertExists(data);
    assertEquals(typeof data, "object");
  });

  await t.step("delete contact", async () => {
    const data = await api.contacts["CONTACT_ID"].delete();
    assertExists(data);
    assertEquals(typeof data, "object");
  });

  await t.step("find deals", async () => {
    const result = await api.deals.get();
    assertExists(result.deals);
    assertEquals(Array.isArray(result.deals), true);
  });

  await t.step("find accounts", async () => {
    const result = await api.accounts.get();
    assertExists(result.accounts);
    assertEquals(Array.isArray(result.accounts), true);
  });

  await t.step("find users", async () => {
    const result = await api.users.get();
    assertExists(result.users);
    assertEquals(Array.isArray(result.users), true);
  });

  await t.step("add user", async () => {
    const result = await api.users.post({
      user: {
        username: "testuser",
      },
    });
    assertExists(result.user);
    assertEquals(typeof result.user, "object");
  });
});
