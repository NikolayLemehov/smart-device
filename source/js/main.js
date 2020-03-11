import {activeFooter} from './footer';
import {activeSmoothScroll} from './smooth-scroll';
import MainQuestionsSection from './main-questions-section';
import PopupQuestionsSection from './popup-questions-section';

const showBtn = document.querySelector(`.main-nav__recall a`);

activeSmoothScroll();
activeFooter();
const mainQuestionsSection = new MainQuestionsSection(document.querySelector(`main .questions`));
mainQuestionsSection.validateQuestions();
const popupQuestionsSection = new PopupQuestionsSection(document.querySelector(`body > .questions`), showBtn);
popupQuestionsSection.validateQuestions();
