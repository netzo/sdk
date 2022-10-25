import {
  ClientBuilder,
  ClientMethodHandler as InvokeFn,
} from "../fetch/types.ts";
import { Authorization } from "../utils/auth/types.ts";

// items:

export interface IService {
  _id: string;
  _type: "service";
  workspaceId: string;
  access: { level: "private" | "public" };
  name: string;
  description: string;
  labels: string[];
  stars: number;
  display: { imageUrl: string };
  base: IRequestBase;
  requests: IRequest[];
  [key: string | symbol]: unknown; // required by deepMerge
}

export interface IRequest {
  _id: string;
  _type: "request";
  workspaceId: string;
  access: { level: "private" | "public" };
  name: string;
  description: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  url: string;
  params?: Record<string, string>;
  authorization: Authorization;
  headers?: Record<string, string>;
  body?: string;
  variables?: Record<string, string>;
  hooks: {
    beforeFetch: string;
    afterFetch: string;
    onFetchError: string;
  };
  item: {
    _id?: string;
    _type?: "service" | "worker";
    base?: IRequestBase; // populated at runtime
  };
  [key: string | symbol]: unknown; // required by deepMerge
}

export interface IRequestBase {
  name?: string;
  description?: string;
  baseURL?: string; // ignored if undefined or if url is absolute
  authorization?: Authorization;
  headers?: Record<string, string>;
  variables?: Record<string, unknown>;
  [key: string | symbol]: unknown; // required by deepMerge
}

// clients:

export interface ServiceClient {
  client: ClientBuilder;
  requests: {
    [index: number]: ServiceRequestClient;
  } & {
    [name: string]: InvokeFn;
  };
  item: IService;
}

export interface ServiceRequestClient {
  request: Request;
  invoke: InvokeFn;
  item: IRequest;
}
