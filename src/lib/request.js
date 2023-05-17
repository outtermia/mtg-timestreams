const API_URL = 'https://api.scryfall.com'

const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  cache: 'no-cache',
  headers: { 'Content-Type': 'application/json' },
}

export const fetchApi = async (path, opts = {}) => {
  const options = Object.assign({}, defaultOptions, opts)
  // const { token } = getSession() || {}
  const { token } = {}

  if (token && options.headers.Authorization === undefined) {
    options.headers.Authorization = `Bearer ${token}`
  }

  const response = await fetch(`${API_URL}${path}`, options)
  const length = response.headers.get('Content-Length')

  // Unprocessable entity (may be validation errrors)
  if (response.status === 422 && length !== '0')
    throw response.json()

  if (!response.ok)
    throw toHttpError(response)

  // No content
  if (response.status === 204 || length === '0')
    return undefined

  return response.json()
}

// -- REST --

export const get = path => {
  return fetchApi(path)
}

export const post = (path, data) => {
  return fetchApi(path, {
    method: 'POST',
    body: serialize(data),
  })
}

export const patch = (path, data) => {
  return fetchApi(path, {
    method: 'PATCH',
    body: serialize(data),
  })
}

export const delete$ = (path, data) => {
  return fetchApi(path, {
    method: 'DELETE',
    body: serialize(data),
  })
}

// -- HELPERS --

const serialize = data => {
  if (data === undefined) return undefined

  return JSON.stringify(data)
}

const toHttpError = ({ status, statusText }) => {
  // HTTP/2 doesn't support status messages
  const message = (statusText)
    ? `HTTP ${status}: ${statusText}`
    : `HTTP ${status}`

  return new TypeError(message)
}
