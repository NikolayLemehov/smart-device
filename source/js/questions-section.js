import {KeyCode} from './utils';

export default class QuestionsSection {
  constructor(section) {
    this.section = section;
    this.form = section.querySelector(`form`);
    this.questionsPhone = this.form.querySelector(`.questions__phone`);
    this.submitBtn = this.form.querySelector(`button[type="submit"]`);
    this.name = this.form.querySelector(`[name="name"]`);
    this.phone = this.form.querySelector(`[name="phone"]`);
    this.question = this.form.querySelector(`[name="question"]`);
    this.isAllExisting = !!this.form && !!this.questionsPhone && !!this.submitBtn &&
      !!this.name && !!this.phone && !!this.question;
  }

  _validatePhone() {
    const questionsPhone = this.questionsPhone;
    const phoneInput = this.phone;
    const string = phoneInput.value;
    const result = string.match(/\+7\(\d{3}\)\d{7}/);
    const foundMatch = result ? result[0] : null;
    if (foundMatch === string) {
      if (questionsPhone.classList.contains(`questions__phone--no-match`)) {
        questionsPhone.classList.remove(`questions__phone--no-match`);
      }
      phoneInput.setCustomValidity(``);
    } else {
      questionsPhone.classList.add(`questions__phone--no-match`);
      phoneInput.setCustomValidity(`Номер телефона должен соответствовать следующий маске +7(000)0000000`);
    }
  }

  _subscribePhoneEvents() {
    const questionsPhone = this.questionsPhone;
    const phoneInput = this.phone;
    const findStringMatch = (matchResult) => {
      return matchResult ? matchResult[0] : null;
    };
    phoneInput.addEventListener(`focus`, () => {
      if (phoneInput.value === ``) {
        phoneInput.value = `+7(`;
      }
    });

    phoneInput.addEventListener(`change`, () => {
      this._validatePhone();
    });

    phoneInput.addEventListener(`keyup`, (evt) => {
      const string = phoneInput.value;
      if (evt.keyCode === KeyCode.BACKSPACE &&
        string.match(/\+7\(\d{3}/) &&
        !string.match(/\+7\(\d{3}\)\d*/)) {
        phoneInput.value = string.slice(0, -1);
        return;
      }

      if (findStringMatch(string.match(/\+7\(\d{3}/)) === string) {
        phoneInput.value = string + `)`;
      }

      if (findStringMatch(string.match(/(\+7\((\d){3}\)?(\d){0,7})|\+7\((\d){0,3}/)) === string) {
        if (questionsPhone.classList.contains(`questions__phone--no-match`)) {
          questionsPhone.classList.remove(`questions__phone--no-match`);
        }
      } else {
        questionsPhone.classList.add(`questions__phone--no-match`);
        phoneInput.setCustomValidity(`Номер телефона должен соответствовать следующий маске +7(000)0000000`);
      }
    });
  }

  validateQuestions() {
    if (!this.isAllExisting) {
      return;
    }
    this._subscribePhoneEvents();
  }
}
