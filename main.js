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
let panacekWidth = 30;
let panacekHeight = 40;

let pohybX = 30;
let pohybY= 30;

let hudba = document.getElementById('hudba');

let mince = document.getElementById('mince');
let minceX = 50;
let minceY = 50;
let minceWidth = 30;
let minceHeight = 30;

let score = 0;
let pocetBodu = document.getElementById('score');


function startGame() {
  startMusic();
  vychoziPozicePanacka();
  poziceMince();
  panacekChytilMincu();


}

function poziceMince() {
  minceX = Math.floor(Math.random() * (window.innerWidth - minceWidth));
  minceY = Math.floor(Math.random() * (window.innerHeight - minceHeight));
  mince.style.left = minceX + 'px';
  mince.style.top = minceY + 'px';
}

function vychoziPozicePanacka() {
  panacek.style.top = panacekY + 'px';
  panacek.style.left = panacekX + 'px';
}

function startMusic() {
  hudba.play();
  hudba.volume = 0.5;
}

document.body.addEventListener('keydown', keyDown);
  
function keyDown(event) {
  //dole
  if (event.keyCode === 40 && ((panacekY + pohybY) <= window.innerHeight)) {
    panacekY = panacekY + pohybY;
    panacekX = panacekX;
    panacek.style.top = panacekY + 'px';
    panacek.style.left = panacekX + 'px';
    panacek.src = 'obrazky/panacek.png';
  }

  //hore
  if (event.keyCode === 38 && ((panacekY - pohybY) <= window.innerHeight)) {
    panacekY = panacekY - pohybY;
    panacekX = panacekX;
    panacek.style.top = panacekY + 'px';
    panacek.style.left = panacekX + 'px';
    panacek.src = 'obrazky/panacek-nahoru.png'
  }

  //vpravo
  if (event.keyCode === 39 && ((panacekX + pohybX) <= window.innerWidth)) {
    panacekY = panacekY;
    panacekX = panacekX + pohybX;
    panacek.style.top = panacekY + 'px';
    panacek.style.left = panacekX + 'px';
    panacek.src = 'obrazky/panacek-vpravo.png'
  }

  //vlavo
  if (event.keyCode === 37 && ((panacekX - pohybX) <= window.innerWidth)) {
    panacekY = panacekY;
    panacekX = panacekX - pohybX;
    panacek.style.top = panacekY + 'px';
    panacek.style.left = panacekX + 'px';
    panacek.src = 'obrazky/panacek-vlevo.png'
  }
  panacekChytilMincu();
  vyhra();


}

//prekrizenie panacika a mince
function panacekChytilMincu() {
  console.log(panacekX + " " + minceX);
  console.log(panacekY + " " + minceY);

  if (!( panacekX + panacekWidth < minceX || minceX + minceWidth < panacekX || panacekY + panacekHeight < minceY || minceY + minceHeight < panacekY)) {
    document.getElementById('zvukmince').play;
    //nova pozice mince + nacitanie skore
    poziceMince();
    //score 
    score = score + 1;
    //document.getElementById('zvukfanfara').play;
    pocetBodu.textContent = score;
    
    console.log('kolize s minci');

  } 

  if (pocetBodu >= 5) {
    document.getElementById('zvukfanfara').play;
    alert('Vyhráváš! Ale jestli chceš, mužeš pokračovat ve hře.');
    console.log(pocetBodu);}
    
  console.log('krok');
}

function vyhra() {

  if (pocetBodu >= 5) {
    document.getElementById('zvukfanfara').play;
    alert('Vyhráváš! Ale jestli chceš, mužeš pokračovat ve hře.');
    console.log(pocetBodu);
  }
}

