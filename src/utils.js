export const api = (url, body, method) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  const jwt = localStorage.getItem('jwt');
  if (jwt) {
    headers.authorization = `Bearer ${jwt}`
  }
  const options = {
    method,
    headers
  };
  if (body !== null) {
    options.body = JSON.stringify(body)
  }
  return fetch(`http://localhost:4000${url}`, options)
  .then(res => res.json())
};
