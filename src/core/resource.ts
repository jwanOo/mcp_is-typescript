// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { McpIs } from '../client';

export abstract class APIResource {
  protected _client: McpIs;

  constructor(client: McpIs) {
    this._client = client;
  }
}
