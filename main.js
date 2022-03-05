// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program
/*


// const canvas = document.getElementById('game');
// const ctx = canvas.getContext('2d');

// let speed = 2;

// let tileCount = 20;
// let tileSize = canvas.width/tileCount - 2;
// let headX = 10;
// let headY = 10;

// let xVelocity = 0;
// let yVelocity = 0;

// let appleX = 5;
// let appleY = 5;

// //game loop
// function drawGame() {
//   clearScreen();
//   changeSnakePosition();
//   checkAppleColision();
//   drawApple();
//   drawSnake();
//   setTimeout(drawGame, 1000/speed);

// }


// function clearScreen() {
//   ctx.fillStyle = 'black';
//   ctx.fillRect(0,0, canvas.width, canvas.height);
// }


// function drawApple () {
//   ctx.fillStyle = 'red';
//   ctx.fillRect(appleX, appleY, tileSize, tileSize);
// }

// function checkAppleColision() {
//   if (appleX === headX && appleY == headY) {
//     appleX = Math.floor(Math.random() * tileCount);
//     appleY = Math.floor(Math.random() * tileCount);
//   }
// }*/




let panacek = document.getElementById('panacek');
let panacekX = 200;
let panacekY = 200;

let pohybX = 30;
let pohybY= 30;

let hudba = document.getElementById('hudba');

let mince = document.getElementById('mince');

function startGame(){
  startMusic();
  vychoziPozicePanacka();
}

function vychoziPozicePanacka() {
  panacek.style.top = panacekY + 'px';
  panacek.style.left = panacekX + 'px';
}

function startMusic() {
  hudba.play();
}

document.body.addEventListener('keydown', keyDown);
  
function keyDown(event) {
  //dole
  if (event.keyCode === 40) {
    panacekY = panacekY + pohybY;
    panacekX = panacekX;
    panacek.style.top = panacekY + 'px';
    panacek.style.left = panacekX + 'px';
    panacek.src = 'obrazky/panacek.png';
  }

  //hore
  if (event.keyCode === 38) {
    panacekY = panacekY - pohybY;
    panacekX = panacekX;
    panacek.style.top = panacekY + 'px';
    panacek.style.left = panacekX + 'px';
    panacek.src = 'obrazky/panacek-nahoru.png'
  }

  //vpravo
  if (event.keyCode === 39) {
    panacekY = panacekY;
    panacekX = panacekX + pohybX;
    panacek.style.top = panacekY + 'px';
    panacek.style.left = panacekX + 'px';
    panacek.src = 'obrazky/panacek-vpravo.png'
  }

  //vlavo
  if (event.keyCode === 37) {
    panacekY = panacekY;
    panacekX = panacekX - pohybX;
    panacek.style.top = panacekY + 'px';
    panacek.style.left = panacekX + 'px';
    panacek.src = 'obrazky/panacek-vlevo.png'
  }
  
}

