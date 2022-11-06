export function createBoardDisplay() {
  const board = document.createElement("table");
  const tbody = document.createElement("tbody");
  const container = document.getElementById("container");
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
    tbody.appendChild(createRow(i));
  }
  board.appendChild(tbody);
  container.appendChild(board);
}

function createRow(number) {
  let row = document.createElement("tr");
  let th = document.createElement("th");
  th.innerText = number;
  row.appendChild(th);
  for (let i = 0; i < 10; i++) {
    let td = document.createElement("td");

    td.classList.add("light");
    td.setAttribute("data-row", i);
    td.setAttribute("data-column", number - 1);
    row.appendChild(td);
  }

  return row;
}

export function putKnightOnCell(x, y) {
  let name = `[data-row="${x}"][data-column="${y}"]`;
  const cell = document.querySelector(name);
  let img = document.createElement("img");
  img.src = "./knight.svg";
  cell.appendChild(img);
}
export function makePath(arrayOfCoords) {
  for (let i = 1; i < arrayOfCoords.length; i++) {
    let name = `[data-row="${arrayOfCoords[i][0]}"][data-column="${arrayOfCoords[i][1]}"]`;
    const cell = document.querySelector(name);
    cell.innerText = i;
  }
  let cellName = `[data-row="${arrayOfCoords[0][0]}"][data-column="${arrayOfCoords[0][1]}"]`;
  const oldPos = document.querySelector(cellName);
  oldPos.innerHTML = "";
  oldPos.style.backgroundColor = "red";
  putKnightOnCell(...arrayOfCoords.pop());
}
export function resetBoard(currentPos) {
  const board = document.getElementById("chess-board");
  board.innerHTML = "";
  createBoardDisplay();
  putKnightOnCell(...currentPos);
}
