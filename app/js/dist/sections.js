"use strict";

var items = [[{
  "title": "Item One",
  "miniDesc": "Mini description",
  "desc": "If rubbin' frozen dirt in your crotch is wrong, hey I don't wanna be right.\n" + "What are you hacking off? Is it my torso?! 'It is!' My precious torso!\n" + "Humans dating robots is sick. You people wonder why I'm still single?\n",
  "image": "https://images.unsplash.com/photo-1593604977097-8ee5f2fda183?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
  "link": "https://example.com"
}], [{
  "title": "Item Two",
  "miniDesc": "Mini description",
  "desc": "Me fail English? That's unpossible.\n" + "I'm allergic to bee stings. They cause me to, uh, die. Ahoy hoy? What good is money if it can't inspire terror in your fellow man?\n" + "Dear Mr. President, There are too many states nowadays. Please, eliminate three.\n" + "P.S. I am not a crackpot.",
  "image": "https://images.unsplash.com/photo-1501696461415-6bd6660c6742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80",
  "link": "http://www.example.com"
}], [{
  "title": "Item Three",
  "miniDesc": "Mini description",
  "desc": "Mystical elliptical, Presto Polaris, Karmic flamed future when Saturn and Aries\n" + "And now I'm a fish called \"Father\" With gills type dizzy, Blowing liquid lullabies through the spine of time, I'm\n" + "Certain of Saturn rivers, and all else is fact, So baptize me in the stars And wrap me in nighttime, moon blue\n" + "Pupil my sight with orange balls of light And echo my plight Through the corridors of metaphor\n" + "What else are we living for, if not to create Fiction and rhyme?\n" + "My purpose is to make my soul Rhyme with my mind over matter\n" + "Minds create matter minds create fiction\n" + "As a matter of fact as if, matter were fact Matter is fact\n" + "So spirit must be fiction, science fiction, art fiction, meta fiction",
  "image": "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1162&q=80",
  "link": "https://example.com"
}], [{
  "title": "Item Four",
  "miniDesc": "Mini description",
  "desc": "Wingless angels\n" + "Stroll atop shapeless cotton balls\n" + "With halos in your syringe\n" + "Celestial ground is found, broken\n" + "Exposing a bottomless depth\n" + "Where heartless spines awake to devour the small piece of your soul that's left\n" + "You're immersed in sound, floating\n" + "Aimless destination\n" + "Drop anchor to gain stability\n" + "Sterile potions restrain fertility\n" + "Pedestal talk is a token soaked in pockets where lives' topics lack conceptual ridicule\n" + "The night breathes, but light's choking\n" + "Darkness occupies the throne where poems are persecuted\n" + "The purity of time diluted\n" + "Rhymes are executed for genre, I'm told\n" + "When has-beens attempt to cause heat to rise and wonder why they're trapped in the cold\n" + "Life's an origami box and I'm hidden within the fold\n" + "So when the yarn unravels I won't be caught by surprise\n" + "And as society's fabric of orthodoxies dismantle I'll see you embracing the pentagram within this crucifix disguise",
  "image": "https://images.unsplash.com/photo-1536226957245-c83ec577a82e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "link": "https://www.example.com"
}], [{
  "title": "About me",
  "miniDesc": "Art + Code = Fun",
  "desc": "Having worn the hats of a teacher, database admin, and artist, I enjoy learning & problem solving, and art & design.\n" + "Living in Beijing for five years I learnt both Mandarin and tattooing. I speak Chinese fairly fluently.\n" + "More recently I have discovered an enjoyment of coding, with recent experience in JavaScript and PHP, among others, and studying at Mayden Academy have also greatly enjoyed working on collaborative projects in a supportive and enriching team environment.",
  "image": "https://images.unsplash.com/photo-1507963901243-ebfaecd5f2f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2758&q=80",
  "link": "https://brownspunbear.github.io"
}]];
var portfolio = document.querySelector('main');
items.forEach(function (item, i) {
  var cleanUrl = item[0].link.replace(/^https*:\/\//, '');
  var pDesc = item[0].desc.replace(/\n/g, '</p><p>');
  var tabIndex = i + 3;
  var content = '<section tabindex="' + tabIndex + '" role="button"><img alt="example" src="' + item[0].image + '" /><div class="itemHead"><h3 tabindex="' + tabIndex + '">' + item[0].title + '</h3><h4 tabindex="' + tabIndex + '">' + item[0].miniDesc + '</h4></div><div tabindex="' + tabIndex + '" class="itemBody"><a tabindex="' + tabIndex + '" href="' + item[0].link + '" target="_blank" rel="noopener noreferrer"><h5>' + cleanUrl + '</h5></a><p>' + pDesc + '</p></div></section>';
  portfolio.innerHTML += content;
});
//# sourceMappingURL=sections.js.map
