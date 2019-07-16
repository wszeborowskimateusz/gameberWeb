// function logout() {
//   localStorage.removeItem('user');
// }

function handleResponse(response) {
  return response.text().then((text) => {
    console.log(response);
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // logout();
        // this.location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

export default {
  sendGetRequest(token, url) {
    if (token !== null) {
      const requestOptions = {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      };
      return fetch(`${url}`, requestOptions)
        .then(response => handleResponse(response));
    }
    return Promise.reject(new Error('No token provided'));
  },
  sendPostRequest(url, body, token) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    };

    if (token) {
      requestOptions.headers = { Authorization: `Bearer ${token}` };
    }

    return fetch(url, requestOptions)
      .then(response => handleResponse(response));
  },
  sendGetRequestWithoutAuthorization(url) {
    const requestOptions = { method: 'GET' };

    return fetch(`${url}`, requestOptions)
      .then(response => handleResponse(response));
  },
  sendPostRequestWithoutAuthorization(url, body) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    };

    return fetch(`${url}`, requestOptions)
      .then(response => handleResponse(response));
  },
};
