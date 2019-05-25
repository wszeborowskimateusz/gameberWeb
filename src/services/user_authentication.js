import config from '../../config';


function logout() {
  localStorage.removeItem('user');
}

function handleResponse(response) {
  return response.text().then((text) => {
    console.log(response);
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
        this.location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  };

  return fetch(`${config.apiUrl}/users/signin`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      if (user.jwtToken) {
        localStorage.setItem('user', JSON.stringify(user.jwtToken));
      }

      return user;
    });
}

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };

  return fetch(`${config.apiUrl}/users/signup`, requestOptions).then(handleResponse);
}


export default {
  login,
  logout,
  register,
};
