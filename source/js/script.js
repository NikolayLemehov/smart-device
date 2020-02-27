'use strict';

var activeFooterMenu = function () {
  var footerMenu = document.querySelector('.page-footer__menu');
  var toggle = footerMenu.querySelector('.page-footer__toggle');
  var plus = toggle.querySelector('.page-footer__plus');
  var minus = toggle.querySelector('.page-footer__minus');

  footerMenu.classList.remove('page-footer__menu--nojs');

  toggle.addEventListener('click', function () {
    if (footerMenu.classList.contains('page-footer__menu--closed')) {
      footerMenu.classList.remove('page-footer__menu--closed');
      footerMenu.classList.add('page-footer__menu--opened');
      plus.style.display = 'none';
      minus.style.display = 'block';
    } else {
      footerMenu.classList.add('page-footer__menu--closed');
      footerMenu.classList.remove('page-footer__menu--opened');
      plus.style.display = 'block';
      minus.style.display = 'none';
    }
  });
};

var activeFooterOurContacts = function () {
  var footerMenu = document.querySelector('.page-footer__our-contacts');
  var toggle = footerMenu.querySelector('.page-footer__toggle');
  var plus = toggle.querySelector('.page-footer__plus');
  var minus = toggle.querySelector('.page-footer__minus');

  footerMenu.classList.remove('page-footer__our-contacts--nojs');

  toggle.addEventListener('click', function () {
    if (footerMenu.classList.contains('page-footer__our-contacts--closed')) {
      footerMenu.classList.remove('page-footer__our-contacts--closed');
      footerMenu.classList.add('page-footer__our-contacts--opened');
      plus.style.display = 'none';
      minus.style.display = 'block';
    } else {
      footerMenu.classList.add('page-footer__our-contacts--closed');
      footerMenu.classList.remove('page-footer__our-contacts--opened');
      plus.style.display = 'block';
      minus.style.display = 'none';
    }
  });
};

activeFooterMenu();
activeFooterOurContacts();
