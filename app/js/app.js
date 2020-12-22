const navButton = document.querySelector('nav button');
const navItems = document.querySelector('nav > div');

navButton.addEventListener('click', function() {
    navItems.classList.toggle('showHide');
});