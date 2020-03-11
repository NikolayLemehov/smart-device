export default class PageFooterToggle {
  constructor(className) {
    this.className = className;
    this.element = document.querySelector(`.` + className);
    this.toggle = this.element.querySelector(`.page-footer__toggle`);
    this.plus = this.toggle.querySelector(`.page-footer__plus`);
    this.minus = this.toggle.querySelector(`.page-footer__minus`);
    this.isClosed = this.element.classList.contains(this.className + `--closed`);
    this.isAllExisting = this.element && this.toggle && this.plus && this.minus;
  }

  close() {
    this.element.classList.add(this.className + `--closed`);
    this.plus.style.display = `block`;
    this.minus.style.display = `none`;
    this.isClosed = true;
  }

  open() {
    this.element.classList.remove(this.className + `--closed`);
    this.plus.style.display = `none`;
    this.minus.style.display = `block`;
    this.isClosed = false;
  }

  removeNoJs() {
    this.element.classList.remove(this.className + `--nojs`);
  }
}
