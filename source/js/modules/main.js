const body = document.body;
const accordions = document.querySelectorAll('.accordion');
const accordionButtons = document.querySelectorAll('.info-footer__button');
const accordionLists = document.querySelectorAll('.info-footer__list');
const form = document.querySelector('#feedback .form');
const formModal = document.querySelector('.modal .form');
const nameInput = document.querySelector('#name');
const telInput = document.querySelector('#tel');
const textareaInput = document.querySelector('#textarea');
const nameInputModal = document.querySelector('#name-modal');
const telInputModal = document.querySelector('#tel-modal');
const textareaInputModal = document.querySelector('#textarea-modal');
const overlay = document.querySelector('.overlay');
const modalOpenButton = document.querySelector('.main-nav__button');
const modalCloseButton = document.querySelector('.modal__close');
const modal = document.querySelector('.modal.feedback');
const nameField = document.querySelector('.modal [type="text"]');

body.classList.remove('no-js');

accordions.forEach(function (accordion) {
  const button = accordion.querySelector('.info-footer__button');
  const list = accordion.querySelector('.info-footer__list');

  button.addEventListener('click', function () {
    if (button.classList.contains('button--opened')) {
      button.classList.remove('button--opened');
    } else {
      accordionButtons.forEach(function (btn) {
        btn.classList.remove('button--opened');
      });
      button.classList.add('button--opened');
    }

    if (list.classList.contains('list--opened')) {
      list.classList.remove('list--opened');
    } else {
      accordionLists.forEach(function (list) {
        list.classList.remove('list--opened');
      });
      list.classList.add('list--opened');
    }
  });
});

if (modalOpenButton) {
  modalOpenButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (modal.classList.contains('modal--closed')) {
      modal.classList.remove('modal--closed');
      overlay.classList.remove('overlay--closed');
      body.classList.add('overflow');
      nameField.focus();
    }
  });
}

if (modalCloseButton) {
  modalCloseButton.addEventListener('click', function () {
    if (!modal.classList.contains('modal--closed')) {
      modal.classList.add('modal--closed');
      overlay.classList.add('overlay--closed');
      body.classList.remove('overflow');
    }
  });
}

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!modal.classList.contains('modal--closed')) {
      modal.classList.add('modal--closed');
      overlay.classList.add('overlay--closed');
      body.classList.remove('overflow');
    }
  }
});

if (overlay) {
  overlay.addEventListener('click', function () {
    if (!modal.classList.contains('modal--closed')) {
      modal.classList.add('modal--closed');
      overlay.classList.add('overlay--closed');
      body.classList.remove('overflow');
    }
  });
}

IMask(document.querySelector('#tel'), {mask: '+{7}(000)000-00-00'});
IMask(document.querySelector('#tel-modal'), {mask: '+{7}(000)000-00-00'});

if (form) {
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    localStorage.setItem('name', nameInput.value);
    localStorage.setItem('tel', telInput.value);
    localStorage.setItem('textarea', textareaInput.value);
  });
}

if (formModal) {
  formModal.addEventListener('submit', function (evt) {
    evt.preventDefault();
    localStorage.setItem('name-modal', nameInputModal.value);
    localStorage.setItem('tel-modal', telInputModal.value);
    localStorage.setItem('textarea-modal', textareaInputModal.value);
  });
}
