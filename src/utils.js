export const api = (url, body, bearer = null, method = 'POST') => {
  const headers = {
    'Content-Type': 'application/json',
  };
  if (bearer) {
    headers.bearer = bearer
  }
  return fetch(`http://localhost:4000${url}`, {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  })
  .then(res => res.json())
};
