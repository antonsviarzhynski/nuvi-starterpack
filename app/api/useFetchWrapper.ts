function useFetchWrapper() {
  return {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    patch: request('PATCH'),
    delete: request('DELETE'),
  }

  function request(method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE') {
    return async (url: string, body?: unknown, params?: RequestParams) => {
      const requestHeaders: RequestInit = {
        method,
        headers: {} as Headers,
      }

      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          Object.assign(requestHeaders, { [key]: value })
        })
      }

      if (body) {
        requestHeaders.headers = {
          ...requestHeaders.headers,
          'Content-Type': 'application/json',
        }
        requestHeaders.body = JSON.stringify(body)
      }
      const response = await fetch(url, requestHeaders)
      return await handleResponse(response)
    }
  }

  async function handleResponse(response: Response) {
    const text = await response.text()

    if (!response.ok) {
      // TODO notifications
      return Promise.reject(response.status)
    }

    return text
  }
}

export default useFetchWrapper
