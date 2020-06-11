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

## 2.7 Other Features

- While LEFT and RIGHT are advertised as control keys, a and d also work in case of playing with a keyboard with no arrows.

## 2.8 Footer

## 2.9 Potential Future Features

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

### [HTML5 validator](https://validator.w3.org/)

Validates the code aheres to HTML standards

The HTML validator throws up a warning about a double hyphen in a comment, however as this is part of URL to copied code, I have left it in place.

//Screenshot of HTML warning

### [Image validation](https://validator.w3.org/)

Additional validation from confirms all images have "alt" caption.

### CSS validator

Validates the code aheres to CSS standards.

The code has been run through the W3 CSS validator.

It has thrown up some issues with the use of variables, however further research implies this is a feature not supported by the validator: https://github.com/w3c/css-validator/issues/111

Manual testing shows the code responding on the webpage as anticipated:

### [Contrast validator](https://color.a11y.com/Contrast/)

The contrast validator checks contrast between text and background to ensure it's visible to people with vision impairments.

One issue was found on the site, but on further eximanation, it references a hidden form, and as such is not visible to any user.

## 4.2 UX Stories
Wants to play a game
Wants to pause game
Wants to mute/unmute sound in game
Wants to play again/better score

### A Parent wants to homeschool and is looking for an educational project

## 4.3 Manual Testing

### Links - External

### Testing Responsive Features: Mobile version (iphone 8)

## 4.5 Bugs

### Active Bugs

- [x] Ball bounce under paddle
- [ ] Ball bounces through paddle
- [ ] Gameover sound loops
- [x] Gameover black circle
- [x] you restart levels with space bar on level 2+
- [ ] On resize of screen mid play, ball becomes oval, unless refreshed

### Squashed Bugs

- ~~[ ] Ball return to screen after leaving~~ No longer relevent as this a new game screen starts
- [x] Mute toggle not working

# 5. Deployment

Repo URL: https://github.com/c-marsh/Pong-Breaker.

1. Using Gitpod's Chrome extension, the project was launched from within the repository, based on [CodeInstitutes template](https://github.com/Code-Institute-Org/gitpod-full-template).
1. Code was developed through Gitpod’s IDE, and develpoments regularly commited and pushed to the Github repository.

The project be viewed by following this URL: https://c-marsh.github.io/Pong-Breaker/, or run locally by following [these instructions](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).

# 6. Credits

## 6.1 Code snippets




Code for retina/HiDef canvas display: https://www.html5rocks.com/en/tutorials/canvas/hidpi/

## 6.2 Content

## 6.3 Media

Fonts from Google Fonts

Sounds from https://freesound.org/

## 6.4 Acknowledgements

I would also like to thank Akshat Garg for his support as a mentor and Cormac Lawlor for his support as Code Institute Tutor.
