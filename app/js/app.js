
const navButton = document.querySelector('nav button');
const navItems = document.querySelectorAll('nav > div');

navButton.addEventListener('click', function() {
    navItems.classList.toggle('showHide');
});