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
