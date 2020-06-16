# Manual testing list 
## Main page
- [x] Website loads as expected

![Imgur](https://i.imgur.com/0Rpd9qS.gif)

- [x] If screen is less than 600 px tall an error message is displayed
- [x] If screen is less than 680 px tall the footer is hidden

![Imgur](https://i.imgur.com/5YrJ0KD.png)

- [x] If screen is less than 420 px wide an error message is displayed

![Imgur](https://i.imgur.com/4mRjBqC.png?1)

- [x] Extarnal links open in new tabs

## Screens
- [x] Large Menu screen

![Imgur](https://i.imgur.com/EH2LI4k.png?1)

- [x] Small Menu screen

![Imgur](https://i.imgur.com/5YrJ0KD.png)

- [x] Large Cheat screen
- [x] Small Cheat screen

![Imgur](https://i.imgur.com/lmYqhmY.png)

- [x] Large Pause screen

![Imgur](https://i.imgur.com/y0Zsvjv.png)

- [x] Small Pause screen

![Imgur](https://i.imgur.com/ImwNIFq.png)

- [x] Large Game Over screen

![Imgur](https://i.imgur.com/q17RLTd.png)

- [x] Small Game Over screen

![Imgur](https://i.imgur.com/eNawu8U.png)

## Gameplay

![Imgur](https://i.imgur.com/LcOCXlt.gif)

### Ball
- [X] bounces off sides
- [X] bounces off paddles
- [X] bounces off bricks
- [X] vanishes past paddles into top/bottom screen
- [X] decreases life on hitting top/bottom screen
- [X] restarts on hitting top/bottom screen
- [X] triggers game over on hitting top/bottom screen if no lives left
- [X] doesn't generate in contact with another object

### Bricks
- [x] Appear where expected
- [x] Delete on contact
- [X] trigger sound on contact with ball

### paddles
- [x] Appear where expected
- [x] move left with left
- [x] move left with A
- [x] move right with right
- [x] move right with D
- [x] trigger sound on contact with ball

### keybindings
- [x] M mutes and unmutes sound while running
- [x] M mutes and unmutes sound while in Menu
- [x] M mutes and unmutes sound while paused
- [x] M mutes and unmutes sound while Gameover
- [x] M mutes and unmutes sound while in cheat screen
- [x] ESC pauses/unpauses
- [x] ESC disabled on Menu screen
- [x] Space triggers game from menu screen
- [x] Space reloads game on Gameover screen
- [x] Space reloads game on Cheat screen
- [x] Space does not restart level in running screen

## Levels

![Imgur](https://i.imgur.com/27b0IxP.gif)

- [x] Generate as expected
- [x] Generates a new level when all bricks cleared
- [x] Correct level no. is displayed on game screen

## Lives

![Imgur](https://i.imgur.com/tSJ8rZ2.png)

- [x] Start with expected number
- [x] Display correct number on pause screen
- [x] Display correct number on play screen
- [x] Decrease by 1 for balls lost off Table
- [x] Increase by 1 on level completion

## Score
- [x] is correctly counted
- [x] is correctly displayed on play screen
- [x] is correctly displayed on pause screen
- [x] is correctly displayed on gmae over screen
- [x] is saved to memory
- [x] highscore is recalled from memory
- [x] deals with null/NaN highscore value

## Responsive
- [x] If screen is resized cheat screen is displayed
- [x] Cheat screen sound can be muted
- [x] Cheat screen sound can be unmuted
- [] Favicon display on various devices - Works correctly on Apple devices. I don't have acces to Android/MS devices to test.

