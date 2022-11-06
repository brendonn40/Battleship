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
    tbody.appendChild(createRow(i));
  }
  board.appendChild(tbody);
  parent.appendChild(board);
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
