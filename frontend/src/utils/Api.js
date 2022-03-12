class Api {
  constructor(config){
    this._url = config.url;
  }


  getInitialCards(token) {
    return fetch(`${this._url}cards`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    })
    .then(this._checkResOk)
    // .then((res) => {
    //   if (res.ok){
    //     return res.json();
    //   }
    //   return Promise.reject('getInitialCards');
    // });
  }

  addCard(data, token) {
    return fetch(`${this._url}cards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
    .then(this._checkResOk)
    // .then((res) => {
    //   if (res.ok){
    //     return res.json();
    //   }
    //   return Promise.reject('addCard');
    // });
  }

  deleteCard(cardId, token) {
    return fetch(`${this._url}cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    })
    .then(this._checkResOk)
    // .then((res) => {
    //   if (res.ok){
    //     return res.json();
    //   }
    //   return Promise.reject('addCard');
    // });
  }

  getUserInfo(token) {
    return fetch(`${this._url}users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    })
    .then(this._checkResOk)
    // .then((res) => {
    //   if (res.ok){
    //     return res.json();
    //   }
    //   return Promise.reject('getUserInfo');
    // });
  }

  editUserInfo(data, token) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
    .then(this._checkResOk)
    // .then((res) => {
    //   if (res.ok){
    //     return res.json();
    //   }
    //   return Promise.reject('editUserInfo');
    // })
  }

  editUserAvatar(data, token) {
    return fetch(`${this._url}users/me/avatar`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
    .then(this._checkResOk)
    // .then((res) => {
    //   if (res.ok){
    //     return res.json();
    //   }
    //   return Promise.reject('editUserAvatar');
    // })
  }

  setLikeCard(cardId, token) {
    return fetch(`${this._url}cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    })
    .then(this._checkResOk)
    // .then((res) => {
    //   if (res.ok){
    //     return res.json();
    //   }
    //   return Promise.reject('addCard');
    // });
  }

  delLikeCard(cardId, token) {
    return fetch(`${this._url}cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    })
    .then(this._checkResOk)
    // .then((res) => {
    //   if (res.ok){
    //     return res.json();
    //   }
    //   return Promise.reject('addCard');
    // });
  }

  _checkResOk(res) {
    
      if (res.ok){
        return res.json();
      }
      return Promise.reject('addCard');
  }
}

const api = new Api({
  url: 'https://api.mestodeploy.nomoredomains.work/',
})

export default api;