'use strict';

var PageFooterToggle = function (className) {
  this.className = className;
  this.element = document.querySelector('.' + className);
  this.toggle = this.element.querySelector('.page-footer__toggle');
  this.plus = this.toggle.querySelector('.page-footer__plus');
  this.minus = this.toggle.querySelector('.page-footer__minus');
  this.isClosed = this.element.classList.contains(this.className + '--closed');
  this.isAllExisting = this.element && this.toggle && this.plus && this.minus;
};
PageFooterToggle.prototype.close = function () {
  this.element.classList.add(this.className + '--closed');
  this.plus.style.display = 'block';
  this.minus.style.display = 'none';
  this.isClosed = true;
};
PageFooterToggle.prototype.open = function () {
  this.element.classList.remove(this.className + '--closed');
  this.plus.style.display = 'none';
  this.minus.style.display = 'block';
  this.isClosed = false;
};
PageFooterToggle.prototype.removeNoJs = function () {
  this.element.classList.remove(this.className + '--nojs');
};

var onViewChange = function () {
  if (!menuToggle.isAllExisting || !outContactsToggle.isAllExisting) {
    return;
  }
  [menuToggle, outContactsToggle].forEach(function (it) {
    if (!it.isClosed) {
      it.close();
    }
  });
};

var activeFooterSection = function (object) {
  if (!object.isAllExisting) {
    return;
  }
  object.removeNoJs();
  object.toggle.addEventListener('click', function () {
    if (object.isClosed) {
      onViewChange();
      object.open();
    } else {
      object.close();
    }
  });
};

var menuToggle = new PageFooterToggle('page-footer__menu');
var outContactsToggle = new PageFooterToggle('page-footer__our-contacts');
activeFooterSection(menuToggle);
activeFooterSection(outContactsToggle);
