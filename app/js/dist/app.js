"use strict";

var items = [[{
  "title": "Item One",
  "miniDesc": "Mini description",
  "desc": "Those labours which belong to the various branches of the mathematical sciences, although on first consideration they seem to be the exclusive province of intellect, may, nevertheless, be divided into two distinct sections; one of which may be called the mechanical, because it is subjected to precise and invariable laws, that are capable of being expressed by means of the operations of matter; while the other, demanding the intervention of reasoning, belongs more specially to the domain of the understanding.\n" + "If rubbin' frozen dirt in your crotch is wrong, hey I don't wanna be right.\n" + "What are you hacking off? Is it my torso?! 'It is!' My precious torso!\n" + "Humans dating robots is sick. You people wonder why I'm still single?\n",
  "image": "https://images.unsplash.com/photo-1593604977097-8ee5f2fda183?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
  "link": "https://example.com"
}], [{
  "title": "Item Two",
  "miniDesc": "Mini description",
  "desc": "This admitted, we may propose to execute, by means of machinery, the mechanical branch of these labours, reserving for pure intellect that which depends on the reasoning faculties. Thus the rigid exactness of those laws which regulate numerical calculations must frequently have suggested the employment of material instruments, either for executing the whole of such calculations or for abridging them; and thence have arisen several inventions having this object in view, but which have in general but partially attained it.\n" + "Me fail English? That's unpossible.\n" + "I'm allergic to bee stings. They cause me to, uh, die. Ahoy hoy? What good is money if it can't inspire terror in your fellow man?\n" + "Dear Mr. President, There are too many states nowadays. Please, eliminate three.\n" + "P.S. I am not a crackpot.",
  "image": "https://images.unsplash.com/photo-1501696461415-6bd6660c6742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80",
  "link": "http://www.example.com"
}], [{
  "title": "Item Three",
  "miniDesc": "Mini description",
  "desc": "And now I'm a fish called \"Father\" With gills type dizzy, Blowing liquid lullabies through the spine of time, I'm\n" + "Certain of Saturn's rivers, and all else is fact, So baptize me in the stars And wrap me in nighttime, moon blue\n" + "Pupil my sight with orange balls of light And echo my plight Through the corridors of metaphor\n" + "What else are we living for, if not to create Fiction and rhyme?\n" + "My purpose is to make my soul Rhyme with my mind over matter",
  "image": "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1162&q=80",
  "link": "https://example.com"
}], [{
  "title": "Item Four",
  "miniDesc": "Mini description",
  "desc": "For instance, the much-admired machine of Pascal is now simply an object of curiosity, which, whilst it displays the powerful intellect of its inventor, is yet of little utility in itself. Its powers extended no further than the execution of the first four operations of arithmetic, and indeed were in reality confined to that of the first two, since multiplication and division were the result of a series of additions and subtractions. The chief drawback hitherto on most of such machines is, that they require the continual intervention of a human agent to regulate their movements, and thence arises a source of errors; so that, if their use has not become general for large numerical calculations, it is because they have not in fact resolved the double problem which the question presents, that of correctness in the results, united with economy of time.",
  "image": "https://images.unsplash.com/photo-1536226957245-c83ec577a82e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "link": "https://www.example.com"
}], [{
  "title": "About me",
  "miniDesc": "Art + Code = Fun",
  "desc": "Having worn the hats of a teacher, database admin, and artist, I enjoy learning & problem solving, and art & design.\n" + "Living in Beijing for five years I learnt both Mandarin and tattooing. I speak Chinese fairly fluently.\n" + "More recently I have discovered an enjoyment of coding, with recent experience in JavaScript and PHP, among others, and studying at Mayden Academy have also greatly enjoyed working on collaborative projects in a supportive and enriching team environment.",
  "image": "https://images.unsplash.com/photo-1507963901243-ebfaecd5f2f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2758&q=80",
  "link": "https://brownspunbear.github.io"
}]];
var navButton = document.querySelector('nav button');
var navItems = document.querySelector('nav > div');
var sections = Array.from(document.querySelectorAll('section'));
var overlay = document.querySelector('#overlay');
var modal = document.querySelector('#modal');
var itemBody = document.querySelector('#itemBody');
var q = sections.length - 1;
var x = 0;
navButton.addEventListener('click', function () {
  navItems.classList.toggle('showHide');
});

function showSection(i) {
  x = i;
  overlay.classList.add('showHide');
  modal.classList.add('showHide');
  switchContent(i);
  focusLink();
}

function hideSection() {
  overlay.classList.remove('showHide');
  modal.classList.remove('showHide');
  sections[x].querySelector('h3').focus();
}

function prev() {
  x > 0 ? x-- : x = q;
  switchContent(x);
  focusLink();
}

function next() {
  x < q ? x++ : x = 0;
  switchContent(x);
  focusLink();
}

function switchContent(i) {
  var cleanUrl = items[i][0].link.replace(/^https*:\/\//, '');
  var pDesc = items[i][0].desc.replace(/\n/g, '</p><p>');
  var tabIndex = i + 3;
  itemBody.innerHTML = '<h4>' + items[i][0].title + '</h4><a tabindex="' + tabIndex + '" href="' + items[i][0].link + '" target="_blank" rel="noopener noreferrer"><h5>' + cleanUrl + '</h5></a><p>' + pDesc + '</p>';
}

function focusLink() {
  setTimeout(function () {
    itemBody.querySelector('a').focus();
  }, 100);
}

document.addEventListener('keyup', function (event) {
  event.preventDefault();

  if (modal.classList.contains('showHide')) {
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
sections.forEach(function (section, i) {
  section.addEventListener('click', function () {
    showSection(i);
  });
  section.addEventListener('keyup', function (e) {
    switch (e.key) {
      case 'Enter':
        showSection(i);
        break;

      default:
        return;
    }
  });
});
document.addEventListener('keyup', function (e) {
  switch (e.key) {
    case 'Esc':
    case 'Escape':
      hideSection();
      break;

    default:
      return;
  }
});
overlay.addEventListener('click', function () {
  hideSection();
});
//# sourceMappingURL=app.js.map
