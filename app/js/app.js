const navButton = document.querySelector('nav button');
const navItems = document.querySelector('nav > div');
const sections = Array.from(document.querySelectorAll('section'));
const itemBodies = Array.from(document.querySelectorAll('.itemBody'));

let insideSection = false;

function toggleSections() {
    itemBodies.forEach(item => {
        item.classList.remove('showHide');
    });
}

function showSection(i) {
    itemBodies[i].classList.toggle('showHide');
}

navButton.addEventListener('click', function() {
    navItems.classList.toggle('showHide');
});

sections.forEach((section, i) => {
    console.log(i+3);
    section.setAttribute('tabindex', `${i+3}`);
    section.addEventListener('click', function() {
        toggleSections();
        showSection(i);
    });
    section.addEventListener('keyup', function(e) {
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

document.addEventListener('click', function(event) {
    if (!insideSection) {
        itemBodies.forEach(item => {
            item.classList.remove('showHide');
        });
    }
});