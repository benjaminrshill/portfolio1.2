const items = [
    [
        {
            "title": "turtledot",
            "miniDesc": "Weekly itemiser",
            "tools":
                ["React", "HTML5", "CSS"],
            "desc":
                "Built with React hooks, Turtledot is a weekly itemiser designed for my own use (though hopefully someone else might find it helpful one day!).\n" +
                "Essentially the obligatory todo app, but with a twist: it's actually useful. Items/tasks can be created and given a weekly target and colour category; items can be added to 'this week' and 'next week' and scheduled by day; and items scheduled for this week can be checked off, with met targets given a satisfying 'blackout' to congratulate you.\n" +
                "The app uses localStorage, and is fully functional offline - add it to your home screen!\n" +
                "If you'd like to give it a try, it is designed for mobile, though it works just as well on desktop.",
            "image": "./app/images/items/turtledot.jpg",
            "links": [
                {
                    title: "code",
                    link: "https://github.com/benjaminrshill/turtledot-x/"
                },{
                    title: "live",
                    link: "https://benjaminrshill.github.io/turtledot-x/"
                }
            ]
        }
    ],[
        {
            "title": "tilly",
            "miniDesc": "Social app",
            "tools":
                ["React", "Node", "MongoDB", "GraphQL"],
            "desc":
                "Over five days our four-person team created the beginnings of a social app giving users the opportunity to post something they learned that day.\n" +
                "I prototyped the design in Figma, created an HTML/CSS template for the team to work from when implementing components, and then worked primarily with another team member on the front end architecture and major features.\n" +
                "Another team member and I then worked further on the project after graduation to polish it a little and add a few features.\n" +
                "Users can now sign up and log in, post lessons, view user profiles, follow and unfollow other users, like and share lessons, and view a timeline of lessons from themselves and those they are following.",
            "image": "./app/images/items/tilly.jpg",
            "links": [
                {
                    title: "code",
                    link: "https://github.com/Mayden-Academy/2020-sept-tilly-ui/"
                },{
                    title: "live",
                    link: "https://2020-sept-tilly-ui.dev.io-academy.uk/"
                },{
                    title: "figma",
                    link: "https://www.figma.com/file/ecPfMihe6QshyTUMZxUF83/tilly1.2"
                }
            ]
        }
    ],[
        {
            "title": "My Library",
            "miniDesc": "Collection app",
            "tools":
                ["PHP", "HTML5", "CSS", "SQL"],
            "desc":
                "My first project using PHP, we were given four days to create a simple collection app, required to retrieve and display a collection of items from a database and be able to add and edit items. Users can also filter and search, sort by title, year, etc, and delete items.\n" +
                "Though a simple project, not utilising the later object-oriented programming and relevant frameworks that we have since learned, I believe that in context it offers an honest glimpse of my ability to deliver beyond the MVP in a short time.\n",
            "image": "./app/images/items/myLibrary.jpg",
            "links": [
                {
                    title: "code",
                    link: "https://github.com/benjaminrshill/myLibrary"
                },{
                    title: "live",
                    link: "https://2020-benh.dev.io-academy.uk/library/"
                }
            ]
        }
    ],[
        {
            "title": "Legacy",
            "miniDesc": "Legacy projects",
            "tools":
                ["PHP", "TypeScript", "SCSS", "SQL"],
            "desc":
                "<h6>iO Portal</h6>\n" +
                "Continuing a legacy project using the Slim framework, our class worked on a few stories which increased functionality on various parts of the portal and added two new sections.\n" +
                "My main work, alongside two classmates, was adding a ‘courses’ and ‘add courses’ section to the portal, which included creating routes, controllers, models, entities, and view helpers in Slim, and some JavaScript to intercept default PHP post behaviour and validate user input. Also unit testing.\n" +
                "<h6>Aptitude Test</h6>\n" +
                "Working on a legacy project with a less-than-ideal codebase written in TypeScript, this project was a lesson in why it's a good idea to keep our code maintainable.\n" +
                "The project week was hectic and full of failure, but a lot of fun and a great learning experience.\n",
            "image": "./app/images/items/aptitudeTest.jpg",
            "links": [
                {
                    title: "io portal",
                    link: "https://github.com/Mayden-Academy/AcademyPortal/"
                },{
                    title: "aptitude test",
                    link: "https://github.com/Mayden-Academy/aptitude-test/"
                }
            ]
        }
    ],[
        {
            "title": "bluesungfruit",
            "miniDesc": "Artist gallery",
            "tools":
                ["HTML5", "CSS", "JavaScript"],
            "desc":
                "The first real project I worked on, it holds significance for me for various reasons.\n" +
                "With some prior knowledge of HTML and CSS, I built the website to showcase my artwork, and decided to try learning and implementing some JavaScript to get the gallery to behave the way I wanted, without any third-party gallery plugins.\n" +
                "The result was a simple but effective art gallery and the discovery that I really enjoy programming.\n" +
                "In desktop mode, the gallery rows change height based on their content, allowing any number of images of any height-width ratios; clicking on an image opens it in a modal, allowing the viewer to cycle through all images using buttons or arrow keys (the basic functionality of which I have also used on this website).",
            "image": "./app/images/items/bluesungfruit.jpg",
            "links": [
                {
                    title: "live",
                    link: "https://bluesungfruit.com"
                }
            ]
        }
    ],[
        {
            "title": "IMAJE",
            "miniDesc": "React experiment",
            "tools":
                ["React", "HTML5", "CSS"],
            "desc":
                "Before attending iO Academy, I spent some time learning JavaScript at home.\n" +
                "The decision to dive into React at this stage was fairly misguided, as I did not have the required knowledge, but I nonetheless managed to create a basic interactive gallery using React and the HTML5 drag and drop API.\n" +
                "The app allows a user to drag pre-loaded images from a side container into the gallery (and back), rearrange gallery images, add and delete rows, move rows up and down, and change the size of the gallery and spacing between images. Gallery rows resize based on their content.\n" +
                "The end goal is a fully customisable image gallery for artists and other creatives to upload and display their work.",
            "image": "./app/images/items/imaje.jpg",
            "links": [
                {
                    title: "live",
                    link: "https://benjaminrshill.github.io/imaje/"
                }
            ]
        }

    ],[
        {
            "title": "Games",
            "miniDesc": "JavaScript games",
            "tools":
                ["JavaScript", "HTML5", "CSS"],
            "desc":
                "<h6>Thump-a-Trump</h6>\n" +
                "The first group JavaScript project at iO Academy, we were tasked with creating a whack-a-mole style game of our choice. This turned into 'Thump-a-Trump', for which I was responsible for much of the CSS and functionality. In my free time during the evenings that week, I also designed a little pangolin logo for our team, which can be seen on the footer of the home screen.\n" +
                "<h6>snake3d</h6>\n" +
                "After happening upon an online tutorial for a JavaScript Snake Xenzia-style game, I thought it would be fun to try a 3D version. It currently consists of 2 layers of cubes created with CSS transforms, through which the snake can move to seek out apples. As well as the usual up-down-left-right, the snake can move forwards and backwards using the a and z keys.\n",
            "image": "./app/images/items/snake3d.jpg",
            "links": [
                {
                    title: "Thump code",
                    link: "https://github.com/Mayden-Academy/2020-sept-thump-game/"
                },
                {
                    title: "Thump live",
                    link: "https://dev.io-academy.uk/projects/2020-sept/2020-sept-thump-game/"
                },
                {
                    title: "snake3d",
                    link: "https://benjaminrshill.github.io/snake3d/"
                }
            ]
        }
    ],[
        {
            "title": "The Real MVP",
            "miniDesc": "OOPHP",
            "tools":
                ["PHP", "SCSS", "HTML5", "SQL"],
            "desc":
                "With a focus on SOLID principles, the goal was to connect to an API and instantiate classes with sports teams, displaying the data simply on the front end, with basic filters.",
            "image": "./app/images/items/realmvp.jpg",
            "links": [
                {
                    title: "code",
                    link: "https://github.com/Mayden-Academy/2020-sept-sportsmvp/"
                },
                {
                    title: "live",
                    link: "https://dev.io-academy.uk/projects/2020-sept/2020-sept-sportsmvp/"
                }
            ]
        }
    ],[
        {
            "title": "F&amp;F",
            "miniDesc": "Pub website",
            "tools":
                ["HTML5", "CSS", "PHP", "JavaScript"],
            "desc":
                "Created some years ago, a simple website for a local business; I worked closely with the owner and a photographer to achieve a look that the owner was pleased with and that reflects the atmosphere of the establishment.\n" +
                "For the image slider I used a little PHP to find and loop through whatever images are in the relevant directory, and a small function in JavaScript for the animation.\n",
            "image": "./app/images/items/fandf.jpg",
            "links": [
                {
                    title: "live",
                    link: "https://www.foresterandflower.com/"
                }
            ]
        }
    ],[
        {
            "title": "Bio",
            "miniDesc": "A little about me",
            "tools":
                ["coffee", "laptop", "palette", "pencil", "PhotoShop", "Chinese"],
            "desc":
                "I am an enthusiastic full stack junior web developer.\n" +
                "After some years following the path of an artist, while building my own gallery website (and deciding to learn some JavaScript to get it behaving the way I wanted), I discovered a real enjoyment of coding.\n" +
                "In the past year, both before and since joining iO Academy as a full-stack student, I’ve greatly enjoyed learning both JavaScript and PHP and working alongside my teammates on various group projects.\n" +
                "In my life outside of code, I paint, and spend a lot of time attempting various physical pursuits, including juggling, strength training, running, and bouldering.  Fluent in Chinese, I spent five years living in Beijing studying Mandarin and tattooing.",
            "image": "./app/images/me.jpg",
            "links": [
                {
                    title: "GitHub",
                    link: "https://github.com/benjaminrshill/"
                },{
                    title: "Scrum cert",
                    link: "./app/images/CSM_Certificate.pdf"
                }
            ]
        }
    ]
];
