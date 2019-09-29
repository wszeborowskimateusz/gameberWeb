function refreshToken(refreshedToken) {
  localStorage.setItem('user', refreshedToken);
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        localStorage.removeItem('user');
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    if (data.refreshedJwtToken) {
      refreshToken(data.refreshedJwtToken);
    }
    return data;
  });
}

export default {
  sendGetRequest(url) {
    const token = JSON.parse(localStorage.getItem('user'));
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
  sendPostRequest(url, body) {
    const token = JSON.parse(localStorage.getItem('user'));
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    };

    if (token) {
      requestOptions.headers.Authorization = `Bearer ${token}`;
      return fetch(url, requestOptions)
        .then(response => handleResponse(response));
    }

    return Promise.reject(new Error('No token provided'));
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
