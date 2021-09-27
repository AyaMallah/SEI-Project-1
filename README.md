# SEI Project 1: Space Invaders

## Overview
My first project as a General Assembly Software Engineering Immersive student was to create one of the following classic arcade games using HTML, CSS and JavaScript:
* Battleships
* Connect 4
* Minesweeper
* Pacman
* Snake
* Tetris
* Tic-Tac-Toe
* Frogger
* Space Invaders

I chose Space Invader, purely for nostalgia reasons and with my own purple colour theme.

## Brief
The brief given was as follows: 
* Render a game in the browser.
* Be built on a grid: do not use HTML Canvas for this.
* Design logic for winning & visually display which player won.
* Include separate HTML / CSS / JavaScript files.
* Stick with KISS (Keep It Simple Stupid) and DRY (Don’t Repeat Yourself) principles.
* Use JavaScript for DOM manipulation.
* Deploy your game online, where the rest of the world can access it.
* Use semantic markup for HTML and CSS (adhere to best practices).

## Deployment
https://ayamallahx.github.io/SEI-Project-1/

## Timeframe
7 days

## Technologies:
* JavaScript (ES6)
* HTML5 & HTML5 Audio
* CSS3
* Git / GitHub
* Flexbox
* Google Fonts

## About Game
Space Invaders is a classic arcade game from the 80s. The player aims to shoot an invading alien army, before it reaches the planet’s surface whilst aiming to achieve the highest score possible before either being destroyed by the aliens or allowing them to reach the planet’s surface.

Controls:
* Player movements: ← → keys
* Fire control: ↑ key & space bar

## Plan
I used a Trello board with individual tickets, bugs and columns for To Do, Doing and Done. This was a great way to emulate a Jira board.




## Approach
The approach I took to developing the game was by writing out a plan of all the functionalities a classic space invaders game should have. I then prioritised them by importance, those that would be my MVP and the Nice-To-Haves. I began pseudo coding my MVP into smaller bits as breaking it down made it easier to complete within the timeframe. I made sure to give myself a day or two of polishing and styling.

The skeleton of the project is a grid that I created and it must include the spaceship and the aliens both of which can shoot.


Next I created 2 main functions of the game ‘start game’ and ‘game over’ all of which had many components within them. The ‘start game’ functionality was also able to restart the game.



After successful testing of the grid and keyboard movement controls, I then went ahead to write some functions that handled the centered position of the spaceship as well as the left and right movement of the spaceship without disappearing off the grid. 


Then I had to ensure that the array of aliens stayed on the grid and kept moving right, left and downwards closer to the spaceship. 

After this I moved onto the bomb that the aliens would drop randomly and the missile that the spaceship would shoot up to kill aliens and increase the players score. Following this would be creating a function for the collision of either the bomb attacking the spaceship or missile attacking the alien.

## Wins
I learnt an incredible amount during this project and I’m ecstatic with what I have managed to achieve. My learning of new concepts such as class constructors, functions, scopes and timers over a few weeks were tested thoroughly during this project. 

I was also pleased with being able to add my own creative spin on the game with a girly purple theme. Also, it was amazing to be able to actually play a game I made myself. 

## Challenges
Using timeouts and intervals was very challenging - connecting these together so the game runs in the correct order was the hardest part but also the most rewarding.

## Bugs
One bug I was unable to finish was when a player wants to move and shoot at the same time it wont work simultaneously. As this was my first project, I definitely learnt that planning and focusing on time management was very important. So I missed out on correcting this bug but still very happy with my final result.

## Future features
* In the future, I would like to create a scoreboard. I would also like to add in harder levels and more randomly generating alien invaders.
