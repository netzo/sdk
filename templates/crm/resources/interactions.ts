import { z } from "netzo/deps/zod/mod.ts";

// schemas:

export const interactionSchema = z.object({
  id: z.string(),
  type: z.string(), // "call", "email", "meeting", "whatsapp-msg", "livechat-msg", facebook-msg", "instagram-msg", "linkedin-msg", "twitter-msg", "other"
  data: z.object(),
  createdBy: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

// types:

export type Interaction = z.infer<typeof interactionSchema>;

// data:

export const interactions: Interaction[] = [
  {
    id: "INTERACTION1",
    type: "call",
    data: {
      title: "Call with John Doe",
      description: "Call to discuss about the new project",
      date: "2021-01-01T10:00:00.000Z",
      duration: 30,
    },
    createdBy: "USER1",
    createdAt: "2021-01-01T10:00:00.000Z",
    updatedAt: "2021-01-01T10:00:00.000Z",
  },
  {
    id: "INTERACTION2",
    type: "email",
    data: {
      title: "Email to John Doe",
      description: "Email to discuss about the new project",
      date: "2021-01-01T10:00:00.000Z",
      duration: 30,
      from: "",
    },
    createdBy: "USER1",
    createdAt: "2021-01-01T10:00:00.000Z",
    updatedAt: "2021-01-01T10:00:00.000Z",
  },
  {
    id: "INTERACTION3",
    type: "whatsapp-msg",
    data: {
      title: "WhatsApp message to John Doe",
      description: "WhatsApp message to discuss about the new project",
      date: "2021-01-01T10:00:00.000Z",
      duration: 30,
    },
    createdBy: "USER1",
    createdAt: "2021-01-01T10:00:00.000Z",
    updatedAt: "2021-01-01T10:00:00.000Z",
  },
];

// i18n:

export const ALIASES = {
  id: "Interaction Id",
  type: "Type",
  data: "Data",
  createdBy: "Created By",
  createdAt: "Created At",
  updatedAt: "Updated At",
};