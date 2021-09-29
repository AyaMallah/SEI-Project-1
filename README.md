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

<div align="center">
<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1632921812/Screenshot_2021-09-19_at_16.25.38_vyonjz.png" width="750px" height="650px"/>

<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1632921911/Screenshot_2021-09-19_at_16.26.26_xzxctr.png" width="750px" height="650px"/>

<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1632921437/Screenshot_2021-09-19_at_16.26.51_zhoba5.png" width="750px" height="650px"/>
</div>

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
  
<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1632920123/W71dJQD29RgtKYLFteC6RQ5WxILvZUHo4h6rRJCTLhK1nGWOD5C7v7xkQOkDKevMtnMX3e73FktQvHnc1IlMjnZxcASkAVy7ldbNhyRb_ro6oMIvTYsh5ltpYk8Fsg_9-fqnmJZp_s0_evlaoz.png" width="700px"/>

<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1632920126/lo_yI21fAnGCqBhsd6UJ6zGY0nOHkvpHc3-Em31PO6pFU49FWT4MVZ94NTrc9ESg0MiTgo46RfIBV5rY9QHWEqBCXQvDuahhacKFWbp5TmRUwwDC_rKakPWr7dmVs0W02pUjDBKs_s0_frnuvj.png" width="700px" height="650px"/>


## Approach
The approach I took to developing the game was by writing out a plan of all the functionalities a classic space invaders game should have. I then prioritised them by importance, those that would be my MVP and the Nice-To-Haves. I began pseudo coding my MVP into smaller bits as breaking it down made it easier to complete within the timeframe. I made sure to give myself a day or two of polishing and styling.

The skeleton of the project is a grid that I created and it must include the spaceship and the aliens both of which can shoot.

<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1632920818/pkAuC_JaITjbedGSx1pQVtHJBCWEKHM79DBvygRYCf-sE7YZRQAQycBbfRqi-nxfbkac2xqX5SpsYiS5JVwkBSNCe72CMF9lcXEDnN-2oD2RXmaZN17BjZHIYOa05sbe104hldcr_s0_ibtujd.png" width="500px" height="200px"/>

Next I created 2 main functions of the game ‘start game’ and ‘game over’ all of which had many components within them. The ‘start game’ functionality was also able to restart the game.

<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1632920827/CVw6pyH_WTNq60Ugbxb_8WZUrh1QUI22683VY1T7J2jWAGOxbieogxjlMq1_vA1CYjKP1Dkj4pGqKflAMbf3cBq3g2rqAfm1E04eHbnaC846kE78vpl5avyVIEOyT9vOr7fnoBra_s0_lxdv9r.png" width="500px" height="400px"/>

<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1632920829/RHj6uHT-GiEiI6_3i4p1VPVlY03ohu-fKJRR9mQSMjMmn5YeB6BLepnd2xaUXV5MW4Oqt21zkB4NxuuxyWuSqhxPa_1WdLHzgris2YmXHI3z_GrjGPFm5-vZHRDeJ_Jgcu-kYkNN_s0_rqm06g.png" width="500px" height="250px"/>

After successful testing of the grid and keyboard movement controls, I then went ahead to write some functions that handled the centered position of the spaceship as well as the left and right movement of the spaceship without disappearing off the grid. 

<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1632920966/7zujy7kfiWV1UnKL5NUsypyx36CKUST2HrzYHrJYbz7q2mih3AB9GTpldBrW1xOVKASHejGNLc0jCB7_uC55X8Owz6OYioLHg5KlPYVM58gzQ7aQ92HnQ1PrHv1H2KaHZUvoLfp9_s0_jina8b.png" width="500px" height="250px"/>

Then I had to ensure that the array of aliens stayed on the grid and kept moving right, left and downwards closer to the spaceship. 

<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1632920970/lENfdCVZoJQrV01MFh50vUHqTDxY0WsQjqj8y15k7Xja76DE_E-VNDB3MjRZqAXXBCrYPYjfidoq6DnHqnjAw5OJI8BlWXLeUHG4DvlarQ-DfT_k89XcvUVk7Wb8vVeTqZGgzDvd_s0_urnpgb.png" width="500px" height="250px"/>

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
