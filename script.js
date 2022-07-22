const options = {
  size: 12,
  walls: true,
  hearts: true,
  enemies: true,
  loot: true,
  ice: true,
};

setHearts(3);

function cellInteract(x, y) {
  let currentHealth = getHearts();
  let cellContent = getCellContent(x, y);
  let monsterPower = getMonsterPower(x, y);
  if (cellContent == LOOT) {
    loot(x, y);
  }
  if (cellContent == HEART && currentHealth < 5) {
    currentHealth++;
    setHearts(currentHealth);
  }
  if (cellContent == MONSTER && monsterPower <= currentHealth) {
    killMonster(x, y);
    setHearts(currentHealth - monsterPower);
  } else if (cellContent == MONSTER && monsterPower > currentHealth) {
    alert("Looser");
  }
}

createGrid(options);

function goUp() {
  let x = heroPosition.x;
  let y = heroPosition.y;
  let wall = getWalls(x, y);
  if (wall.north) {
    y++;
  }
  y--;
  cellInteract(x, y);
  setHeroPosition(x, y);
}

function goDown() {
  let x = heroPosition.x;
  let y = heroPosition.y;
  let wall = getWalls(x, y);
  if (wall.south) {
    y--;
  }
  y++;
  cellInteract(x, y);
  setHeroPosition(x, y);
}

function goLeft() {
  let x = heroPosition.x;
  let y = heroPosition.y;
  let wall = getWalls(x, y);
  if (wall.west) {
    x++;
  }
  x--;
  cellInteract(x, y);
  setHeroPosition(x, y);
}

function goRight() {
  let x = heroPosition.x;
  let y = heroPosition.y;
  let wall = getWalls(x, y);
  if (wall.east) {
    x--;
  }
  x++;
  cellInteract(x, y);
  setHeroPosition(x, y);
}

document.querySelector("#go-up").onclick = goUp;
document.querySelector("#go-down").onclick = goDown;
document.querySelector("#go-right").onclick = goRight;
document.querySelector("#go-left").onclick = goLeft;

document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == "38") {
    goUp();
  } else if (e.keyCode == "40") {
    goDown();
  } else if (e.keyCode == "37") {
    goLeft();
  } else if (e.keyCode == "39") {
    goRight();
  }
}
