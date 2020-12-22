"use strict";

// ARTICLES
var blog = document.querySelector('main');
thoughts.forEach(function (thought) {
  var article = document.createElement('article');
  article.setAttribute('tabindex', '0');
  article.setAttribute('role', 'button');
  article.innerHTML = '<h3>' + thought[0].title + '</h3><h5>' + thought[0].date + '</h5><p>' + thought[0].words + '</p>';
  blog.appendChild(article);
}); // VARIABLES

var elements = {
  articles: document.querySelectorAll('article')
};
//# sourceMappingURL=articles.js.map
