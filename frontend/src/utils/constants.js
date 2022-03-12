
export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const profileEditForm = document.querySelector('.form_type_profile');
export const formNameInput = document.querySelector('.form__input_type_name');
export const formJobInput = document.querySelector('.form__input_type_job');

export const cardEditForm = document.querySelector('.form_type_card');
export const cardNameInput = document.querySelector('.form__input_type_place-name');
export const cardImageInput = document.querySelector('.form__input_type_place-image');

export const title = document.querySelector('.profile__title');
export const subtitle = document.querySelector('.profile__subtitle');

export const popupImage = document.querySelector('.popup__image');
export const popupTitle = document.querySelector('.popup__title');
export const cards = document.querySelector('.cards');

export const popupTypeText = document.querySelector('.popup_type_text');
export const popupTypeCard = document.querySelector('.popup_type_card');
export const popupTypeImage = document.querySelector('.popup_type_image');

export const addCardButton = document.querySelector('.profile__add-button');
export const editProfileButton = document.querySelector('.profile__edit-button');

export const avatarEditForm = document.querySelector('.form_type_avatar');
export const avatarEditButton = document.querySelector('.profile__avatar-edit-btn');
export const avatar = document.querySelector('.profile__avatar');