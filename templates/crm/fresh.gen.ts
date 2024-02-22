// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_500 from "./routes/_500.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $accounts_id_ from "./routes/accounts/[id].tsx";
import * as $accounts_index from "./routes/accounts/index.tsx";
import * as $accounts_notes from "./routes/accounts/notes.tsx";
import * as $api_accounts from "./routes/api/accounts.ts";
import * as $api_contacts from "./routes/api/contacts.ts";
import * as $api_deals from "./routes/api/deals.ts";
import * as $api_mod from "./routes/api/mod.ts";
import * as $api_notes from "./routes/api/notes.ts";
import * as $api_quotes from "./routes/api/quotes.ts";
import * as $api_users from "./routes/api/users.ts";
import * as $contacts_id_ from "./routes/contacts/[id].tsx";
import * as $contacts_index from "./routes/contacts/index.tsx";
import * as $deals_id_ from "./routes/deals/[id].tsx";
import * as $deals_index from "./routes/deals/index.tsx";
import * as $index from "./routes/index.tsx";
import * as $account from "./islands/account.tsx";
import * as $accounts from "./islands/accounts.tsx";
import * as $contact from "./islands/contact.tsx";
import * as $contacts from "./islands/contacts.tsx";
import * as $dashboard_Dashboard from "./islands/dashboard/Dashboard.tsx";
import * as $dashboard_UserSelect from "./islands/dashboard/UserSelect.tsx";
import * as $deals_Form from "./islands/deals/Form.tsx";
import * as $deals_Kanban from "./islands/deals/Kanban.tsx";
import * as $deals_KanbanCard from "./islands/deals/KanbanCard.tsx";
import * as $deals_KanbanGroup from "./islands/deals/KanbanGroup.tsx";
import * as $mod from "./islands/mod.ts";
import * as $notes_NoteDisplay from "./islands/notes/NoteDisplay.tsx";
import * as $notes_NoteEditor from "./islands/notes/NoteEditor.tsx";
import * as $notes_NoteList from "./islands/notes/NoteList.tsx";
import * as $notes_Notes from "./islands/notes/Notes.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_500.tsx": $_500,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/accounts/[id].tsx": $accounts_id_,
    "./routes/accounts/index.tsx": $accounts_index,
    "./routes/accounts/notes.tsx": $accounts_notes,
    "./routes/api/accounts.ts": $api_accounts,
    "./routes/api/contacts.ts": $api_contacts,
    "./routes/api/deals.ts": $api_deals,
    "./routes/api/mod.ts": $api_mod,
    "./routes/api/notes.ts": $api_notes,
    "./routes/api/quotes.ts": $api_quotes,
    "./routes/api/users.ts": $api_users,
    "./routes/contacts/[id].tsx": $contacts_id_,
    "./routes/contacts/index.tsx": $contacts_index,
    "./routes/deals/[id].tsx": $deals_id_,
    "./routes/deals/index.tsx": $deals_index,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/account.tsx": $account,
    "./islands/accounts.tsx": $accounts,
    "./islands/contact.tsx": $contact,
    "./islands/contacts.tsx": $contacts,
    "./islands/dashboard/Dashboard.tsx": $dashboard_Dashboard,
    "./islands/dashboard/UserSelect.tsx": $dashboard_UserSelect,
    "./islands/deals/Form.tsx": $deals_Form,
    "./islands/deals/Kanban.tsx": $deals_Kanban,
    "./islands/deals/KanbanCard.tsx": $deals_KanbanCard,
    "./islands/deals/KanbanGroup.tsx": $deals_KanbanGroup,
    "./islands/mod.ts": $mod,
    "./islands/notes/NoteDisplay.tsx": $notes_NoteDisplay,
    "./islands/notes/NoteEditor.tsx": $notes_NoteEditor,
    "./islands/notes/NoteList.tsx": $notes_NoteList,
    "./islands/notes/Notes.tsx": $notes_Notes,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
