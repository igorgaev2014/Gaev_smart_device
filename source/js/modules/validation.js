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
