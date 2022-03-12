
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import { ConfirmPopup } from '../components/ConfirmPopup';
import ImagePopup from '../components/ImagePopup';
import InfoTooltip from './InfoTooltip ';
import { Login } from '../components/Login';
import { Register } from '../components/Register';
import { AuthForm } from '../components/AuthForm';
import ProtectedRoute from './ProtectedRoute';
import { MobileMenu } from './MobileMenu';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { EditProfilePopup } from '../components/EditProfilePopup';
import { EditAvatarPopup } from '../components/EditAvatarPopup';
import { AddPlacePopup } from '../components/AddPlacePopup ';
import { Route, Routes, useNavigate } from 'react-router-dom';
import * as auth from '../utils/auth';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);

  const [infoTooltipStatus, setInfoTooltipStatus] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  const [selectedDeleteCard, setSelectedDeleteCard] = React.useState({});

  const [currentUser, setCurrentUser] = React.useState({});

  const [userEmail, setUserEmail] = React.useState('');

  const [cards, setCards] = React.useState([]);

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const [isMenuButtonActive, setIsMenuButtonActive] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    api.getInitialCards(localStorage.getItem('token'))
      .then((resCards) => {
        setCards(resCards);
      })
      .catch((err) => { console.log('Ошибочка вышла', err) });
  }, [])

  React.useEffect(() => {
    api.getUserInfo(localStorage.getItem('token'))
      .then((resUser) => {
        setCurrentUser(resUser)
      })
      .catch((err) => { console.log('Ошибочка вышла', err) });
  }, currentUser);

  function handleInfoTooltipStatus(boolean) {
    setInfoTooltipStatus(boolean);
  }

  function handleChangeUserEmail(userEmail) {
    setUserEmail(userEmail)
  }

  function handleCardLike(card) {

    const isLiked = card.likes.some(i => i === currentUser._id);

    if (!isLiked) {
      api.setLikeCard(card._id, localStorage.getItem('token'))
        .then((newCard) => {
          setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
        })
        .catch((err) => console.log('Ошибка в handleCardLike', err));
    } else {
      api.delLikeCard(card._id, localStorage.getItem('token'))
        .then((newCard) => {
          setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
        })
        .catch((err) => console.log('Ошибка в handleCardLike', err));
    }

  }

  function handleCardDeleteSubmit() {
    setIsLoading(true);
    api.deleteCard(selectedDeleteCard._id, localStorage.getItem('token'))
      .then((res) => {
        setCards((cards) => cards.filter((c) => c._id !== selectedDeleteCard._id));
      })
      .then((res) => {
        setIsLoading(false);
        setIsConfirmPopupOpen(false);
        setSelectedDeleteCard({});
      })
      .catch((err) => console.log('Ошибка в handleCardDelete'));
  }

  const handleSelectDeleteCard = (selectedCard) => {

    setSelectedDeleteCard(selectedCard);
    setIsConfirmPopupOpen(true);
  }

  function handleAddPlaceSubmit(data) {
    setIsLoading(true);
    api.addCard(data, localStorage.getItem('token'))
      .then((newCard) => {
        setCards([newCard, ...cards]);
        setIsLoading(false);
      })
      .then((res) => closeAllPopups())
      .catch((err) => console.log('Ошибка в handleAddPlaceSubmit', err));
  }

  React.useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    }

    document.addEventListener('keydown', closeByEscape)

    return () => document.removeEventListener('keydown', closeByEscape)
  }, [])

  React.useEffect(() => {
    if (!localStorage.getItem('token')) {
      return
    } else {
      auth.checkToken(localStorage.getItem('token'))
        .then((res) => {
          setIsLoggedIn(true);
          setUserEmail(res.email);
          navigate('/');
        })
        .catch((err) => {
          console.log('Ошибочка вышла', err);
          navigate('/');
        });
    }
  }, userEmail);

  function handleInfoTooltipOpen(boolean) {
    setIsInfoTooltipOpen(boolean);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  };

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setUserEmail('');
    localStorage.removeItem('token');
    navigate('/sign-in');
  }

  function handleMenuButtonActive() {
    setIsMenuButtonActive(!isMenuButtonActive);
  }

  // function handleConfirmClick() {
  //   setIsConfirmPopupOpen(true);
  // };

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setIsConfirmPopupOpen(false);
    setSelectedCard({});
    setIsInfoTooltipOpen(false)

  }

  function handleUpdateUser(data) {
    setIsLoading(true);
    api.editUserInfo(data, localStorage.getItem('token'))
      .then((res) => setCurrentUser(res))
      .then((res) => {
        setIsLoading(false);
        closeAllPopups();
      })
      .catch((err) => console.log('Error'));
  }

  function handleUpdateAvatar(data) {
    setIsLoading(true);
    api.editUserAvatar(data, localStorage.getItem('token'))
      .then((res) => setCurrentUser(res))
      .then((res) => {
        setIsLoading(false);
        closeAllPopups();
      })
      .catch((err) => console.log('Ошибка в handleUpdateAvatar'));
  }

  const handleLoginSubmit = (password, email) => {
    setIsLoading(true);
    auth.authorize(password, email)
      .then((res) => {
        setIsLoading(false);
        handleLogin();
        localStorage.setItem('token', `${res.jwt}`);
        navigate('/');
        auth.checkToken(res.jwt)
          .then((res) => {
            handleChangeUserEmail(res.data.email)
          })
          .catch((err) => console.log('Ошибка в Login', err))
      })
  }

  const handleRegisterSubmit = (password, email) => {
    auth.register(password, email)
      .then((res) => {
        handleInfoTooltipStatus(true);
        handleInfoTooltipOpen(true);
        setTimeout(() => {
          handleInfoTooltipOpen(false);
        }, 2000);
        navigate('/sign-in');

        // if(res.status === 400) {
        //   props.handleInfoTooltipStatus(false);
        //   props.handleInfoTooltipOpen(true);
        //   setTimeout(() => {
        //     props.handleInfoTooltipOpen(false);
        //   }, 2000);
        // } else {
        //   props.handleInfoTooltipStatus(true);
        //   props.handleInfoTooltipOpen(true);
        //   setTimeout(() => {
        //     props.handleInfoTooltipOpen(false);
        //   }, 2000);
        //   history.push('/sign-in');

      })
      .catch((err) => {
        handleInfoTooltipStatus(false);
        handleInfoTooltipOpen(true);
        setTimeout(() => {
          handleInfoTooltipOpen(false);
        }, 2000);
      })

  }


  return (
      <div className="page">
        <div className="page__container">
          <CurrentUserContext.Provider value={currentUser}>
            <MobileMenu
              isMenuButtonActive={isMenuButtonActive}
              userEmail={userEmail}
              handleLogout={handleLogout}
              isLoggedIn={isLoggedIn}
            />
            <Header
              userEmail={userEmail}
              handleLogout={handleLogout}
              isMenuButtonActive={isMenuButtonActive}
              handleMenuButtonActive={handleMenuButtonActive}
            />
            <Routes>
              <Route path="/" element={
                <ProtectedRoute loggedIn={isLoggedIn}>
                  <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                    cards={cards}
                    onCardLike={handleCardLike}
                    onCardDelete={handleSelectDeleteCard} />
                </ProtectedRoute>}
              />

              <Route path="/sign-up" element={
                <Register>
                  <AuthForm
                    title='Регистрация'
                    buttonText='Зарегистрироваться'
                    handleSubmitCallback={handleRegisterSubmit} />
                </Register>
              } />
              <Route path="/sign-in"
                element={
                  <Login>
                    <AuthForm
                      isLoading={isLoading}
                      title='Вход'
                      buttonText='Войти'
                      handleSubmitCallback={handleLoginSubmit} />
                  </Login>
                } />
            </Routes>
            <Footer />


            {isInfoTooltipOpen && <InfoTooltip
              isOpen={isInfoTooltipOpen}
              onClose={closeAllPopups}
              infoTooltipStatus={infoTooltipStatus}
            />}

            {isEditProfilePopupOpen && <EditProfilePopup
              isLoading={isLoading}
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser} />}

            {isAddPlacePopupOpen && <AddPlacePopup
              isLoading={isLoading}
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              onAddPlace={handleAddPlaceSubmit} />}

            {isEditAvatarPopupOpen && <EditAvatarPopup
              isLoading={isLoading}
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar} />}

            {isImagePopupOpen && <ImagePopup
              card={selectedCard}
              isOpen={isImagePopupOpen}
              onClose={closeAllPopups} />}

            <ConfirmPopup
              isLoading={isLoading}
              onSubmit={handleCardDeleteSubmit}
              isOpen={isConfirmPopupOpen}
              onClose={closeAllPopups}
            />

          </CurrentUserContext.Provider>
        </div>
      </div>
  );
}

export default App;
