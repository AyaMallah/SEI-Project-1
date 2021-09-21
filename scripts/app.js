function init() {
  const grid = document.querySelector('.grid')
  const width = 9
  const height = 9
  const cellCount = width * height
  const cells = []
  const scoreDisplay = document.querySelector('#score')
  const livesDisplay = document.querySelector('#lives')
  const gameOverDisplay = document.querySelector('#game-over')
  const gameOverContainer = document.querySelector('.game-over-container')
  const startButton = document.querySelector('#start')
  const audio = document.getElementById('audio')

  function playAudioFile(audioFile) {
    audio.src = 'sounds/' + audioFile
    audio.play()
    console.log(audio.src)
    console.log(audio)
  }


  let spaceShipPosition = 76
  const spaceShipClass = 'spaceship'

  const initialAlienArray = [
    0,
    2,
    4,
    6,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    19,
    21,
    23,
    25,
    27,
    29,
    30,
    31,
    32,
    33,
    35
  ]

  let alienArray = initialAlienArray

  let missileArray = []
  let bombArray = []


  let score = 0
  let lives = 3

  //intervals
  let dropBombInterval 
  let moveBombInterval 
  let moveMissileInterval 
  let collisionInterval
  let moveAliensInterval


  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      // cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)
    }
  }

  function startGame() {
    gameOverContainer.classList.add('show')
    // remove the old spaceship
    cells[spaceShipPosition].classList.remove(spaceShipClass)
    // remove old aliens
    alienArray.forEach(alien => cells[alien].classList.remove('alien'))
    alienArray = initialAlienArray
    //remove old missiles
    missileArray.forEach(missile => cells[missile].classList.remove('missile'))
    missileArray = []
    // remove old bombs
    bombArray.forEach(bomb => cells[bomb].classList.remove('bomb'))
    bombArray = []
    score = 0
    scoreDisplay.innerText = score
    lives = 3
    // start aliens at the start
    // put the spaceship in the middle
    spaceShipPosition = 76
    createSpaceShip()
    createAliens()

    dropBombInterval = setInterval(dropBomb, 1700)
    moveBombInterval = setInterval(moveBomb, 500)

    moveMissileInterval = setInterval(moveMissile, 500)
    collisionInterval = setInterval(collision, 500)
    moveAliensInterval = setInterval(moveAliens, 800)

  }

  function createSpaceShip() {
    cells[spaceShipPosition].classList.add(spaceShipClass)
  }

  function moveSpaceShip(event) {
    const key = event.keyCode
    cells[spaceShipPosition].classList.remove(spaceShipClass)

    if (key === 39 && spaceShipPosition % width !== width - 1) {
      spaceShipPosition++
    } else if (key === 37 && spaceShipPosition % width !== 0) {
      spaceShipPosition--
    }

    cells[spaceShipPosition].classList.add(spaceShipClass)
  }

  function createAliens() {
    initialAlienArray.forEach((alien) => {
      cells[alien].classList.add('alien')
    })
  }

  function moveAliens() {
    alienArray.forEach((alien) => {
      cells[alien].classList.remove('alien')
    })

    alienArray = alienArray.map((alien) => alien + 1)
    alienArray.forEach((alien) => {
      cells[alien].classList.add('alien')
    })

    if (alienArray[alienArray.length - 1] === 71) {
      lives = 0
      gameOver()
    }
  }


  function fireMisile(event) {
    const key = event.keyCode
    const missilePosition = spaceShipPosition - width

    if (key === 32) {
      cells[missilePosition].classList.add('missile')
      missileArray.push(missilePosition)
      playAudioFile('missile.wav')
    }
  }

  function moveMissile() {
    missileArray.forEach((missile) => {
      cells[missile].classList.remove('missile')
    })
    missileArray = missileArray.filter((missile) => missile > 8)
    missileArray = missileArray.map((missile) => missile - width)
    missileArray.forEach((missile) => {
      cells[missile].classList.add('missile')
    })
  }


  function calcScore() {
    score += 10
    scoreDisplay.innerText = score
    if (score === 250) {
      gameOver()
    }
  }

  function collision() {
    missileArray.forEach(missile => {
      const alienShot = alienArray.includes(missile)

      if (alienShot) {
        const collision = missile
        cells[collision].classList.remove('missile')
        cells[collision].classList.remove('alien')

        cells[collision].classList.add('explosion')

        setTimeout(() => {
          cells[collision].classList.remove('explosion')
        }, 500)

        alienArray = alienArray.filter(alien => alien !== collision)
        missileArray = missileArray.filter(item => item !== collision)

        calcScore()
        playAudioFile('alien-killed.wav')
      }
    })
  }


  function dropBomb() {
    const alienShooting = alienArray[Math.floor(Math.random() * (alienArray.length - 1))]
    const bombPosition = alienShooting + width

    cells[bombPosition].classList.add('bomb')

    bombArray.push(bombPosition)
  }

  function moveBomb() {
    bombArray.forEach((bomb) => {
      cells[bomb].classList.remove('bomb')
    })
    bombArray = bombArray.filter((bomb) => bomb < 72)
    bombArray = bombArray.map((bomb) => bomb + width)

    bombArray.forEach((bomb) => {
      cells[bomb].classList.add('bomb')
    })
    reduceLife()
  }

  function gameOver() {
    gameOverDisplay.innerText = `GAME OVER. You Scored ${score}!`
    gameOverContainer.classList.remove('show')
    clearInterval(dropBombInterval)
    clearInterval(moveBombInterval)
    clearInterval(moveMissileInterval)
    clearInterval(collisionInterval)
    clearInterval(moveAliensInterval)

  }


  function reduceLife() {
    if (cells[spaceShipPosition].classList.contains('bomb') && lives > 0) {
      playAudioFile('spaceship-killed.wav')
      lives--
      cells[spaceShipPosition].classList.add('bang')
      setTimeout(() => {
        cells[spaceShipPosition].classList.remove('bang')
      }, 200)
    } else if (lives === 0) {
      gameOver()
    }
    livesDisplay.innerText = lives
  }

  createGrid()


  document.addEventListener('keydown', moveSpaceShip)
  document.addEventListener('keydown', fireMisile)
  startButton.addEventListener('click', startGame)

}
window.addEventListener('DOMContentLoaded', init)

// * BUGS
// Start/Reset Button the more you press it the faster the aliens move
// when Spaceship is hit and moved at the same time it leaves BANG icon on screen
// Home page you can press space and arrows before came starts which should not happen.
