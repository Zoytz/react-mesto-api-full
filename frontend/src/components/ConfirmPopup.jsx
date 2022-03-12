import React from "react";
import PopupWithForm from "./PopupWithForm";

export const ConfirmPopup = React.memo(({
  onSubmit,
  isOpen,
  onClose,
  isLoading,
}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  }

  return (
    <PopupWithForm
      isLoading={isLoading}
      isFormValid={true}
      onSubmit={handleSubmit}
      name='confirm'
      title='Вы уверены?'
      isOpen={isOpen}
      onClose={onClose}
      buttonText='Да'>
    </PopupWithForm>
  );
})