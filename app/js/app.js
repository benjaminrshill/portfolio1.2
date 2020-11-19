const items = [
    [
        {
            "title": "Item One",
            "miniDesc": "Mini description",
            "desc":
                "Those labours which belong to the various branches of the mathematical sciences, although on first consideration they seem to be the exclusive province of intellect, may, nevertheless, be divided into two distinct sections; one of which may be called the mechanical, because it is subjected to precise and invariable laws, that are capable of being expressed by means of the operations of matter; while the other, demanding the intervention of reasoning, belongs more specially to the domain of the understanding.\n" +
                "If rubbin' frozen dirt in your crotch is wrong, hey I don't wanna be right.\n" +
                "What are you hacking off? Is it my torso?! 'It is!' My precious torso!\n" +
                "Humans dating robots is sick. You people wonder why I'm still single?\n",
            "image": "https://images.unsplash.com/photo-1593604977097-8ee5f2fda183?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
            "link": "https://example.com"
        }
    ],[
        {
            "title": "Item Two",
            "miniDesc": "Mini description",
            "desc":
                "This admitted, we may propose to execute, by means of machinery, the mechanical branch of these labours, reserving for pure intellect that which depends on the reasoning faculties. Thus the rigid exactness of those laws which regulate numerical calculations must frequently have suggested the employment of material instruments, either for executing the whole of such calculations or for abridging them; and thence have arisen several inventions having this object in view, but which have in general but partially attained it.\n" +
                "Me fail English? That's unpossible.\n" +
                "I'm allergic to bee stings. They cause me to, uh, die. Ahoy hoy? What good is money if it can't inspire terror in your fellow man?\n" +
                "Dear Mr. President, There are too many states nowadays. Please, eliminate three.\n" +
                "P.S. I am not a crackpot.",
            "image": "https://images.unsplash.com/photo-1501696461415-6bd6660c6742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80",
            "link": "http://www.example.com"
        }
    ],[
        {
            "title": "Item Three",
            "miniDesc": "Mini description",
            "desc":
                "And now I'm a fish called \"Father\" With gills type dizzy, Blowing liquid lullabies through the spine of time, I'm\n" +
                "Certain of Saturn's rivers, and all else is fact, So baptize me in the stars And wrap me in nighttime, moon blue\n" +
                "Pupil my sight with orange balls of light And echo my plight Through the corridors of metaphor\n" +
                "What else are we living for, if not to create Fiction and rhyme?\n" +
                "My purpose is to make my soul Rhyme with my mind over matter",
            "image": "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1162&q=80",
            "link": "https://example.com"
        }
    ],[
        {
            "title": "Item Four",
            "miniDesc": "Mini description",
            "desc":
                "For instance, the much-admired machine of Pascal is now simply an object of curiosity, which, whilst it displays the powerful intellect of its inventor, is yet of little utility in itself. Its powers extended no further than the execution of the first four operations of arithmetic, and indeed were in reality confined to that of the first two, since multiplication and division were the result of a series of additions and subtractions. The chief drawback hitherto on most of such machines is, that they require the continual intervention of a human agent to regulate their movements, and thence arises a source of errors; so that, if their use has not become general for large numerical calculations, it is because they have not in fact resolved the double problem which the question presents, that of correctness in the results, united with economy of time.",
            "image": "https://images.unsplash.com/photo-1536226957245-c83ec577a82e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            "link": "https://www.example.com"
        }
    ],[
        {
            "title": "About me",
            "miniDesc": "Art + Code = Fun",
            "desc":
                "Having worn the hats of a teacher, database admin, and artist, I enjoy learning & problem solving, and art & design.\n" +
                "Living in Beijing for five years I learnt both Mandarin and tattooing. I speak Chinese fairly fluently.\n" +
                "More recently I have discovered an enjoyment of coding, with recent experience in JavaScript and PHP, among others, and studying at Mayden Academy have also greatly enjoyed working on collaborative projects in a supportive and enriching team environment.",        "image": "https://images.unsplash.com/photo-1507963901243-ebfaecd5f2f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2758&q=80",
            "link": "https://brownspunbear.github.io"
        }
    ]
];

