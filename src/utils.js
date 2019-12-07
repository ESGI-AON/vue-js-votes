export const api = (url, body, method) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  const jwt = localStorage.getItem('jwt');
  if (jwt) {
    headers.authorization = `Bearer ${jwt}`
  }
  return fetch(`http://localhost:4000${url}`, {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  })
  .then(res => res.json())
};
