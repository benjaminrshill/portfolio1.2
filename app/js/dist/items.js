"use strict";

var items = [[{
  "title": "Bio",
  "miniDesc": "A little about me",
  "tools": "Creative problem solver\n",
  "desc": "With a talent for creativity and enjoyment of problem solving and programming, both as part of a team and individually, I am an enthusiastic full stack junior web developer. Fluent in Chinese, I spent five years living in Beijing studying Mandarin and tattooing.\n" + "After some years following the path of an artist, while building my own gallery website (and deciding to learn some JavaScript to get it behaving the way I wanted), I discovered a real enjoyment of coding, and eventually decided to pursue a career in development instead.\n" + "In recent months, both before and since joining iO Academy as a full-stack student, I’ve greatly enjoyed learning both JavaScript and PHP and working alongside my classmates on various group projects.\n" + "In my life outside of code, I paint, and spend a lot of time attempting various physical pursuits, including juggling, strength training, running, and bouldering. And I’m an avid TV watcher.\n" + "<a href='./app/images/CSM_Certificate.pdf' target='_blank' rel='noopener noreferrer'>Scrum Master Certificate</a>\n",
  "image": "https://images.unsplash.com/photo-1507963901243-ebfaecd5f2f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2758&q=80",
  "link": ""
}], [{
  "title": "turtledot",
  "miniDesc": "Weekly itemiser",
  "tools": "React, HTML5, CSS\n",
  "desc": "Since the beginning of 2021 I've been working on a little project for my own use!\n" + "Turtledot is a weekly itemiser. Items/tasks can be created and given a weekly target and colour category; items can be added to 'this week' and 'next week' and scheduled by day; and items scheduled for this week can be checked off, with met targets given a satisfying 'blackout' to congratulate you.\n" + "The app currently uses localStorage, but is being updated regularly and a version with more robust long-term history and device syncing is in the works.\n" + "If you'd like to give it a try, it works well on mobile (hopefully!), but the desktop version allows rearrangement of items by drag and drop (using the HTML5 D&amp;D API).\n" + "<a href='https://benjaminrshill.github.io/turtledot' target='_blank' rel='noopener noreferrer'>Live version</a>\n" + "<a href='https://www.figma.com/file/wbBmJiKTJfry0WIA3kzMLG/turtledot?node-id=0%3A1' target='_blank' rel='noopener noreferrer'>Figma prototyping</a>\n",
  "image": "./app/images/items/turtledot.jpg",
  "link": "https://github.com/benjaminrshill/turtledot"
}], [{
  "title": "tilly",
  "miniDesc": "Social app",
  "tools": "React, node.js, MongoDB, GraphQL\n",
  "desc": "Over five days our four-person team created the beginnings of a social app giving users the opportunity to post something they learned that day.\n" + "The app currently enables users to sign up and log in, post lessons, view user profiles, follow and unfollow other users, and view a timeline of lessons from themselves and those they are following.\n" + "I prototyped the design in Figma, created an HTML/CSS template for the team to work from when implementing components, and then worked primarily with another team member on the front end architecture and major features: sign up and log in, post lessons, follow users, etc.\n" + "We are currently working on cleaning it up in preparation for a live version.\n" + "<a href='https://www.figma.com/file/ecPfMihe6QshyTUMZxUF83/tilly1.2' target='_blank' rel='noopener noreferrer'>Figma prototyping</a>\n",
  "image": "./app/images/items/tilly.jpg",
  "link": "https://github.com/Mayden-Academy/2020-sept-tilly-ui"
}], [{
  "title": "My Library",
  "miniDesc": "Collection app",
  "tools": "PHP, SQL, CSS, HTML\n",
  "desc": "My first project using PHP, we were given four days to create a simple collection app, required to retrieve and display a collection of items from a database and be able to add and edit items. Users can also filter and search, sort by title, year, etc, and delete items.\n" + "Though a simple project, not utilising the later object-oriented programming and relevant frameworks that we have since learned, I believe that in context it offers an honest glimpse of my ability to deliver beyond the MVP in a short time.\n" + "<a href='https://2020-benh.dev.io-academy.uk/library/' target='_blank' rel='noopener noreferrer'>Live version</a>\n",
  "image": "./app/images/items/myLibrary.jpg",
  "link": "https://github.com/benjaminrshill/myLibrary"
}], [{
  "title": "iO Portal",
  "miniDesc": "Legacy project",
  "tools": "Slim (PHP), JavaScript, Bootstrap\n",
  "desc": "Continuing a legacy project using the Slim framework, our class worked on a few stories which increased functionality on various parts of the portal and added two new sections.\n" + "My main work, alongside two classmates, was adding a ‘courses’ and ‘add courses’ section to the portal, which included creating routes, controllers, models, entities, and view helpers in Slim, and some JavaScript to intercept default PHP post behaviour and validate user input. Also unit testing.",
  "image": "https://images.unsplash.com/photo-1536226957245-c83ec577a82e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "link": "https://github.com/Mayden-Academy/AcademyPortal/"
}], [{
  "title": "bluesungfruit",
  "miniDesc": "Artist gallery",
  "tools": "HTML, CSS, JavaScript\n",
  "desc": "The first real project I worked on, it holds significance for me for various reasons.\n" + "With some prior knowledge of HTML and CSS, I built the website to showcase my artwork, and decided to try learning and implementing some JavaScript to get the gallery to behave the way I wanted, without any third-party gallery plugins.\n" + "The result was a simple but effective art gallery and the discovery that I really enjoy programming.\n" + "In desktop mode, the gallery rows change height based on their content, allowing any number of images of any height-width ratios; clicking on an image opens it in a modal, allowing the viewer to cycle through all images using buttons or arrow keys (the basic functionality of which I have also used on this website).",
  "image": "./app/images/items/bluesungfruit.jpg",
  "link": "https://bluesungfruit.com"
}], [//     {
//         "title": "IMAJE",
//         "miniDesc": "React experiment",
//         "desc":
//             "React, HTML\n" +
//             "Before attending iO Academy, I spent some time learning JavaScript at home.\n" +
//             "The decision to dive into React at this stage was fairly misguided, as I did not have the required knowledge, but I nonetheless managed to create a basic interactive gallery using React and the HTML5 drag and drop API.\n" +
//             "The app allows a user to drag pre-loaded images from a side container into the gallery (and back), rearrange gallery images, add and delete rows, move rows up and down, and change the size of the gallery and spacing between images. Gallery rows resize based on their content.\n" +
//             "The end goal is a fully customisable image gallery for artists and other creatives to upload and display their work.",
//         "image": "./app/images/items/imaje.jpg",
//         "link": "https://benjaminrshill.github.io/imaje"
//     }
// ],[
//     {
//         "title": "Thump-a-Trump",
//         "miniDesc": "JavaScript game",
//         "desc":
//             "JavaScript, HTML, CSS\n" +
//             "The first group JavaScript project at iO Academy, we were tasked with creating a whack-a-mole style game of our choice.\n" +
//             "My major point of focus was the HTML and CSS for the game screen, but I also helped with various JS functions.\n" +
//             "In my free time during the evenings that week, I also designed a little pangolin logo for our team, which can be seen on the footer of the home screen.\n" +
//             "<a href='https://dev.io-academy.uk/projects/2020-sept/2020-sept-thump-game/' target='_blank' rel='noopener noreferrer'>Live version</a>\n",
//         "image": "./app/images/items/thump.jpg",
//         "link": "https://github.com/Mayden-Academy/2020-sept-thump-game"
//     }
// ],[
{
  "title": "Games",
  "miniDesc": "JavaScript games",
  "tools": "JavaScript, HTML, CSS\n",
  "desc": "<h6>Thump-a-Trump</h6>\n" + "The first group JavaScript project at iO Academy, we were tasked with creating a whack-a-mole style game of our choice. This turned into 'Thump-a-Trump', for which I was responsible for much of the CSS and functionality. In my free time during the evenings that week, I also designed a little pangolin logo for our team, which can be seen on the footer of the home screen.\n" + "<a href='https://dev.io-academy.uk/projects/2020-sept/2020-sept-thump-game/' target='_blank' rel='noopener noreferrer'>Live version</a>\n" + "<h6>snake3d</h6>\n" + "After happening upon an online tutorial for a JavaScript Snake Xenzia-style game, I thought it would be fun to try a 3D version. It currently consists of 2 layers of cubes created with CSS transforms, through which the snake can move to seek out apples. As well as the usual up-down-left-right, the snake can move forwards and backwards using the a and z keys.\n" + "<a href='https://benjaminrshill.github.io/snake3d/' target='_blank' rel='noopener noreferrer'>Live version</a>\n",
  "image": "./app/images/items/snake3d.jpg",
  "link": "https://github.com/Mayden-Academy/2020-sept-thump-game"
}], [{
  "title": "Aptitude Test",
  "miniDesc": "Legacy project",
  "tools": "TypeScript, SCSS, HTML, SQL\n",
  "desc": "Working on a legacy project with a less-than-ideal codebase, this project was a lesson in why it's a good idea to keep our code maintainable.\n" + "The project week was hectic and full of failure, but a lot of fun and a great learning experience.",
  "image": "https://images.unsplash.com/photo-1522764725576-4cbbbf12c16d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80",
  "link": "https://github.com/Mayden-Academy/aptitude-test"
}], [{
  "title": "The Real MVP",
  "miniDesc": "Intro to OOP",
  "tools": "PHP, SQL, SCSS, HTML\n",
  "desc": "With a focus on SOLID principles, the goal was to connect to an API and instantiate classes with sports teams, displaying the data simply on the front end, with basic filters.\n" + "As usual, our team worked beautifully together and everyone was able to do a little bit of everything, setting us up nicely for the Slim project mentioned previously (iO Academy Portal).\n" + "<a href='https://dev.io-academy.uk/projects/2020-sept/2020-sept-sportsmvp/' target='_blank' rel='noopener noreferrer'>Live version</a>\n",
  "image": "./app/images/items/realmvp.jpg",
  "link": "https://github.com/Mayden-Academy/2020-sept-sportsmvp/"
}]];
//# sourceMappingURL=items.js.map
