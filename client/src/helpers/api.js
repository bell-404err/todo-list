async function request(path, method  = 'GET', body) {

  return fetch(`http://localhost:3000/api${path}`, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      'Content-type': 'application/json'
    }
  })
    .then(data => data.json());
}

export default request;