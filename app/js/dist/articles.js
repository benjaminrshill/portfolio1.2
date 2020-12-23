"use strict";

var blog = document.querySelector('main');
var offset = 5;
var currentThoughts = thoughts.slice(0, offset);

function displayThoughts() {
  currentThoughts.forEach(function (thought) {
    var article = document.createElement('article');
    article.setAttribute('tabindex', '0');
    article.setAttribute('role', 'button');
    article.innerHTML = '<h3>' + thought[0].title + '</h3><h5>' + thought[0].date + '</h5><p>' + thought[0].words + '</p><hr>';
    blog.appendChild(article);
  });
}

function handleScroll() {
  if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.scrollHeight) {
    offset += 5;
    currentThoughts = thoughts.slice(0, offset);
    displayThoughts();
  }
}

window.addEventListener('scroll', handleScroll);
displayThoughts();
//# sourceMappingURL=articles.js.map
