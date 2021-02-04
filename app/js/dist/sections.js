"use strict";

// SECTIONS
var portfolio = document.querySelector('main');

function makeSection(item) {
  var section = document.createElement('section');
  section.setAttribute('tabindex', '0');
  section.setAttribute('role', 'button');
  section.innerHTML = '<img alt="example" src="' + item[0].image + '" />' + '<div class="triangle"></div>' + '<div class="itemHead">' + '<h3>' + item[0].title + '</h3>' + '<h4>' + item[0].miniDesc + '</h4>' + '<h6>' + item[0].tools + '</h6>' + '</div>';
  section.classList.add('sueStorm');
  return section;
}

items.forEach(function (item, i) {
  var section = portfolio.appendChild(makeSection(item));
  setTimeout(function () {
    return section.classList.remove('sueStorm');
  }, i * 200);
  section.addEventListener('click', function () {
    showSection(i);
  });
  section.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') showSection(i);
  });
}); // VARIABLES

var elements = {
  sections: document.querySelectorAll('section'),
  overlay: document.querySelector('#overlay'),
  modal: document.querySelector('#modal'),
  exit: document.querySelector('#exit'),
  itemBody: document.querySelector('#itemBody')
};
var viewer = [elements.overlay, elements.modal, elements.exit];
var vars = {
  q: items.length - 1,
  p: 0,
  initialX: 0,
  moveX: 0,
  finalX: 0
}; // FUNCTIONS

function showSection(i) {
  vars.p = i;
  viewer.forEach(function (item) {
    return item.classList.add('showHide');
  });
  switchContent(i);
  focusLink();
  document.body.style.overflowY = 'hidden';
}

function hideSection(i) {
  viewer.forEach(function (item) {
    return item.classList.remove('showHide');
  });
  elements.sections[i].focus();
  document.body.style.overflowY = 'auto';
}

function prev() {
  vars.p > 0 ? vars.p-- : vars.p = vars.q;
  switchContent(vars.p);
  focusLink();
}

function next() {
  vars.p < vars.q ? vars.p++ : vars.p = 0;
  switchContent(vars.p);
  focusLink();
}

function switchContent(i) {
  var linkBar = '';
  items[i][0].links.forEach(function (link) {
    linkBar += link.link.length > 0 ? '<a tabindex="0" href="' + link.link + '" target="_blank" rel="noopener noreferrer"><h4>' + link.title + '</h4></a>' : '<h4>' + items[i][0].miniDesc + '</h4>';
  });
  var pDesc = items[i][0].desc.replace(/\n/g, '</p><p>');
  var letters = items[i][0].title.length;
  elements.modal.innerHTML = '<div>' + '<div id="itemTitles">' + '<h3 style="padding-left: ' + 10 / letters + 'vw; font-size: ' + 80 / letters + 'vw; letter-spacing: ' + 10 / letters + 'vw; line-height: ' + (10 + (letters > 10 ? letters - 4 : letters)) + 'vh">' + items[i][0].title + '</h3>' + '</div>' + '<div id="itemBody"><div class="linkBar">' + linkBar + '</div><h5>' + items[i][0].tools + '</h5>' + '<p>' + pDesc + '</p>' + '</div>' + '</div>';
}

function focusLink() {
  setTimeout(function () {
    elements.itemBody.querySelector('a').focus();
  }, 100);
}

function startTouch(e) {
  vars.initialX = e.touches[0].clientX;
}

function moveTouch(e) {
  if (vars.initialX === 0) return;
  vars.moveX = e.touches[0].clientX;
  vars.finalX = vars.initialX - vars.moveX;
  elements.modal.style.transform = 'translate(' + (0 - vars.finalX) + 'px)';
}

function endTouch() {
  if (vars.finalX > 100) {
    elements.modal.style.transform = 'translate(-' + window.innerWidth + 'px) scale(0.5)';
    finishSwipe('left');
  } else if (vars.finalX < -100) {
    elements.modal.style.transform = 'translate(' + window.innerWidth + 'px) scale(0.5)';
    finishSwipe('right');
  } else {
    elements.modal.style.transform = 'translate(0)';
  }

  vars.initialX = 0;
  vars.moveX = 0;
  vars.finalX = 0;
}

function finishSwipe(swiped) {
  elements.modal.classList.remove('showHide');
  setTimeout(function () {
    if (swiped === 'left') {
      elements.modal.style.transform = 'translate(' + window.innerWidth + 'px) scale(0.5)';
      next();
    } else {
      elements.modal.style.transform = 'translate(-' + window.innerWidth + 'px) scale(0.5)';
      prev();
    }

    setTimeout(function () {
      elements.modal.classList.add('showHide');
      elements.modal.style.transform = 'translate(0) scale(1)';
    }, 200);
  }, 300);
} // LISTENERS


document.addEventListener('keyup', function (event) {
  event.preventDefault();

  if (elements.modal.classList.contains('showHide')) {
    switch (event.key) {
      case 'Left':
      case 'ArrowLeft':
        prev();
        break;

      case 'Right':
      case 'ArrowRight':
        next();
        break;

      default:
        return;
    }
  }
});
document.addEventListener('keyup', function (e) {
  if (e.key === 'Escape') hideSection(vars.p);
});
elements.overlay.addEventListener('click', function () {
  hideSection(vars.p);
});
elements.exit.addEventListener('click', function () {
  hideSection(vars.p);
});
elements.modal.addEventListener('touchstart', startTouch, false);
elements.modal.addEventListener('touchmove', moveTouch, false);
elements.modal.addEventListener('touchend', endTouch, false);
//# sourceMappingURL=sections.js.map
