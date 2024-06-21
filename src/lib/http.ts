export class HttpError extends Error {
  constructor(public response: Response) {
    super(`HTTP error ${response.status}`)
  }
}

export async function fetcher<T = unknown>(url: string, options: RequestInit = {}) {
  const resp = await fetch(url, options)

  if (!resp.ok) {
    throw new HttpError(resp)
  }

  const data = (await resp.json()) as T
  return data
}
