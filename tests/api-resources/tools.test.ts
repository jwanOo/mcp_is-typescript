// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import McpIs from 'mcp_is';

const client = new McpIs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tools', () => {
  // Prism tests are disabled
  test.skip('countMessages', async () => {
    const responsePromise = client.tools.countMessages();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('countMessages: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.tools.countMessages(
        {
          filterProps: {
            integrationFlowId: 'integrationFlowId',
            LogEnd: 'LogEnd',
            LogStart: 'LogStart',
            msgGUID: 'msgGUID',
            receiver: 'receiver',
            sender: 'sender',
            status: ['string'],
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(McpIs.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('createEmptyIflow: only required params', async () => {
    const responsePromise = client.tools.createEmptyIflow({ id: 'id', packageId: 'packageId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createEmptyIflow: required and optional params', async () => {
    const response = await client.tools.createEmptyIflow({ id: 'id', packageId: 'packageId' });
  });

  // Prism tests are disabled
  test.skip('createEmptyMapping: only required params', async () => {
    const responsePromise = client.tools.createEmptyMapping({ id: 'id', packageId: 'packageId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createEmptyMapping: required and optional params', async () => {
    const response = await client.tools.createEmptyMapping({ id: 'id', packageId: 'packageId' });
  });

  // Prism tests are disabled
  test.skip('createMappingTestIflow: only required params', async () => {
    const responsePromise = client.tools.createMappingTestIflow({ pkgId: 'pkgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createMappingTestIflow: required and optional params', async () => {
    const response = await client.tools.createMappingTestIflow({ pkgId: 'pkgId' });
  });

  // Prism tests are disabled
  test.skip('createPackage: only required params', async () => {
    const responsePromise = client.tools.createPackage({ id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createPackage: required and optional params', async () => {
    const response = await client.tools.createPackage({
      id: 'id',
      name: 'name',
      shortText: 'shortText',
    });
  });

  // Prism tests are disabled
  test.skip('deployIflow: only required params', async () => {
    const responsePromise = client.tools.deployIflow({ iflowId: 'iflowId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deployIflow: required and optional params', async () => {
    const response = await client.tools.deployIflow({ iflowId: 'iflowId' });
  });

  // Prism tests are disabled
  test.skip('deployMessageMapping: only required params', async () => {
    const responsePromise = client.tools.deployMessageMapping({ mappingId: 'mappingId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deployMessageMapping: required and optional params', async () => {
    const response = await client.tools.deployMessageMapping({ mappingId: 'mappingId' });
  });

  // Prism tests are disabled
  test.skip('discoverPackages', async () => {
    const responsePromise = client.tools.discoverPackages();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listAllIflows: only required params', async () => {
    const responsePromise = client.tools.listAllIflows({ pkgId: 'pkgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listAllIflows: required and optional params', async () => {
    const response = await client.tools.listAllIflows({ pkgId: 'pkgId' });
  });

  // Prism tests are disabled
  test.skip('listAllMessageMappings', async () => {
    const responsePromise = client.tools.listAllMessageMappings();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listIflowExamples', async () => {
    const responsePromise = client.tools.listIflowExamples();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listMappingExamples', async () => {
    const responsePromise = client.tools.listMappingExamples();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listPackages', async () => {
    const responsePromise = client.tools.listPackages();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveDeployError: only required params', async () => {
    const responsePromise = client.tools.retrieveDeployError({ id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveDeployError: required and optional params', async () => {
    const response = await client.tools.retrieveDeployError({ id: 'id' });
  });

  // Prism tests are disabled
  test.skip('retrieveDocs', async () => {
    const responsePromise = client.tools.retrieveDocs();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveDocs: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.tools.retrieveDocs({ docPath: 'docPath' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(McpIs.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveIflow: only required params', async () => {
    const responsePromise = client.tools.retrieveIflow({ id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveIflow: required and optional params', async () => {
    const response = await client.tools.retrieveIflow({ id: 'id' });
  });

  // Prism tests are disabled
  test.skip('retrieveIflowConfigurations: only required params', async () => {
    const responsePromise = client.tools.retrieveIflowConfigurations({ iflowId: 'iflowId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveIflowConfigurations: required and optional params', async () => {
    const response = await client.tools.retrieveIflowConfigurations({ iflowId: 'iflowId' });
  });

  // Prism tests are disabled
  test.skip('retrieveIflowEndpoints', async () => {
    const responsePromise = client.tools.retrieveIflowEndpoints();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveIflowEndpoints: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.tools.retrieveIflowEndpoints({ iflowId: 'iflowId' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(McpIs.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveIflowExample: only required params', async () => {
    const responsePromise = client.tools.retrieveIflowExample({ name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveIflowExample: required and optional params', async () => {
    const response = await client.tools.retrieveIflowExample({ name: 'name' });
  });

  test('retrieveIflowImage: required and optional params', async () => {
    const response = await client.tools.retrieveIflowImage({ iflowId: 'iflowId' });
  });

  // Prism tests are disabled
  test.skip('retrieveMappingExample: only required params', async () => {
    const responsePromise = client.tools.retrieveMappingExample({ name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveMappingExample: required and optional params', async () => {
    const response = await client.tools.retrieveMappingExample({ name: 'name' });
  });

  // Prism tests are disabled
  test.skip('retrieveMessageMapping: only required params', async () => {
    const responsePromise = client.tools.retrieveMessageMapping({ id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveMessageMapping: required and optional params', async () => {
    const response = await client.tools.retrieveMessageMapping({ id: 'id' });
  });

  // Prism tests are disabled
  test.skip('retrieveMessages', async () => {
    const responsePromise = client.tools.retrieveMessages();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveMessages: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.tools.retrieveMessages(
        {
          filterProps: {
            integrationFlowId: 'integrationFlowId',
            LogEnd: 'LogEnd',
            LogStart: 'LogStart',
            msgGUID: 'msgGUID',
            receiver: 'receiver',
            sender: 'sender',
            status: ['INFO'],
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(McpIs.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrievePackage: only required params', async () => {
    const responsePromise = client.tools.retrievePackage({ name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrievePackage: required and optional params', async () => {
    const response = await client.tools.retrievePackage({ name: 'name' });
  });

  // Prism tests are disabled
  test.skip('searchDocs: only required params', async () => {
    const responsePromise = client.tools.searchDocs({ keywords: ['string'], matchAll: true });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('searchDocs: required and optional params', async () => {
    const response = await client.tools.searchDocs({ keywords: ['string'], matchAll: true });
  });

  // Prism tests are disabled
  test.skip('sendHTTPMessage: only required params', async () => {
    const responsePromise = client.tools.sendHTTPMessage({ method: 'GET', path: 'path' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('sendHTTPMessage: required and optional params', async () => {
    const response = await client.tools.sendHTTPMessage({
      method: 'GET',
      path: 'path',
      body: 'body',
      contentType: 'contentType',
      headers: [{ key: 'key', value: 'value' }],
    });
  });

  // Prism tests are disabled
  test.skip('updateIflow: only required params', async () => {
    const responsePromise = client.tools.updateIflow({
      id: 'id',
      autoDeploy: true,
      files: [{}],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateIflow: required and optional params', async () => {
    const response = await client.tools.updateIflow({
      id: 'id',
      autoDeploy: true,
      files: [
        {
          appendMode: true,
          content: 'content',
          filepath: 'filepath',
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('updateMessageMapping: only required params', async () => {
    const responsePromise = client.tools.updateMessageMapping({
      id: 'id',
      autoDeploy: true,
      files: [{}],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateMessageMapping: required and optional params', async () => {
    const response = await client.tools.updateMessageMapping({
      id: 'id',
      autoDeploy: true,
      files: [
        {
          appendMode: true,
          content: 'content',
          filepath: 'filepath',
        },
      ],
    });
  });
});
