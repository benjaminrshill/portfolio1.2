
const navButton = document.querySelector('nav button');
const navItems = document.querySelector('nav > div');

function openMenu() {
    navItems.classList.add('showHide');
    setTimeout(() => {
        navItems.classList.add('rollOut');
    }, 200);
}
function closeMenu() {
    navItems.classList.remove('rollOut');
    setTimeout(() => {
        navItems.classList.remove('showHide');
    }, 500);
}

navButton.addEventListener('click', function() {
    navItems.classList.contains('showHide') ? closeMenu() : openMenu();
});