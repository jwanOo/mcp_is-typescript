// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Tools extends APIResource {
  /**
   * Count messages from message monitoring with optional filtering
   */
  countMessages(
    query: ToolCountMessagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/tools/count-messages', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create an empty iflow without functionality. Content can be added afterwards
   */
  createEmptyIflow(body: ToolCreateEmptyIflowParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/tools/create-empty-iflow', { body, ...options });
  }

  /**
   * Create an empty message mapping without functionality
   */
  createEmptyMapping(body: ToolCreateEmptyMappingParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/tools/create-empty-mapping', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Creates an iflow called if_echo_mapping for testing message mappings
   */
  createMappingTestIflow(body: ToolCreateMappingTestIflowParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/tools/create-mapping-testiflow', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create a new integration package with optional name and short text
   */
  createPackage(body: ToolCreatePackageParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/tools/create-package', { body, ...options });
  }

  /**
   * Deploy an iflow to the integration suite
   */
  deployIflow(body: ToolDeployIflowParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/tools/deploy-iflow', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Deploy a message-mapping
   */
  deployMessageMapping(body: ToolDeployMessageMappingParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/tools/deploy-message-mapping', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get information about packages from the integration suite discover center
   */
  discoverPackages(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/tools/discover-packages', options);
  }

  /**
   * Get a list of all available iflows in a Package
   */
  listAllIflows(query: ToolListAllIflowsParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/tools/get-all-iflows', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all available message mappings
   */
  listAllMessageMappings(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/tools/get-all-messagemappings', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a list of available iflow examples
   */
  listIflowExamples(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/tools/list-iflow-examples', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all available message mapping examples
   */
  listMappingExamples(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/tools/list-mapping-examples', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a list of all available integration packages
   */
  listPackages(options?: RequestOptions): APIPromise<ToolListPackagesResponse> {
    return this._client.get('/tools/packages', options);
  }

  /**
   * Get error details for failed artifact deployments
   */
  retrieveDeployError(query: ToolRetrieveDeployErrorParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/tools/get-deploy-error', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get indexed documentation parts from SAP Integration Suite docs
   */
  retrieveDocs(
    query: ToolRetrieveDocsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/tools/get-docs', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve the data of an iflow and its contained resources
   */
  retrieveIflow(
    query: ToolRetrieveIflowParams,
    options?: RequestOptions,
  ): APIPromise<ToolRetrieveIflowResponse> {
    return this._client.get('/tools/get-iflow', { query, ...options });
  }

  /**
   * Get all configurations of an IFlow
   */
  retrieveIflowConfigurations(
    query: ToolRetrieveIflowConfigurationsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/tools/get-iflow-configurations', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get endpoint(s) of iflow and its URLs and Protocols
   */
  retrieveIflowEndpoints(
    query: ToolRetrieveIflowEndpointsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/tools/get-iflow-endpoints', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get an existing iflow as an example
   */
  retrieveIflowExample(query: ToolRetrieveIflowExampleParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/tools/get-iflow-example', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get the iflow logic shown as an image/diagram
   */
  retrieveIflowImage(query: ToolRetrieveIflowImageParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/tools/iflow-image', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'image/png' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Get an example provided by list-mapping-examples
   */
  retrieveMappingExample(
    query: ToolRetrieveMappingExampleParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/tools/get-mapping-example', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get the data of a Message Mapping and its resources
   */
  retrieveMessageMapping(
    query: ToolRetrieveMessageMappingParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/tools/get-messagemapping', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get messages from message monitoring with optional filtering
   */
  retrieveMessages(
    query: ToolRetrieveMessagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/tools/get-messages', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve the content of a specific integration package by name
   */
  retrievePackage(query: ToolRetrievePackageParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/tools/package', { query, ...options });
  }

  /**
   * Search for docs based on keywords
   */
  searchDocs(query: ToolSearchDocsParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/tools/search-docs', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Send an HTTP request to integration suite
   */
  sendHTTPMessage(body: ToolSendHTTPMessageParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/tools/send-http-message', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update or create files/content of an iflow with optional auto-deployment
   */
  updateIflow(body: ToolUpdateIflowParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put('/tools/update-iflow', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update or create files/content of a message mapping
   */
  updateMessageMapping(body: ToolUpdateMessageMappingParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put('/tools/update-message-mapping', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type ToolCreateEmptyIflowResponse = unknown;

export type ToolCreatePackageResponse = unknown;

export type ToolDiscoverPackagesResponse = unknown;

export type ToolListPackagesResponse = Array<unknown>;

export interface ToolRetrieveIflowResponse {
  iflowContent?: unknown;

  type?: 'success';
}

export type ToolRetrievePackageResponse = unknown;

export interface ToolCountMessagesParams {
  /**
   * Filter properties
   */
  filterProps?: ToolCountMessagesParams.FilterProps;
}

export namespace ToolCountMessagesParams {
  /**
   * Filter properties
   */
  export interface FilterProps {
    integrationFlowId?: string;

    LogEnd?: string;

    LogStart?: string;

    msgGUID?: string;

    receiver?: string;

    sender?: string;

    status?: Array<string>;
  }
}

export interface ToolCreateEmptyIflowParams {
  /**
   * ID/Name of the Iflow
   */
  id: string;

  /**
   * Package ID
   */
  packageId: string;
}

export interface ToolCreateEmptyMappingParams {
  /**
   * ID/Name of the Message Mapping
   */
  id: string;

  /**
   * Package ID
   */
  packageId: string;
}

export interface ToolCreateMappingTestIflowParams {
  /**
   * Package in which the iflow should be created
   */
  pkgId: string;
}

export interface ToolCreatePackageParams {
  /**
   * ID of the package
   */
  id: string;

  /**
   * Package Name (uses ID by default)
   */
  name?: string;

  /**
   * Short text of the package
   */
  shortText?: string;
}

export interface ToolDeployIflowParams {
  /**
   * ID/Name of iflow
   */
  iflowId: string;
}

export interface ToolDeployMessageMappingParams {
  /**
   * ID/Name of message-mapping
   */
  mappingId: string;
}

export interface ToolListAllIflowsParams {
  /**
   * Package id
   */
  pkgId: string;
}

export interface ToolRetrieveDeployErrorParams {
  /**
   * Artifact ID
   */
  id: string;
}

export interface ToolRetrieveDocsParams {
  /**
   * Internal documentation path (returns index if not provided)
   */
  docPath?: string;
}

export interface ToolRetrieveIflowParams {
  /**
   * ID of the IFLOW
   */
  id: string;
}

export interface ToolRetrieveIflowConfigurationsParams {
  /**
   * Id or name of the iflow
   */
  iflowId: string;
}

export interface ToolRetrieveIflowEndpointsParams {
  /**
   * Iflow ID (optional, gets all if not specified)
   */
  iflowId?: string;
}

export interface ToolRetrieveIflowExampleParams {
  /**
   * Example name from list-iflow-examples
   */
  name: string;
}

export interface ToolRetrieveIflowImageParams {
  /**
   * IFlow ID/Name
   */
  iflowId: string;
}

export interface ToolRetrieveMappingExampleParams {
  /**
   * Example name from list-mapping-examples
   */
  name: string;
}

export interface ToolRetrieveMessageMappingParams {
  /**
   * ID of the Message Mapping
   */
  id: string;
}

export interface ToolRetrieveMessagesParams {
  /**
   * Filter properties
   */
  filterProps?: ToolRetrieveMessagesParams.FilterProps;
}

export namespace ToolRetrieveMessagesParams {
  /**
   * Filter properties
   */
  export interface FilterProps {
    integrationFlowId?: string;

    /**
     * End date/time (format: 2017-04-13T15:51:04)
     */
    LogEnd?: string;

    /**
     * Starting date/time (format: 2017-04-13T15:51:04)
     */
    LogStart?: string;

    msgGUID?: string;

    receiver?: string;

    sender?: string;

    status?: Array<
      'INFO' | 'RETRY' | 'FAILED' | 'ABANDONED' | 'COMPLETED' | 'PROCESSING' | 'ESCALATED' | 'DISCARDED'
    >;
  }
}

export interface ToolRetrievePackageParams {
  /**
   * Name/ID of the package
   */
  name: string;
}

export interface ToolSearchDocsParams {
  /**
   * Search keywords
   */
  keywords: Array<string>;

  /**
   * If true matches all keywords, if false matches any
   */
  matchAll: boolean;
}

export interface ToolSendHTTPMessageParams {
  /**
   * HTTP Method to use
   */
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';

  /**
   * HTTP Path to send the request to
   */
  path: string;

  /**
   * Request body
   */
  body?: string;

  /**
   * Content type used in header
   */
  contentType?: string;

  /**
   * Additional request headers
   */
  headers?: Array<ToolSendHTTPMessageParams.Header>;
}

export namespace ToolSendHTTPMessageParams {
  export interface Header {
    key?: string;

    value?: string;
  }
}

export interface ToolUpdateIflowParams {
  /**
   * ID of the IFLOW
   */
  id: string;

  /**
   * Deploy after updating
   */
  autoDeploy: boolean;

  files: Array<ToolUpdateIflowParams.File>;
}

export namespace ToolUpdateIflowParams {
  export interface File {
    /**
     * Append to existing file or replace
     */
    appendMode?: boolean;

    /**
     * File content
     */
    content?: string;

    /**
     * filepath within project
     */
    filepath?: string;
  }
}

export interface ToolUpdateMessageMappingParams {
  /**
   * ID of the messageMapping
   */
  id: string;

  /**
   * Deploy after updating
   */
  autoDeploy: boolean;

  files: Array<ToolUpdateMessageMappingParams.File>;
}

export namespace ToolUpdateMessageMappingParams {
  export interface File {
    appendMode?: boolean;

    content?: string;

    filepath?: string;
  }
}

export declare namespace Tools {
  export {
    type ToolCreateEmptyIflowResponse as ToolCreateEmptyIflowResponse,
    type ToolCreatePackageResponse as ToolCreatePackageResponse,
    type ToolDiscoverPackagesResponse as ToolDiscoverPackagesResponse,
    type ToolListPackagesResponse as ToolListPackagesResponse,
    type ToolRetrieveIflowResponse as ToolRetrieveIflowResponse,
    type ToolRetrievePackageResponse as ToolRetrievePackageResponse,
    type ToolCountMessagesParams as ToolCountMessagesParams,
    type ToolCreateEmptyIflowParams as ToolCreateEmptyIflowParams,
    type ToolCreateEmptyMappingParams as ToolCreateEmptyMappingParams,
    type ToolCreateMappingTestIflowParams as ToolCreateMappingTestIflowParams,
    type ToolCreatePackageParams as ToolCreatePackageParams,
    type ToolDeployIflowParams as ToolDeployIflowParams,
    type ToolDeployMessageMappingParams as ToolDeployMessageMappingParams,
    type ToolListAllIflowsParams as ToolListAllIflowsParams,
    type ToolRetrieveDeployErrorParams as ToolRetrieveDeployErrorParams,
    type ToolRetrieveDocsParams as ToolRetrieveDocsParams,
    type ToolRetrieveIflowParams as ToolRetrieveIflowParams,
    type ToolRetrieveIflowConfigurationsParams as ToolRetrieveIflowConfigurationsParams,
    type ToolRetrieveIflowEndpointsParams as ToolRetrieveIflowEndpointsParams,
    type ToolRetrieveIflowExampleParams as ToolRetrieveIflowExampleParams,
    type ToolRetrieveIflowImageParams as ToolRetrieveIflowImageParams,
    type ToolRetrieveMappingExampleParams as ToolRetrieveMappingExampleParams,
    type ToolRetrieveMessageMappingParams as ToolRetrieveMessageMappingParams,
    type ToolRetrieveMessagesParams as ToolRetrieveMessagesParams,
    type ToolRetrievePackageParams as ToolRetrievePackageParams,
    type ToolSearchDocsParams as ToolSearchDocsParams,
    type ToolSendHTTPMessageParams as ToolSendHTTPMessageParams,
    type ToolUpdateIflowParams as ToolUpdateIflowParams,
    type ToolUpdateMessageMappingParams as ToolUpdateMessageMappingParams,
  };
}
