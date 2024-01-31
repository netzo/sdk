import { z } from "netzo/deps/zod/mod.ts";

// schemas:

export const dealSchema = z.object({
  id: z.string(),
  status: z.union([
    z.literal("backlog"),
    z.literal("todo"),
    z.literal("in-progress"),
    z.literal("done"),
    z.literal("cancelled"),
  ]),
  accountIds: z.array(z.string()),
  accounts: [{ $ref: {} }],
  contactIds: z.array(z.string()),
  contacts: [{ $ref: {} }],
  title: z.string(),
  description: z.string(),
  amount: z.number(),
  currency: z.string(),
  assignedTo: z.string(),
  notes: z.array(
    z.object({
      text: z.string(),
      createdAt: z.string(),
      updatedAt: z.string(),
    }),
  ),
  tasks: z.array(
    z.object({
      type: z.string(),
      status: z.string(),
      title: z.string(),
      description: z.string(),
      assigneeIds: z.array(z.string()),
      assignees: z.array(z.object({ $ref: {} })),
      assignerIds: z.array(z.string()),
      assigners: z.array(z.object({ $ref: {} })),
      dateDue: z.string(),
      dateCompleted: z.string(),
      createdAt: z.string(),
      updatedAt: z.string(),
    }),
  ),
  createdAt: z.string(),
  updatedAt: z.string(),
});

// types:

export type Deal = z.infer<typeof dealSchema>;

// data:

