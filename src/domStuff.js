import hit from "./img/hit.svg";
import miss from "./img/miss.svg";
export function createBoardDisplay(parent) {
  const board = document.createElement("table");
  const tbody = document.createElement("tbody");
  board.classList.add("board");
  let letters = "abcdefghij";
  const letterRow = document.createElement("tr");
  letterRow.appendChild(document.createElement("th"));
  for (let i = 0; i < letters.length; i++) {
    let th = document.createElement("th");
    th.innerText = letters[i];
    letterRow.appendChild(th);
  }
  tbody.appendChild(letterRow);
  for (let i = 1; i < 11; i++) {
    if (parent.id === "computer") {
      tbody.appendChild(createRow(i, true));
    } else {
      tbody.appendChild(createRow(i));
    }
  }
  board.appendChild(tbody);
  parent.appendChild(board);
}

function createRow(number, isComputer = false) {
  let row = document.createElement("tr");
  let th = document.createElement("th");
  th.innerText = number;
  row.appendChild(th);
  for (let i = 0; i < 10; i++) {
    let td = document.createElement("td");

    td.classList.add("light");
    td.setAttribute("data-row", number - 1);
    td.setAttribute("data-column", i);
    if (isComputer) {
      td.setAttribute("data", "computer");
    } else {
      td.setAttribute("data", "player");
    }
    row.appendChild(td);
  }

  return row;
}

export function createFleet() {
  let button = document.createElement("div");
  button.innerText = "YOUR FLEET";
  button.classList.add("btn-your-fleet");
  return button;
}

export function createOpponent() {
  let button = document.createElement("div");
  button.innerText = "OPPONENT";
  button.classList.add("btn-opponent");
  return button;
}
export function resetBoard(currentPos) {
  const board = document.getElementById("chess-board");
  board.innerHTML = "";
  createBoardDisplay();
  putKnightOnCell(...currentPos);
}

export function displayShot(coordinate, hitOrMiss, name) {
  let x = coordinate[0];
  let y = coordinate[1];
  const imgHit = document.createElement("img");
  const imgMiss = document.createElement("img");
  imgHit.src = hit;
  imgMiss.src = miss;
  let cellname;
  if (name === "pc") {
    cellname = `[data-row="${x}"][data-column="${y}"][data="computer"]`;
  } else {
    cellname = `[data-row="${x}"][data-column="${y}"][data="player"]`;
  }

  const cell = document.querySelector(cellname);
  cell.appendChild(hitOrMiss ? imgHit : imgMiss);
}

export function createDisplay() {
  const player = document.getElementById("player");
  const computer = document.getElementById("computer");
  player.appendChild(createFleet());
  computer.appendChild(createOpponent());
  createBoardDisplay(player);
  createBoardDisplay(computer);
}
export function putShipOnDisplay(coordinate, ship, axis) {
  let x = coordinate[0];
  let y = coordinate[1];
  if (axis === "y") {
    for (let i = 0; i < ship.size; i++) {
      let cellname = `[data-row="${x + i}"][data-column="${y}"][data="player"]`;
      const cell = document.querySelector(cellname);
      cell.style.backgroundColor = "blue";
    }
  }
  if (axis === "x") {
    for (let i = 0; i < ship.size; i++) {
      let cellname = `[data-row="${x}"][data-column="${y + i}"][data="player"]`;
      const cell = document.querySelector(cellname);
      cell.style.backgroundColor = "blue";
    }
  }
}
export function clearDisplay() {
  clear("player");
  clear("computer");
}
function clear(elementName) {
  const content = document.getElementById(elementName);
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}
