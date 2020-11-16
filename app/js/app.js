const navButton = document.querySelector('nav button');
const navItems = document.querySelector('nav > div');
const sections = Array.from(document.querySelectorAll('section'));
const itemBodies = Array.from(document.querySelectorAll('.itemBody'));
const q = sections.length - 1;

let insideSection = false;
let x = 0;

navButton.addEventListener('click', function() {
    navItems.classList.toggle('showHide');
});

function hideSections() {
    itemBodies.forEach(item => {
        item.classList.remove('showHide');
    });
}

function showSection(i) {
    hideSections();
    itemBodies[i].classList.toggle('showHide');
    focusLink(i);
    x = i;
}

function prev() {
    x > 0 ? x-- : x = q;
    showSection(x);
    focusLink(x);
}

function next() {
    x < q ? x++ : x = 0;
    showSection(x);
    focusLink(x);
}

function focusLink(i, element) {
    setTimeout(() => {
        itemBodies[i].querySelector('a').focus();
    }, 100);
}

document.addEventListener('click', function(event) {
    if (!insideSection) {
        hideSections();
    }
});

document.addEventListener('keyup', function(event) {
    event.preventDefault();
    switch (event.key) {
        case 'Left': case 'ArrowLeft':
            prev(x);
            break;
        case 'Right': case 'ArrowRight':
            next(x);
            break;
        default:
            return;
    }
});

sections.forEach((section, i) => {
    section.addEventListener('click', function () {
        let viewSize = window.matchMedia("(min-width: 800px)");
        if (viewSize.matches) {
            hideSections();
            showSection(i);
        } else {
            itemBodies[i].classList.toggle('showHide');
        }
    });
    section.addEventListener('keyup', function(e) {
        switch (e.key) {
            case 'Enter':
                showSection(i);
                break;
            case 'Esc': case 'Escape':
                hideSections();
                section.focus();
                break;
            default:
                return;
        }
    });
    section.addEventListener('mouseenter', function () {
        insideSection = true;
    });
    section.addEventListener('mouseleave', function () {
        insideSection = false;
    });
});
