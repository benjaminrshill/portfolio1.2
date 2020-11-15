"use strict";

var items = [[{
  "title": "Item One",
  "miniDesc": "Mini description",
  "desc": "<p>If rubbin' frozen dirt in your crotch is wrong, hey I don't wanna be right.</p><p>What are you hacking off? Is it my torso?! 'It is!' My precious torso!</p><p>Humans dating robots is sick. You people wonder why I'm still single?</p>",
  "image": "https://images.unsplash.com/photo-1593604977097-8ee5f2fda183?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
  "link": "https://example.com"
}], [{
  "title": "Item Two",
  "miniDesc": "Mini description",
  "desc": "<p>Me fail English? That's unpossible.</p><p>I'm allergic to bee stings. They cause me to, uh, die. Ahoy hoy? What good is money if it can't inspire terror in your fellow man?</p><p>Dear Mr. President, There are too many states nowadays. Please, eliminate three.</p><p>P.S. I am not a crackpot.</p>",
  "image": "https://images.unsplash.com/photo-1501696461415-6bd6660c6742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80",
  "link": "http://example.com"
}], [{
  "title": "Item Three",
  "miniDesc": "Mini description",
  "desc": "<p>Something</p>",
  "image": "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1162&q=80",
  "link": "https://example.com"
}], [{
  "title": "Item Four",
  "miniDesc": "Mini description",
  "desc": "<p>Something else</p>",
  "image": "https://images.unsplash.com/photo-1536226957245-c83ec577a82e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "link": "http://www.example.com"
}], [{
  "title": "About me",
  "miniDesc": "Art + Code = Fun",
  "desc": "<p>Having worn the hats of a teacher, database admin, and artist, I enjoy learning & problem solving, and art & design.</p><p>Living in Beijing for five years I learnt both Mandarin and tattooing. I speak Chinese fairly fluently.</p><p>More recently I have discovered an enjoyment of coding, with recent experience in JavaScript and PHP, among others, and studying at Mayden Academy have also greatly enjoyed working on collaborative projects in a supportive and enriching team environment.</p>",
  "image": "https://images.unsplash.com/photo-1507963901243-ebfaecd5f2f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2758&q=80",
  "link": "https://brownspunbear.github.io"
}]];
var portfolio = document.querySelector('main');
items.forEach(function (item, i) {
  var cleanUrl = item[0].link.replace(/^https*:\/\//, '');
  var tabIndex = i + 3;
  var content = '<section tabindex="' + tabIndex + '" role="button"><img alt="example" src="' + item[0].image + '" /><div class="itemHead"><h3 tabindex="' + tabIndex + '">' + item[0].title + '</h3><h4 tabindex="' + tabIndex + '">' + item[0].miniDesc + '</h4></div><div tabindex="' + tabIndex + '" class="itemBody"><a tabindex="' + tabIndex + '" href="' + item[0].link + '" target="_blank" rel="noopener noreferrer"><h5>' + cleanUrl + '</h5></a>' + item[0].desc + '</div></section>';
  portfolio.innerHTML += content;
});
//# sourceMappingURL=sections.js.map
