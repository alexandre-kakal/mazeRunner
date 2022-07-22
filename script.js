const options = {
  size: 12,
  walls: true,
  hearts: true,
  enemies: true,
  loot: true,
  ice: true,
};

createGrid(options);

// récupérer la position du héro à chaque tour joué
getHeroPosition();

function goUp() {
  let x = heroPosition.x;
  let y = heroPosition.y;
  y--;
  setHeroPosition(x, y);
}

function goDown() {
  let x = heroPosition.x;
  let y = heroPosition.y;
  y++;
  setHeroPosition(x, y);
}

function goLeft() {
  let x = heroPosition.x;
  let y = heroPosition.y;
  x--;
  setHeroPosition(x, y);
}

function goRight() {
  let x = heroPosition.x;
  let y = heroPosition.y;
  x++;
  setHeroPosition(x, y);
}

document.querySelector("#go-up").onclick = goUp;
document.querySelector("#go-down").onclick = goDown;
document.querySelector("#go-right").onclick = goRight;
document.querySelector("#go-up").onclick = goLeft;