let elements = {
    navButton: document.querySelector('nav button'),
    navItems: document.querySelector('nav > div'),
    sections: Array.from(document.querySelectorAll('section')),
    overlay: document.querySelector('#overlay'),
    exit: document.querySelector('#exit'),
    modal: document.querySelector('#modal'),
    itemBody: document.querySelector('#itemBody'),
}

let viewer = [elements.overlay, elements.modal, elements.exit];

let vars = {
    q: elements.sections.length - 1,
    p: 0,
    initialX: 0,
    moveX: 0,
    finalX: 0
}


// FUNCTIONS

function showSection(i) {
    vars.p = i;
    viewer.forEach(item => item.classList.add('showHide'));
    switchContent(i);
    focusLink();
}

function hideSection() {
    viewer.forEach(item => item.classList.remove('showHide'));
    elements.sections[vars.p].querySelector('h3').focus();
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
    let cleanUrl = items[i][0].link.replace(/^https*:\/\//, '');
    let pDesc = items[i][0].desc.replace(/\n/g, '</p><p>');
    let tabIndex = (i+3);
    elements.itemBody.innerHTML =
        '<h4>'
        + items[i][0].title
        + '</h4><a tabindex="'
        + tabIndex
        + '" href="'
        + items[i][0].link
        + '" target="_blank" rel="noopener noreferrer"><h5>'
        + cleanUrl
        + '</h5></a><p>'
        + pDesc
        + '</p>';
}

function focusLink() {
    setTimeout(() => {
        elements.itemBody.querySelector('a').focus();
    }, 100);
}

function startTouch(e) {
    vars.initialX = e.touches[0].clientX;
}
function moveTouch(e) {
    e.preventDefault();
    if (vars.initialX === 0) return;
    vars.moveX = e.touches[0].clientX;
    vars.finalX = vars.initialX - vars.moveX;
    elements.modal.style.transform = 'translate(' + (0 - vars.finalX) + 'px)';
}

function endTouch() {
    if (vars.finalX > 100) {
        elements.modal.style.transform = 'translate(-' + window.innerWidth + 'px) scale(0.5)';
        setTimeout(() => finishSwipe('left'), 300);
    } else if (vars.finalX < -100) {
        elements.modal.style.transform = 'translate(' + window.innerWidth + 'px) scale(0.5)';
        setTimeout(() => finishSwipe('right'), 300);
    } else {
        elements.modal.style.transform = 'translate(0)';
    }
    vars.initialX = 0;
    vars.moveX = 0;
    vars.finalX = 0;
}

function finishSwipe(swiped) {
    newModal();
    if (swiped === 'left') {
        elements.modal.style.transform = 'translate(' + window.innerWidth + 'px) scale(0.5)';
        next();
    } else {
        elements.modal.style.transform = 'translate(-' + window.innerWidth + 'px) scale(0.5)';
        prev();
    }
    elements.modal.classList.add('showHide');
    setTimeout(() => elements.modal.style.transform = 'translate(0) scale(1)', 100);
    elements.modal.addEventListener('touchstart', startTouch, false);
    elements.modal.addEventListener('touchmove', moveTouch, false);
    elements.modal.addEventListener('touchend', endTouch, false);
}

function newModal() {
    elements.modal.remove();
    let newModal = document.createElement('DIV');
    let newItemBody = document.createElement('DIV');
    newModal.id = 'modal';
    newItemBody.id = 'itemBody';
    document.body.appendChild(newModal);
    elements.modal = document.querySelector('#modal');
    elements.modal.appendChild(newItemBody);
    elements.itemBody = document.querySelector('#itemBody');
    viewer[1] = elements.modal;
}


// LISTENERS

elements.navButton.addEventListener('click', function() {
    elements.navItems.classList.toggle('showHide');
});

elements.sections.forEach((section, i) => {
    section.addEventListener('click', function () {
        showSection(i);
    });
    section.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') showSection(i);
    });
});

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

document.addEventListener('keyup', function(e) {
    if (e.key === 'Escape') hideSection();
});

elements.overlay.addEventListener('click', function () {
    hideSection();
});

elements.exit.addEventListener('click', function () {
    hideSection();
});

elements.modal.addEventListener('touchstart', startTouch, false);
elements.modal.addEventListener('touchmove', moveTouch, false);
elements.modal.addEventListener('touchend', endTouch, false);