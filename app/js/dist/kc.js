"use strict";

var sequence = [];
var kCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
var allEls = Array.from(document.querySelectorAll('h1, h2, h3, h4, nav, p, img, section, .itemHead, .itemBody'));
var matrix = ['@-!', 'ERROR', '$_BUMP', 'pango--', 'HELP ME', 'what did you say what did you say what', 'ring-a-ring o---! ro$es, a pocket fu1l of posies', 'a-tishoo, a-tishoo, we all f@ll d0wn', 'no no no no no no no no no no', '6 6 6', 'merry_go_round', 'cataclysm.join();', 'a', 'b', 'z', 'u', 'jk', 'fr@k', 'Q', 'ooo', '! ! ! !', 'come out and play', 'Reference Error', 'What have you DONE?!'];

var compare = function compare(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

var neo = function neo(matrix) {
  return matrix[Math.floor(Math.random() * 30)];
};

var hit = function hit(allEls) {
  var boss = document.getElementById('ccm');
  document.body.classList.add('twitch');
  boss.classList.remove('hide');
  boss.classList.add('boss');
  document.querySelectorAll('h3').forEach(function (el) {
    el.classList.add('glitch');
  });
  allEls.forEach(function (el) {
    setTimeout(function () {
      el.classList.add('fade');
      el.textContent = neo(matrix);
    }, Math.floor(Math.random() * 10000) + 1000);
    setTimeout(function () {
      el.classList.add('jump');
    }, Math.floor(Math.random() * 10000) + 500);
  });
  setTimeout(function () {
    boss.classList.remove('crouch');
  }, 8000);
  setTimeout(function () {
    document.querySelector('.boss p').innerHTML = 'G A M E &nbsp; O V E R .';
    document.querySelector('.boss p').classList.add('type');
  }, 10000);
};

document.addEventListener('keydown', function (event) {
  kCode.includes(event.code) && compare(sequence, kCode) ? sequence.push(event.code) : sequence = [event.code];
  if (sequence.length === kCode.length && compare(sequence, kCode)) hit(allEls);
});
//# sourceMappingURL=kc.js.map
