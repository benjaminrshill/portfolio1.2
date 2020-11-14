"use strict";

var navButton = document.querySelector('nav button');
var navItems = document.querySelector('nav > div');
var sections = Array.from(document.querySelectorAll('section'));
var itemBodies = Array.from(document.querySelectorAll('.itemBody'));
var insideSection = false;

function toggleSections() {
  itemBodies.forEach(function (item) {
    item.classList.remove('showHide');
  });
}

function showSection(i) {
  itemBodies[i].classList.toggle('showHide');
}

navButton.addEventListener('click', function () {
  navItems.classList.toggle('showHide');
});
sections.forEach(function (section, i) {
  console.log(i + 3);
  section.setAttribute('tabindex', "".concat(i + 3));
  section.addEventListener('click', function () {
    toggleSections();
    showSection(i);
  });
  section.addEventListener('keyup', function (e) {
    e.key === 'Enter' || e.key === 'Escape' ? toggleSections() : null;
    e.key === 'Enter' ? showSection(i) : null;
  });
  section.addEventListener('mouseenter', function () {
    insideSection = true;
  });
  section.addEventListener('mouseleave', function () {
    insideSection = false;
  });
});
document.addEventListener('click', function (event) {
  if (!insideSection) {
    itemBodies.forEach(function (item) {
      item.classList.remove('showHide');
    });
  }
});
//# sourceMappingURL=app.js.map
