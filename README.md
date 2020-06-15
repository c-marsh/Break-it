![Imgur](https://i.imgur.com/7hAi8zD.png?1)

# Break-it! (https://c-marsh.github.io/Break-it/)
***
## Table of Contents
### [1. UX](https://github.com/c-marsh/Break-it#1-ux-1)

[1.1 Who is this website for?](https://github.com/c-marsh/Break-it#11-who-is-this-website-for)

[1.2 What is it that they want to achieve?](https://github.com/c-marsh/Break-it#13-how-my-project-is-the-best-way-to-help-them-achieve-those-things)

[1.3 Website Planning and Wireframes](https://github.com/c-marsh/Break-it#13-website-planning-and-wireframes)

### [2. Features](https://github.com/c-marsh/Break-it#2-features-1)

[2.1 Screens](https://github.com/c-marsh/Break-it#21-screens)

[2.2 Play Screen](https://github.com/c-marsh/Break-it#22-play-screen)

[2.3 Lives](https://github.com/c-marsh/Break-it#23-lives)

[2.4 Score](https://github.com/c-marsh/Break-it#24-score)

[2.5 Sounds](https://github.com/c-marsh/Break-it#25-sounds)

[2.6 Responsiveness](https://github.com/c-marsh/Break-it#26-responsiveness)

[2.7 Other Features](https://github.com/c-marsh/Break-it#27-other-features)

[2.8 Levels](https://github.com/c-marsh/Break-it#28-levels)

[2.9 Footer](https://github.com/c-marsh/Break-it#29-footer)

[2.11 Future improvements](https://github.com/c-marsh/Break-it#210-potential-future-features)

### [3. Technologies Used](https://github.com/c-marsh/Break-it#3-technologies-used-1)

[3.1 Languages](https://github.com/c-marsh/Break-it#31-languages)

[3.2 Frameworks](https://github.com/c-marsh/Break-it#32-frameworks)

[3.3 Integrated Development Environment](https://github.com/c-marsh/Break-it#33-integrated-development-environment)

[3.4 External Hostings](https://github.com/c-marsh/Break-it#34-external-hostings)


### [4. Testing](https://github.com/c-marsh/Break-it#4-testing-1)

[4.1 Validation](https://github.com/c-marsh/Break-it#41-validation)

[4.2 UX Stories](https://github.com/c-marsh/Break-it#42-ux-stories)

[4.3 Manual Testing](https://github.com/c-marsh/Break-it#43-manual-testing)

[4.4 Bugs](https://github.com/c-marsh/Break-it#45-bugs)

### [5. Deployment](https://github.com/c-marsh/Break-it#5-deployment-1)

### [6. Credits](https://github.com/c-marsh/Break-it#6-credits-1)

[6.1 Code-snippets](https://github.com/c-marsh/Break-it#61-code-snippets)

[6.2 Content](https://github.com/c-marsh/Break-it#62-content)

[6.3 Media](https://github.com/c-marsh/Break-it#63-media)

[6.4 Acknowledgements](https://github.com/c-marsh/Break-it#64-acknowledgements)

## 1. UX

## 1.1 Who is this website for?

This website is for people who want to play a game, and myself to practice JavaScript.

## 1.2 What is it that they want to achieve?

A functioning game that can be played, and hopefully be enjoyable to play.

## 1.3 Website Planning and Wireframes
### User Stories
Wants to play a game
Wants to pause game
Wants to mute/unmute sound in game
Wants to play again/better score

### Data Architecture
Here is an visual depiction the process of the application.
![Imgur](https://i.imgur.com/hiZ4b4z.png)

### Design elements
![Imgur](https://i.imgur.com/saBz7cX.png)
Font: Major Mono Display

# 2. Features

This Website features:

## 2.1 Screens

- welcome screen with instructions to start the game, and details on how to pause or mute the game.
- Pause screen when game is paused shows the details on how to pause or mute the game, along with current score and balls remaining
- Gameover screen features final score and previous highscore. If this game provided the highscore the text is changed to reflect that you've beaten your previous best. Instructions provided to restart game.

## 2.2 Play Screen
This features a ball, 2 paddles and bricks. The corners contain information about the level, score, and how many lives left.

## 2.3 Lives

The game starts with 3 lives. This could be easily modified to adjust difficulty.
Remaining lives can be checked from the pause screen or in the corner of the screen.

A new life is added for each completed level.

## 2.4 Score
The score is calculated as each brick demolished. It is reported on game over and saved to the browser memory as a highscore to beat for future play.
It can be viewed during play from the pause screen, or in the corner of the screen.

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
- Ball, paddles, and bricks are calculated proportionally to the screen width, resulting in a different play experience on different sized screens.
- The canvas is designed to render both on HiDef and non hiDef screens
- Custom Favicons have been created to be compatible with different browsers/Operating systems

## 2.7 Other Features
- On page load the game screen bounces into place
- While LEFT and RIGHT are advertised as control keys, A and D also work in case of playing with a keyboard with no arrows.
- cheating feature: if the viewport is resized, the game is topped, a warning screen is shown and 1 point is deducted from the saved highscore as a penalty for cheating.

## 2.8 Levels
Levels are comprised of a grid of up to 11 bricks wide and 5 rows high.

15 unique levels are currently implemented in the game, however a feature is that as a result of their construction as an array, it is simple and quick to add more.

The current level is displayed on the screen in play.

## 2.9 Footer
- a Footer is included with a link to the developers github. The icon throbs on hover.

## 2.10 Potential Future Features
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

### Jquery

Jquery is included as part of Bootstrap, but not used outside of possible BootStrap functionality.

## 3.3 Integrated Development Environment

### Gitpod

Gitpod was used as the IDE for this project.

## 3.4 External Hostings

#### GitHub

The project used the GitHub hosting service to save the project in a repository.

### Imgur

Imgur service to hosts images and screen shots for the ReadME.


# 4. Testing

## 4.1 Validation
### JavaScript Validation
![JSValidation](https://i.imgur.com/m2AwAzG.png)
The code has passed ES6 Syntax Check using https://www.piliapp.com/syntax-check/es6/. Comprehensive results from JSHint validation can be found [here](docs/jshint-results.md)

### [HTML5 validator](https://validator.w3.org/)

Validates the code aheres to HTML standards

The HTML validator throws up a warning not having section headings, however this is an active choice to try and keep the game as contained as possible.

![Imgur](https://i.imgur.com/BvDXt6I.png)


### CSS validator

Validates the code aheres to CSS standards.

The code has been run through the W3 CSS validator, results can be viewed [here](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fc-marsh.github.io%2FBreak-it%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

It has thrown up some issues with the use of variables and vendor extension, however further research implies this is a feature not supported by the validator: https://github.com/w3c/css-validator/issues/111

Manual testing shows the code responding on the webpage as anticipated on chrome, Firefox and Safari:

![Chrome test](https://i.imgur.com/k0EbJ8t.gif)
![Firefox test](https://i.imgur.com/WPkLgZA.gif)
![Safari test](https://i.imgur.com/h4w8fP0.gif)

### [Contrast validator](https://color.a11y.com/Contrast/)

The contrast validator checks contrast between text and background to ensure it's visible to people with vision impairments.

I suspect a limitation may be that it cannot check contrast in the html canvas.

## 4.2 UX Stories
### Wants to play a game
 - Head to page 
 - Read instructions 
 - press Spacebar, and play

 ![Imgur](https://i.imgur.com/0Rpd9qS.gif)

### Wants to pause game
- As above, press ESC while playing

![Imgur](https://i.imgur.com/4mqKwGb.gif)

### Wants to mute/unmute sound in game
- As above, press M while playing

### Wants to play again/better score
- As above, when game is complete, follow instructions to press space bar to reload page.

![Imgur](https://i.imgur.com/T0w5kqK.gif)

## 4.3 Manual Testing
See [Here](docs/manualtest.md) manual testing regime.

## 4.4 Bugs

### Active Bugs
- [x] Nothing happens when last level completed
- [x] Ball bounce under paddle
- [x] When pausing from start screen, and then unpausing, the game starts. 
    -   fixed by disabling pause from strat screen
- [ ] Ball bounces through paddle if hit on the corner of the paddle in a certain angle.
    - This seems to be a result of the simple collision code I've implemented which just reverses y axis direction. Re-engineering the impact code improved, but hasn't eliminated this bug. 
- [ ] Gameover sound loops
    -   Likely a result of the game loop still running. It's annoying but, not essential for gameplay.
- [ ] Sound doesn't trigger if brick strike happen in too quick succession. 
    - This is likely a result of the sound clip already playing from a previous strike.
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

ReadME Header image created on http://ami.responsivedesign.is/

## 6.3 Media
Favicon generated with https://realfavicongenerator.net/

Fonts from https://fonts.google.com/

Icons from https://fontawesome.com/

Sounds from https://freesound.org/

## 6.4 Acknowledgements

I would also like to thank Akshat Garg for his support as a mentor and Cormac Lawlor for his support as Code Institute Tutor.
