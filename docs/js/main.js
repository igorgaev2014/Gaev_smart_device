const accordions = document.querySelectorAll('.accordion');
const accordionTabs = document.querySelectorAll('.info-footer h2');
const accordionElements = document.querySelectorAll('.info-footer__list');

accordions.forEach(function (accordion) {
  const tab = accordion.querySelector('.info-footer h2');
  const element = accordion.querySelector('.info-footer__list');

  tab.addEventListener('click', function () {
    if (element.classList.contains('list--opened')) {
      element.classList.remove('list--opened');
    } else {
      accordionElements.forEach(function (list) {
        list.classList.remove('list--opened');
      });
      element.classList.add('list--opened');
    }
  });
});

const page = document.querySelector('.page');
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
    page.classList.add('overflow');
    nameField.focus();
  }
}

const closeModal = function () {
  if (!modal.classList.contains('modal--closed')) {
    modal.classList.add('modal--closed');
    overlay.classList.add('overlay--closed');
    page.classList.remove('overflow');
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

const form = document.querySelector('#feedback .form');
const nameInput = document.querySelector('#name');
const telInput = document.querySelector('#tel');
const textareaInput = document.querySelector('#textarea');

const formModal = document.querySelector('.modal .form');
const nameInputModal = document.querySelector('#name-modal');
const telInputModal = document.querySelector('#tel-modal');
const textareaInputModal = document.querySelector('#textarea-modal');

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
//# sourceMappingURL=main.js.map
