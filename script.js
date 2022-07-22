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
  let treasureCount = getTreasures();

  // faire une boucle while pour décrémenter treasure count
  if (treasureCount > 0 && cellContent == LOOT) {
    loot(x, y);
    treasureCount--;
  }

  if (treasureCount == 0) {
    alert("Victoire bg");
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
  if (!wall.north) {
    y--;
    setHeroPosition(x, y);
    cellInteract(x, y);
    if (isFrozen(x, y)) {
      goUp();
    }
  }
}

function goDown() {
  let x = heroPosition.x;
  let y = heroPosition.y;
  let wall = getWalls(x, y);
  if (!wall.south) {
    y++;
  }
  setHeroPosition(x, y);
  cellInteract(x, y);
  if (isFrozen(x, y)) {
    goDown();
  }
}

function goLeft() {
  let x = heroPosition.x;
  let y = heroPosition.y;
  let wall = getWalls(x, y);
  if (!wall.west) {
    x--;
  }
  setHeroPosition(x, y);
  cellInteract(x, y);
  if (isFrozen(x, y)) {
    goLeft();
  }
}

function goRight() {
  let x = heroPosition.x;
  let y = heroPosition.y;
  let wall = getWalls(x, y);
  if (!wall.east) {
    x++;
  }
  setHeroPosition(x, y);
  cellInteract(x, y);
  if (isFrozen(x, y)) {
    goRight();
  }
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
