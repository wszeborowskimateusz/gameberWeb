/*eslint-disable */
//TODO: Fix circular dependency in store
import router from '@/router';
import toasts from '@/utilities/toasts';

function handleResponse(response) {
  return response.text().then((text) => {
    console.log(response);
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        localStorage.removeItem('user');
        // This is just a page that requires a valid token
        router.push('/store');
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

// This function checks is token from localSorage is the one from a request
function checkToken(token) {
  const userToken = JSON.parse(localStorage.getItem('user'));
  if (token !== userToken) {
    // This is just a page that requires a valid token
    localStorage.removeItem('user');
    router.push('/store');
  }
}

export default {
  sendGetRequest(token, url) {
    if (token !== null) {
      const requestOptions = {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      };
      checkToken(token);
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
      requestOptions.headers.Authorization = `Bearer ${token}`;
      checkToken(token);
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
