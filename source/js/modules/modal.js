const body = document.body;
const overlay = document.querySelector('.overlay');
const modalOpenButton = document.querySelector('.main-nav__button');
const modalCloseButton = document.querySelector('.modal__close');
const modal = document.querySelector('.modal.feedback');
const nameField = document.querySelector('.modal [type="text"]');

body.classList.remove('no-js');

const openModal = function () {
  if (modal.classList.contains('modal--closed')) {
    modal.classList.remove('modal--closed');
    overlay.classList.remove('overlay--closed');
    body.classList.add('overflow');
    nameField.focus();
  }
}

const closeModal = function () {
  if (!modal.classList.contains('modal--closed')) {
    modal.classList.add('modal--closed');
    overlay.classList.add('overlay--closed');
    body.classList.remove('overflow');
  }
}

if (modalOpenButton) {
  modalOpenButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    openModal();
  });
}

if (modalCloseButton) {
  modalCloseButton.addEventListener('click', function () {
    closeModal();
  });
}

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    closeModal();
  }
});

if (overlay) {
  overlay.addEventListener('click', closeModal);
}
