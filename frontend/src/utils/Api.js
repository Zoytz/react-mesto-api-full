const token = localStorage.getItem('jwt');

class Api {
  constructor(config){
    this._url = config.url;
    this._headers = config.headers;
  }


  getInitialCards() {
    return fetch(`${this._url}cards`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(this._checkResOk)
    // .then((res) => {
    //   if (res.ok){
    //     return res.json();
    //   }
    //   return Promise.reject('getInitialCards');
    // });
  }

  addCard(data) {
    return fetch(`${this._url}cards`, {
      method: 'POST',
      headers: this._headers,
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

  deleteCard(cardId) {
    return fetch(`${this._url}cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(this._checkResOk)
    // .then((res) => {
    //   if (res.ok){
    //     return res.json();
    //   }
    //   return Promise.reject('addCard');
    // });
  }

  getUserInfo() {
    return fetch(`${this._url}users/me`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(this._checkResOk)
    // .then((res) => {
    //   if (res.ok){
    //     return res.json();
    //   }
    //   return Promise.reject('getUserInfo');
    // });
  }

  editUserInfo(data) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: this._headers,
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

  editUserAvatar(data) {
    return fetch(`${this._url}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
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

  setLikeCard(cardId) {
    return fetch(`${this._url}cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers,
    })
    .then(this._checkResOk)
    // .then((res) => {
    //   if (res.ok){
    //     return res.json();
    //   }
    //   return Promise.reject('addCard');
    // });
  }

  delLikeCard(cardId) {
    return fetch(`${this._url}cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
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
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${token}`,
  }
})

export default api;