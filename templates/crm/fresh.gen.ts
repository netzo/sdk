// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_500 from "./routes/_500.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $accounts_id_layout from "./routes/accounts/[id]/_layout.tsx";
import * as $accounts_id_index from "./routes/accounts/[id]/index.tsx";
import * as $accounts_id_notes from "./routes/accounts/[id]/notes.tsx";
import * as $accounts_index from "./routes/accounts/index.tsx";
import * as $api_accounts from "./routes/api/accounts.ts";
import * as $api_contacts from "./routes/api/contacts.ts";
import * as $api_deals from "./routes/api/deals.ts";
import * as $api_metrics from "./routes/api/metrics.ts";
import * as $api_mod from "./routes/api/mod.ts";
import * as $api_users from "./routes/api/users.ts";
import * as $contacts_id_layout from "./routes/contacts/[id]/_layout.tsx";
import * as $contacts_id_index from "./routes/contacts/[id]/index.tsx";
import * as $contacts_id_notes from "./routes/contacts/[id]/notes.tsx";
import * as $contacts_index from "./routes/contacts/index.tsx";
import * as $deals_id_layout from "./routes/deals/[id]/_layout.tsx";
import * as $deals_id_index from "./routes/deals/[id]/index.tsx";
import * as $deals_id_notes from "./routes/deals/[id]/notes.tsx";
import * as $deals_index from "./routes/deals/index.tsx";
import * as $index from "./routes/index.tsx";
import * as $account from "./islands/account.tsx";
import * as $accounts from "./islands/accounts.tsx";
import * as $contact from "./islands/contact.tsx";
import * as $contacts from "./islands/contacts.tsx";
import * as $dashboard_account_select from "./islands/dashboard.account-select.tsx";
import * as $dashboard from "./islands/dashboard.tsx";
import * as $deal from "./islands/deal.tsx";
import * as $deals_kanban_card from "./islands/deals.kanban-card.tsx";
import * as $deals_kanban_group from "./islands/deals.kanban-group.tsx";
import * as $deals from "./islands/deals.tsx";
import * as $nav from "./islands/nav.tsx";
import * as $notes from "./islands/notes.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_500.tsx": $_500,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/accounts/[id]/_layout.tsx": $accounts_id_layout,
    "./routes/accounts/[id]/index.tsx": $accounts_id_index,
    "./routes/accounts/[id]/notes.tsx": $accounts_id_notes,
    "./routes/accounts/index.tsx": $accounts_index,
    "./routes/api/accounts.ts": $api_accounts,
    "./routes/api/contacts.ts": $api_contacts,
    "./routes/api/deals.ts": $api_deals,
    "./routes/api/metrics.ts": $api_metrics,
    "./routes/api/mod.ts": $api_mod,
    "./routes/api/users.ts": $api_users,
    "./routes/contacts/[id]/_layout.tsx": $contacts_id_layout,
    "./routes/contacts/[id]/index.tsx": $contacts_id_index,
    "./routes/contacts/[id]/notes.tsx": $contacts_id_notes,
    "./routes/contacts/index.tsx": $contacts_index,
    "./routes/deals/[id]/_layout.tsx": $deals_id_layout,
    "./routes/deals/[id]/index.tsx": $deals_id_index,
    "./routes/deals/[id]/notes.tsx": $deals_id_notes,
    "./routes/deals/index.tsx": $deals_index,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/account.tsx": $account,
    "./islands/accounts.tsx": $accounts,
    "./islands/contact.tsx": $contact,
    "./islands/contacts.tsx": $contacts,
    "./islands/dashboard.account-select.tsx": $dashboard_account_select,
    "./islands/dashboard.tsx": $dashboard,
    "./islands/deal.tsx": $deal,
    "./islands/deals.kanban-card.tsx": $deals_kanban_card,
    "./islands/deals.kanban-group.tsx": $deals_kanban_group,
    "./islands/deals.tsx": $deals,
    "./islands/nav.tsx": $nav,
    "./islands/notes.tsx": $notes,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
