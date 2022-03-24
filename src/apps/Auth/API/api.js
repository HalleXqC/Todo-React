const BASE_URL = "https://todoitacademy.pythonanywhere.com"

export const API = {
  get: url => fetch(`${BASE_URL}/${url}`),
  post: (url, data) => fetch(`${BASE_URL}/${url}`, {
    method: 'POST',
    body: data,
    headers: {
      'Content-type': 'application/json'
    }
  })
}