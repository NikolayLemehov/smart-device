import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();
const activeSmoothScroll = () => {
  const anchors = document.querySelectorAll(`a.scroll-to`);

  Array.from(anchors).forEach(function (anchor) {
    anchor.addEventListener(`click`, function (evt) {
      evt.preventDefault();

      const blockID = anchor.getAttribute(`href`);

      document.querySelector(blockID).scrollIntoView({
        behavior: `smooth`,
        block: `start`
      });
    });
  });
};

export {activeSmoothScroll};
