// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program


let panacek = document.getElementById('panacek');
let panacekX = 200;
let panacekY = 200;
let panacekWidth = 30;
let panacekHeight = 40;

let pohybX = 30;
let pohybY= 30;

let hudba = document.getElementById('hudba');
let zvukMince = document.getElementById('zvukmince');
let fanfara = document.getElementById('zvukfanfara');

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
  gameOver();
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

function startZvukMince() {
  zvukMince.play();
  hudba.volume = 0.5;
}

function startFanfara() {
  fanfara.play();
  fanfara.volume = 0.5;
}

document.body.addEventListener('keydown', keyDown);
  
function keyDown(event) {
  //dole
  if (event.keyCode === 40 && ((parseInt(panacekY) + pohybY) <= window.innerHeight)) {
    panacekY = panacekY + pohybY;
    panacekX = panacekX;
    panacek.style.top = panacekY + 'px';
    panacek.style.left = panacekX + 'px';
    panacek.src = 'obrazky/panacek.png';
  }

  //hore
  if (event.keyCode === 38 && ((parseInt(panacekY) - pohybY) >= 0)) {
    panacekY = panacekY - pohybY;
    panacekX = panacekX;
    panacek.style.top = panacekY + 'px';
    panacek.style.left = panacekX + 'px';
    panacek.src = 'obrazky/panacek-nahoru.png'
  }

  //vpravo
  if (event.keyCode === 39 && ((parseInt(panacekX) - pohybX) <= window.innerWidth)) {
    panacekY = panacekY;
    panacekX = panacekX + pohybX;
    panacek.style.top = panacekY + 'px';
    panacek.style.left = panacekX + 'px';
    panacek.src = 'obrazky/panacek-vpravo.png'
  }

  //vlavo
  if (event.keyCode === 37 && ((parseInt(panacekX) + pohybX) >= 0)) {
    panacekY = panacekY;
    panacekX = panacekX - pohybX;
    panacek.style.top = panacekY + 'px';
    panacek.style.left = panacekX + 'px';
    panacek.src = 'obrazky/panacek-vlevo.png'
  }

  panacekChytilMincu();
  gameOver();

  // if (panacekChytilMincu) {
  //   let zvukMince = document.getElementById('zvukmince');
  //   hudba.volume() = 0.1;
  //   zvukMince.play();
  //   zvukMince.volume() = 1;
  // }

  // if (gameOver) {
  //   let fanfara = document.getElementById('zvukfanfara');
  //   hudba.volume = 0.1;
  //   fanfara.play();
  //   fanfara.volume = 1;
  // }
}

//prekrizenie panacika a mince
function panacekChytilMincu() {
  console.log(panacekX + " " + minceX);
  console.log(panacekY + " " + minceY);

  if (!( panacekX + panacekWidth < minceX || minceX + minceWidth < panacekX || panacekY + panacekHeight < minceY || minceY + minceHeight < panacekY)) {
    //nova pozice mince + nacitanie skore
    poziceMince();
    //score 
    score = score + 1;
    pocetBodu.textContent = score;
    hudba.volume = 0.1;
    zvukMince.play();
    zvukMince.volume = 0.8;
    console.log('kolize s minci');
  } 
  console.log('krok');
}

//vyhra 
function vyhra() {
  console.log('Vyhravas!');
  pocetBodu.textContent = "Vyhral si!";
  hudba.volume = 0.1;
  fanfara.play();
  fanfara.volume = 0.8;
  alert('Vyhráváš! Ale jestli chceš, mužeš pokračovat ve hře.');
}

function gameOver() {
  if (pocetBodu.textContent == 5) {
    vyhra();
  }
}