export const deals: Deal[] = [
  {
    id: "deal_1",
    status: "backlog",
    accountIds: ["account_1"],
    accounts: [{ $ref: {} }],
    contactIds: ["contact_1"],
    contacts: [{ $ref: {} }],
    title: "New deal",
    description: "Deal 1 description",
    amount: 1000,
    currency: "EUR",
    assignedTo: "USER1",
    notes: [{
      text: "Call with John Doe",
      createdAt: "2021-01-01T10:00:00.000Z",
      updatedAt: "2021-01-01T10:00:00.000Z",
    }, {
      text: "Call with John Doe",
      createdAt: "2021-01-01T10:00:00.000Z",
      updatedAt: "2021-01-01T10:00:00.000Z",
    }],
    tasks: [
      {
        type: "call",
        status: "todo",
        title: "Call with John Doe",
        description: "Call to discuss about the new project",
        assigneeIds: ["USER1", "USER2"],
        assignees: [{ $ref: {} }],
        assignerIds: ["USER3"],
        assigners: [{ $ref: {} }],
        dateDue: "2021-01-01T10:00:00.000Z",
        dateCompleted: "2021-01-01T10:00:00.000Z",
        createdAt: "2021-01-01T10:00:00.000Z",
        updatedAt: "2021-01-01T10:00:00.000Z",
      },
      {
        type: "email",
        status: "todo",
        title: "Email to John Doe",
        description: "Email to discuss about the new project",
        assigneeIds: ["USER1", "USER2"],
        assignees: [{ $ref: {} }],
        assignerIds: ["USER3"],
        assigners: [{ $ref: {} }],
        dateDue: "2021-01-01T10:00:00.000Z",
        dateCompleted: "2021-01-01T10:00:00.000Z",
        createdAt: "2021-01-01T10:00:00.000Z",
        updatedAt: "2021-01-01T10:00:00.000Z",
      },
    ],
    createdAt: "2021-01-01T10:00:00.000Z",
    updatedAt: "2021-01-01T10:00:00.000Z",
  },
  {
    id: "deal_2",
    status: "backlog",
    accountIds: ["account_1"],
    accounts: [{ $ref: {} }],
    contactIds: ["contact_1"],
    contacts: [{ $ref: {} }],
    title: "New deal",
    description: "Deal 2 description",
    amount: 1000,
    currency: "EUR",
    assignedTo: "USER1",
    notes: [{
      text: "Call with John Doe",
      createdAt: "2021-01-01T10:00:00.000Z",
      updatedAt: "2021-01-01T10:00:00.000Z",
    }, {
      text: "Call with John Doe",
      createdAt: "2021-01-01T10:00:00.000Z",
      updatedAt: "2021-01-01T10:00:00.000Z",
    }],
    tasks: [
      {
        type: "call",
        status: "todo",
        title: "Call with John Doe",
        description: "Call to discuss about the new project",
        assigneeIds: ["USER1", "USER2"],
        assignees: [{ $ref: {} }],
        assignerIds: ["USER3"],
        assigners: [{ $ref: {} }],
        dateDue: "2021-01-01T10:00:00.000Z",
        dateCompleted: "2021-01-01T10:00:00.000Z",
        createdAt: "2021-01-01T10:00:00.000Z",
        updatedAt: "2021-01-01T10:00:00.000Z",
      },
      {
        type: "email",
        status: "done",
        title: "Email to John Doe",
        description: "Email to discuss about the new project",
        assigneeIds: ["USER1", "USER2"],
        assignees: [{ $ref: {} }],
        assignerIds: ["USER3"],
        assigners: [{ $ref: {} }],
        dateDue: "2021-01-01T10:00:00.000Z",
        dateCompleted: "2021-01-01T10:00:00.000Z",
        createdAt: "2021-01-01T10:00:00.000Z",
        updatedAt: "2021-01-01T10:00:00.000Z",
      },
    ],
    createdAt: "2021-01-01T10:00:00.000Z",
    updatedAt: "2021-01-01T10:00:00.000Z",
  },
  {
    id: "deal_3",
    status: "done",
    accountIds: ["account_1"],
    accounts: [{ $ref: {} }],
    contactIds: ["contact_1", "contact_2"],
    contacts: [{ $ref: {} }],
    title: "New deal",
    description: "Deal 3 description",
    amount: 1000,
    currency: "EUR",
    assignedTo: "USER1",
    notes: [{
      text: "Call with John Doe",
      createdAt: "2021-01-01T10:00:00.000Z",
      updatedAt: "2021-01-01T10:00:00.000Z",
    }, {
      text: "Call with John Doe",
      createdAt: "2021-01-01T10:00:00.000Z",
      updatedAt: "2021-01-01T10:00:00.000Z",
    }],
    tasks: [
      {
        type: "call",
        status: "todo",
        title: "Call with John Doe",
        description: "Call to discuss about the new project",
        assigneeIds: ["USER1", "USER2"],
        assignees: [{ $ref: {} }],
        assignerIds: ["USER3"],
        assigners: [{ $ref: {} }],
        dateDue: "2021-01-01T10:00:00.000Z",
        dateCompleted: "2021-01-01T10:00:00.000Z",
        createdAt: "2021-01-01T10:00:00.000Z",
        updatedAt: "2021-01-01T10:00:00.000Z",
      },
      {
        type: "email",
        status: "cancelled",
        title: "Email to John Doe",
        description: "Email to discuss about the new project",
        assigneeIds: ["USER1", "USER2"],
        assignees: [{ $ref: {} }],
        assignerIds: ["USER3"],
        assigners: [{ $ref: {} }],
        dateDue: "2021-01-01T10:00:00.000Z",
        dateCompleted: "2021-01-01T10:00:00.000Z",
        createdAt: "2021-01-01T10:00:00.000Z",
        updatedAt: "2021-01-01T10:00:00.000Z",
      },
    ],
    createdAt: "2021-01-01T10:00:00.000Z",
    updatedAt: "2021-01-01T10:00:00.000Z",
  },
];

// i18n:

export const ALIASES = {
  id: "Deal Id",
  status: "in-progress",
  accountIds: "Accounts Ids",
  accounts: "Accounts",
  contactIds: "Contact Ids",
  contacts: "Contacts",
  title: "Title",
  description: "Description",
  amount: "Amount",
  currency: "Currency",
  assignedTo: "Assigned to",
  notes: {
    text: "Text",
    createdAt: "Created at",
    updatedAt: "Updated at",
  },
  tasks: {
    type: "Type",
    status: "in-progress",
    title: "Title",
    description: "Description",
    assigneeIds: "Assignee Ids",
    assignees: "Assignees",
    assignerIds: "Assigner Ids",
    assigners: "Assigners",
    dateDue: "Date due",
    dateCompleted: "Date completed",
    createdAt: "Created at",
    updatedAt: "Updated at",
  },
  createdAt: "Created at",
  updatedAt: "Updated at",
};
