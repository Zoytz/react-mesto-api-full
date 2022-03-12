export const BASE_URL = 'https://api.mestodeploy.nomoredomains.work';

function checkResOk(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject('checkResOk');
}

export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
    .then((response) => {
      return checkResOk(response);
    })
};


export const authorize = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
    .then((response) => {
      return checkResOk(response)
    })
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    }
  })
    .then((response) => {
      return checkResOk(response)
    })
};
