import PageFooterToggle from './page-footer-toggle';

const toggleSectionClasses = [`page-footer__menu`, `page-footer__our-contacts`];
const toggleSections = toggleSectionClasses.map((it) => new PageFooterToggle(it));

const onViewChange = function () {
  if (toggleSections.forEach((it) => it.isAllExisting)) {
    return;
  }
  toggleSections.forEach(function (it) {
    if (!it.isClosed) {
      it.close();
    }
  });
};

const activeFooterSection = function (section) {
  if (!section.isAllExisting) {
    return;
  }
  section.removeNoJs();
  section.toggle.addEventListener(`click`, function () {
    if (section.isClosed) {
      onViewChange();
      section.open();
    } else {
      section.close();
    }
  });
};

const activeFooter = () => {
  toggleSections.forEach((it) => activeFooterSection(it));
};

export {activeFooter};
