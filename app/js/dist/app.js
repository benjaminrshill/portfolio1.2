"use strict";

var navButton = document.querySelector('nav button');
var navItems = document.querySelector('nav > div');

function openMenu() {
  navItems.classList.add('showHide');
  setTimeout(function () {
    navItems.classList.add('rollOut');
  }, 200);
}

function closeMenu() {
  navItems.classList.remove('rollOut');
  setTimeout(function () {
    navItems.classList.remove('showHide');
  }, 500);
}

navButton.addEventListener('click', function () {
  navItems.classList.contains('showHide') ? closeMenu() : openMenu();
});
//# sourceMappingURL=app.js.map
