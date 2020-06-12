# Table of Contents

## [1. UX](#1.-UX)

[1.1 Who is this website for?](##1.1-Who-is-this-website-for?)

[1.2 What is it that they want to achieve?](##1.2-What-is-it-that-they-want-to-achieve?)

[1.3 How my project is the best way to help them achieve those things?](##-1.3-How-my-project-is-the-best-way-to-help-them-achieve-those-things?)

[1.4 Website Planning and Wireframes](##-1.4-Website-Planning-and-Wireframes)

## [2. Features](#2.-Features)

[2.1 Top Section](##-2.1-Top-Section)

[2.2 Nav Bar](##-2.2-Nav-Bar)

[2.3 Donate Alert](##-2.3-Donate-Alert)

[2.4 Welcome section](##-2.4-Welcome-section)

[2.5 Shows section](##-2.5-Shows-section)

[2.6 Stories section](##-2.6-Stories-section)

[2.7 Projects section](##-2.7-Projects-section)

[2.8 Makes section](##-2.8-Makes-section)

[2.10 General features](##-2.10-General-features)

[2.11 Future improvements](###-2.11-Future-improvements)

## [3. Technologies Used](#-3.-Technologies-Used)

[3.1 Languages](##-3.1-Languages)

[3.2 Frameworks](##-3.2-Frameworks)

[3.3 Integrated Development Environment](##-3.3-Integrated-Development-Environment)

[3.4 External Hostings](##-3.4-Externa-Hostings)

[3.5 Other Tools](##-3.5-Other-Tools)

## [4. Testing](#-4.-Testing)

[4.1 Validation](##-4.1-Validation)

[4.2 UX Stories](##-4.2-UX-Stories)

[4.3 Manual Testing](##-4.3-Manual-Testing)

[4.4 Responsive Features](##-4.4-Responsive-Features)

[4.5 Bugs](##-4.5-Bugs)

## [5. Deployment](#-5.-Deployment)

## [6. Credits](#-6.-Credits)

[6.1 Code-snippets](##-6.1-Code-snippets)

[6.2 Content](##-6.2-Content)

[6.3 Media](##-6.3-Media)

[6.4 Acknowledgements](##-6.4-Acknowledgements)

# 1. UX

## 1.1 Who is this website for?

This website is for people who want to play a game, and myself to practice JavaScript.

## 1.2 What is it that they want to achieve?

A functioning game that can be played, and hopefully be enjoyable to play.

## 1.3 How my project is the best way to help them achieve those things?

## 1.4 Website Planning and Wireframes

//user stories
Wants to play a game
Wants to pause game
Wants to mute/unmute sound in game
Wants to play again/better score

//Data Architecture

//Wireframe

//Design elements
![docs/colourscheme.png](docs/colourscheme.png)

# 2. Features

This Website features:

## 2.1 Screens

- welcome screen with instructions to start the game, and details on how to pause or mute the game.
- Pause screen when game is paused shows the details on how to pause or mute the game, along with current score and balls remaining
- Gameover screen features final score and previous highscore. If this game provided the highscore the text is changed to reflect that you've beaten your previous best. Instructions provided to restart game.

## 2.2 Levels

Levels are comprised of a grid of up to 11 bricks wide and 5 rows high.

6 unique levels are currently implemented in the game, however a feature is that as a result of their construction as an array, it is simple and quick to add more.

## 2.3 Lives

The game starts with 3 lives. This could be easily modified to adjust difficulty.
Remaining lives can be checked from the pause screen.

## 2.4 Score

The score is calculated as each brick demolished. It is reported on game over and saved to the browser memory as a highscore to beat for future play.
It can be viewed during play from the pause screen.

## 2.5 Sounds
The game features the following SFX:
- A sound for impact between paddle and ball
- A sound for impact between brick and ball
- A sound for starting a new level
- A sound for Game Over
- A sound for cheating

All sounds can be muted and unmuted. By dafault they are on, but don't play until gameplay is initiated.

## 2.6 Responsiveness

- The page is responsive and displays as such, however a keyboard is required to innitiate the game, and play it.
- The canvas has a fixed 600px height. If the view window doesn't currently support this a pop up asks the user to rotate the device to vertical orientation or that the game is not compatible with the screen size.
- if the screen is less than 685px tall, the footer is hidden.

## 2.7 Other Features

- While LEFT and RIGHT are advertised as control keys, a and d also work in case of playing with a keyboard with no arrows.

## 2.8 Footer
- a Footer is included with a link to the developers github. The icon throbs on hover.

## 2.9 Potential Future Features
In no praticular order, here are some additional features that could be implemented:

- Difficulty modes could be easily introduced by changing start the ball speed and/or paddle move speed
- Dark/light mode
- The scoring is quite vanilla at the moment just counting bricks demolished. It would be more interesting to have this developed (eg bricks demolished on first ball have a greater value than bricks demolished by last ball).
- 2 Player mode - The paddles could be split out into individual control
- touchscreen control
- Perhaps a rotation of canvas play by 90 degrees would be a good idea, as the game would benefit from the extra space between the paddles and the bricks.

# 3. Technologies Used

## 3.1 Languages

### 3.1.1 HTML/HTML5

Semantic HTML 5 has been used for the web markup.

### 3.1.2 CSS/CSS3

CSS/CSS3 to has been used to provide styling.

### 3.1.3 JavaScript

JavaScript has been used to code the game.

## 3.2 Frameworks

### BootStrap 4

Bootstrap 4 components were used to save time on devolping the website.

## 3.3 Integrated Development Environment

### Gitpod

Gitpod was used as the IDE for this project.

## 3.4 External Hostings

#### GitHub

The project used the GitHub hosting service to save the project in a repository.

### Imgur

Imgur service to hosts images and screen shots for the ReadME.

### giphy

Giphy makes and hosts giphs for the ReadME.

## 3.5 Other Tools

# 4. Testing

## 4.1 Validation
### JavaScript Validation
![JSValidation](https://i.imgur.com/m2AwAzG.png)
The code has passed ES6 Syntax Check using https://www.piliapp.com/syntax-check/es6/, however while JSLint doesn't list any errors, it provides an extensive warning list. This is primarily due to import/export files resulting in undeclared values due to checking one page at a time. A comprehensive list of all errors can be found [here](docs/jslint-errors.md)

### [HTML5 validator](https://validator.w3.org/)

Validates the code aheres to HTML standards

The HTML validator throws up a warning not having section headings, however this is an active choice to try and keep the game as contained as possible.

![Imgur](https://i.imgur.com/BvDXt6I.png)


### CSS validator

Validates the code aheres to CSS standards.

The code has been run through the W3 CSS validator, results can be viewed [here](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fc-marsh.github.io%2FBreak-it%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

It has thrown up some issues with the use of variables and vendor extension, however further research implies this is a feature not supported by the validator: https://github.com/w3c/css-validator/issues/111

Manual testing shows the code responding on the webpage as anticipated:

![Chrome test](https://i.imgur.com/k0EbJ8t.gifv)
![Firefox test](https://i.imgur.com/WPkLgZA.gifv)
![Safari test](https://i.imgur.com/h4w8fP0.gifv)

### [Contrast validator](https://color.a11y.com/Contrast/)

The contrast validator checks contrast between text and background to ensure it's visible to people with vision impairments.

I suspect a limitation may be that is cannot check contrast in the html canvas.

## 4.2 UX Stories
Wants to play a game
Wants to pause game
Wants to mute/unmute sound in game
Wants to play again/better score


## 4.3 Manual Testing
- [] Website loads as expected
- [] If screen is less than 600 px tall an error message is displayed
- [] If screen is less than 680 px tall the footer is hidden
- [] If screen is resized cheat screen is displayed
- [] Cheat screen sound can be muted
- [] Cheat screen sound can be unmuted


### Testing Responsive Features: Mobile version (iphone 8)

## 4.5 Bugs

### Active Bugs

- [x] Ball bounce under paddle
- [x] When pausing from start screen, and then unpausing, the game starts. 
    -   fixed by disabling pause from strat screen
- [ ] Ball bounces through paddle
- [ ] Gameover sound loops
- [x] Gameover black circle
- [x] you restart levels with space bar on level 2+
- [x] On resize of screen mid play, ball becomes oval, unless refreshed
    -   prevented by implementing cheat screen
- [x] ~~Ball return to screen after leaving~~ No longer relevent as this a new game screen starts
- [x] Mute toggle not working
- [ ] When resizing before playing the game, an error is logged through Chrome as a result of audio being played before input on the page - https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Best_practices#Autoplay_policy

# 5. Deployment

Repo URL: https://github.com/c-marsh/Break-it.

1. Using Gitpod's Chrome extension, the project was launched from within the repository, based on [CodeInstitutes template](https://github.com/Code-Institute-Org/gitpod-full-template).
1. Code was developed through Gitpod’s IDE, and develpoments regularly commited and pushed to the Github repository.

The project be viewed by following this URL: https://c-marsh.github.io/Break-it/, or run locally by following [these instructions](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).

# 6. Credits

## 6.1 Code snippets
The game was developed based on youtbue tutorials from Chris Perko https://www.youtube.com/channel/UCraxnACLukXNgBnCq1zQnNg and MDN Web Docs https://developer.mozilla.org/en-US/docs/Games/Tutorials

Hover effect from https://animista.net/

https://stackoverflow.com/ and https://www.w3schools.com/ have been used to reference code.

Code for retina/HiDef canvas display: https://www.html5rocks.com/en/tutorials/canvas/hidpi/

## 6.2 Content
All textual content is orginal.

## 6.3 Media
Favicon generated with https://realfavicongenerator.net/

Fonts from https://fonts.google.com/

Icons from https://fontawesome.com/

Sounds from https://freesound.org/

## 6.4 Acknowledgements

I would also like to thank Akshat Garg for his support as a mentor and Cormac Lawlor for his support as Code Institute Tutor.
