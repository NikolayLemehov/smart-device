'use strict';

var KeyCode = {
  BACKSPACE: 8,
  ESC: 27,
};

// footer
(function () {
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
})();

// questions
(function () {
  var validateQuestions = function (form) {
    var questionsPhone = form.querySelector('.questions__phone');
    var phoneInput = questionsPhone.querySelector('input');
    var submitBtn = form.querySelector('button[type="submit"]');

    var validatePhone = function () {
      var string = phoneInput.value;
      var result = string.match(/\+7\(\d{3}\)\d{7}/);
      var foundMatch = result ? result[0] : null;
      if (foundMatch === string) {
        if (questionsPhone.classList.contains('questions__phone--no-match')) {
          questionsPhone.classList.remove('questions__phone--no-match');
          phoneInput.setCustomValidity('');
        }
      } else {
        questionsPhone.classList.add('questions__phone--no-match');
        phoneInput.setCustomValidity('Номер телефона должен соответствовать следующий маске +7(000)0000000');
      }
    };

    var subscribePhoneEvents = function () {
      var findStringMatch = function (matchResult) {
        return matchResult ? matchResult[0] : null;
      };
      phoneInput.addEventListener('focus', function () {
        if (phoneInput.value === '') {
          phoneInput.value = '+7(';
        }
      });

      phoneInput.addEventListener('change', function () {
        validatePhone();
      });

      phoneInput.addEventListener('keyup', function (evt) {
        var string = phoneInput.value;
        if (evt.keyCode === KeyCode.BACKSPACE &&
          string.match(/\+7\(\d{3}/) &&
          !string.match(/\+7\(\d{3}\)\d*/)) {
          phoneInput.value = string.slice(0, -1);
          return;
        }

        if (findStringMatch(string.match(/\+7\(\d{3}/)) === string) {
          phoneInput.value = string + ')';
        }

        if (findStringMatch(string.match(/(\+7\((\d){3}\)?(\d){0,7})|\+7\((\d){0,3}/)) === string) {
          if (questionsPhone.classList.contains('questions__phone--no-match')) {
            questionsPhone.classList.remove('questions__phone--no-match');
          }
        } else {
          questionsPhone.classList.add('questions__phone--no-match');
          phoneInput.setCustomValidity('Номер телефона должен соответствовать следующий маске +7(000)0000000');
        }
      });
    };

    subscribePhoneEvents();
    submitBtn.addEventListener('click', function (evt) {
      validatePhone();
      if (form.checkValidity()) {
        evt.preventDefault();
      }
    });
  };
  var formCollection = document.querySelectorAll('.questions__inner form');
  formCollection.forEach(function (it) {
    validateQuestions(it);
  });
})();

// popup
(function () {
  var showBtn = document.querySelector('.main-nav__recall a');
  var popup = document.querySelector('.questions--popup');
  var form = popup.querySelector('form');
  var closeBtn = form.querySelector('.questions__close');

  var onDocumentPopupEscKeyDown = function (evt) {
    if (evt.keyCode === KeyCode.ESC) {
      closePopup();
    }
  };
  var showPopup = function () {
    popup.style.display = 'flex';
    document.addEventListener('keydown', onDocumentPopupEscKeyDown);
  };
  var closePopup = function () {
    popup.style.display = 'none';
    document.removeEventListener('keydown', onDocumentPopupEscKeyDown);
  };
  closeBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    closePopup();
  });
  showBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    showPopup();
  });

})();

// smooth scroll
(function () {
  var anchors = document.querySelectorAll('a.scroll-to');

  anchors.forEach(function (anchor) {
    anchor.addEventListener('click', function (evt) {
      evt.preventDefault();

      var blockID = anchor.getAttribute('href');

      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
})();
