const KeyCode = {
  BACKSPACE: 8,
  ESC: 27,
};

const getScrollbarWidth = () => {
  const outer = document.createElement(`div`);
  outer.style.visibility = `hidden`;
  outer.style.overflow = `scroll`;
  outer.style.msOverflowStyle = `scrollbar`;
  document.body.appendChild(outer);

  const inner = document.createElement(`div`);
  outer.appendChild(inner);

  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
};

export {KeyCode, getScrollbarWidth};
