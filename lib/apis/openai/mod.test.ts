import "https://deno.land/std@0.198.0/dotenv/load.ts";
import { assertEquals, assertExists } from "../deps.ts";
import { openai } from "./mod.ts";

Deno.test("openai", async (t) => {
  const { api } = openai({
    apiKey: Deno.env.get("OPENAI_API_KEY"),
  });

  await t.step("create chat completion", async () => {
    const result = await api.chat.completions.post({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant.",
        },
        {
          role: "user",
          content: "Hello!",
        },
      ],
    });
    assertExists(result.choices);
    assertEquals(Array.isArray(result.choices), true);
  });
});