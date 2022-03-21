const accordions = document.querySelectorAll('.accordion');
const accordionTabs = document.querySelectorAll('.info-footer h2');
const accordionLists = document.querySelectorAll('.info-footer__list');

accordions.forEach(function (accordion) {
  const tab = accordion.querySelector('.info-footer h2');
  const list = accordion.querySelector('.info-footer__list');

  tab.addEventListener('click', function () {
    if (tab.classList.contains('tab--opened')) {
      tab.classList.remove('tab--opened');
    } else {
      accordionTabs.forEach(function (btn) {
        btn.classList.remove('tab--opened');
      });
      tab.classList.add('tab--opened');
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
