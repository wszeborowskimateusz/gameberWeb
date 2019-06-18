function handleResponse(response) {
  return response.text().then((text) => {
    console.log(response);
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

export default {
  sendGetRequest(token, url) {
    if (token != null) {
      const requestOptions = {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      };
      return fetch(`${url}`, requestOptions)
        .then(response => handleResponse(response));
    }
    return Promise.reject(new Error('No token provided'));
  },
};
