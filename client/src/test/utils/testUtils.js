/* global jest */
require('./../../../config/polyfills');


// fake response object
export const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      'Content-Type': 'application/json'
    }
  })
};

const handleResponse = (mockedUrl, response) => {
  window.fetch = jest.fn().mockImplementation(() => response);
};

// stub successful fetch
export const mockFetch = (mockedUrl, status = 201, data) => {
  handleResponse(
    mockedUrl,
    Promise.resolve(mockResponse(status, null, data))
  );
};

// stub failing fetch
export const mockFetchError = (mockedUrl, status, error = '{}') => {
  handleResponse(
    mockedUrl,
    Promise.reject(mockResponse(status, 'Error', error))
  );
};
