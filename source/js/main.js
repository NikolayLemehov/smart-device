import {activeFooter} from './footer';
import {activeSmoothScroll} from './smooth-scroll';
import MainQuestionsSection from './main-questions-section';
import PopupQuestionsSection from './popup-questions-section';

const showBtn = document.querySelector(`.main-nav__recall a`);
const addPopup = function () {
  const popupTemplate = document.querySelector(`#questions-popup`).content.querySelector(`.questions--popup`);
  const element = popupTemplate.cloneNode(true);
  element.style.display = `none`;
  document.body.appendChild(element);
  return document.body.querySelector(`.questions--popup`);
};

activeSmoothScroll();
activeFooter();
const mainQuestionsSection = new MainQuestionsSection(document.querySelector(`main .questions`));
mainQuestionsSection.validateQuestions();
const popupQuestionsSection = new PopupQuestionsSection(addPopup(), showBtn);
popupQuestionsSection.validateQuestions();
