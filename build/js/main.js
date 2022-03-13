const body = document.body;
const accordions = document.querySelectorAll('.accordion');
const accordionButtons = document.querySelectorAll('.info-footer__button');
const accordionLists = document.querySelectorAll('.info-footer__list');

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
//# sourceMappingURL=main.js.map
