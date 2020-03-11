import QuestionsSection from './questions-section';
import {KeyCode, getScrollbarWidth} from './utils';

export default class PopupQuestionsSection extends QuestionsSection {
  constructor(section, showBtn) {
    super(section);
    this.showBtn = showBtn;
    this.closeBtn = section.querySelector(`.questions__close`);
    this.isAllExisting = this.isAllExisting && this.showBtn && this.closeBtn;

    this._onDocumentPopupEscKeyDown = this._onDocumentPopupEscKeyDown.bind(this);
    this._onClickOutsideForm = this._onClickOutsideForm.bind(this);
  }

  validateQuestions() {
    super.validateQuestions();
    const storage = {
      name: ``,
      phone: ``,
      question: ``,
      isSupport: true,
    };

    try {
      storage.name = localStorage.getItem(`nameField`);
      storage.phone = localStorage.getItem(`phoneField`);
      storage.question = localStorage.getItem(`questionField`);
    } catch (err) {
      storage.isSupport = false;
    }

    this.closeBtn.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this._closePopup();
    });
    this.showBtn.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this._showPopup(storage);
    });
    this.submitBtn.addEventListener(`click`, (evt) => {
      this._validatePhone();
      if (this.form.checkValidity()) {
        evt.preventDefault();
        if (storage.isSupport) {
          localStorage.setItem(`nameField`, this.name.value);
          localStorage.setItem(`phoneField`, this.phone.value);
          localStorage.setItem(`questionField`, this.question.value);
        }
      }
    });
  }

  _showPopup(storage) {
    document.documentElement.style.overflow = `hidden`;
    document.documentElement.style.paddingRight = `${getScrollbarWidth()}px`;
    this.section.style.display = `flex`;
    if (storage.name) {
      this.name.value = storage.name;
    }
    if (storage.phone) {
      this.phone.value = storage.phone;
    }
    if (storage.question) {
      this.question.value = storage.question;
    }
    this.name.focus();
    document.addEventListener(`keydown`, this._onDocumentPopupEscKeyDown);
    window.addEventListener(`click`, this._onClickOutsideForm);
  }

  _closePopup() {
    document.documentElement.style.overflow = ``;
    document.documentElement.style.paddingRight = ``;
    this.section.style.display = `none`;
    document.removeEventListener(`keydown`, this._onDocumentPopupEscKeyDown);
    window.removeEventListener(`click`, this._onClickOutsideForm);
  }

  _onDocumentPopupEscKeyDown(evt) {
    if (evt.keyCode === KeyCode.ESC) {
      this._closePopup();
    }
  }

  _onClickOutsideForm(evt) {
    if (evt.target.classList.contains(`questions--popup`)) {
      this._closePopup();
    }
  }
}
