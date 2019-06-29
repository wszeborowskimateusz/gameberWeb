import config from '../../config';
import requestSender from '../utilities/requestSender';

function logout() {
  localStorage.removeItem('user');
}

function login(username, password) {
  const url = `${config.apiUrl}/users/signin`;
  return requestSender.sendPostRequest(url, { username, password })
    .then((user) => {
      if (user.jwtToken) {
        localStorage.setItem('user', JSON.stringify(user.jwtToken));
      } else return Promise.reject(new Error("No token provided in server's response"));

      return user;
    });
}

function register(user) {
  const url = `${config.apiUrl}/users/signup`;
  return requestSender.sendPostRequest(url, user);
}


export default {
  login,
  logout,
  register,
};
