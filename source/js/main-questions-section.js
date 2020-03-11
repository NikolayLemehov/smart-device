import QuestionsSection from './questions-section';

export default class MainQuestionsSection extends QuestionsSection {
  validateQuestions() {
    super.validateQuestions();
    this.submitBtn.addEventListener(`click`, (evt) => {
      this._validatePhone();
      if (this.form.checkValidity()) {
        evt.preventDefault();
      }
    });
  }
}
