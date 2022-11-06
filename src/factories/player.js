const gameboard = require("./gameboard");
const ship = require("./ship");

const playerFactory = () => {
  let board = gameboard();
  let shotsFired = [];
  let ships = [];
  let names = ["Carrier", "Battleship", "Cruiser", "Submarine", "Destroyer"];
  for (const name of names) {
    ships.push(ship(name));
  }
  const attack = (coordinate, enemy) => {
    enemy.receiveAttack(coordinate);
    shotsFired.push(coordinate);
    isTurn = false;
  };
  const receiveAttack = (coordinate) => {
    isTurn = true;
    return board.receive(coordinate);
  };
  const randomAttack = (enemy) => {
    let coordinate = [getRndInteger(0, 10), getRndInteger(0, 10)];
    while (shotsFired.includes(coordinate)) {
      coordinate = [getRndInteger(0, 10), getRndInteger(0, 10)];
    }
    enemy.receiveAttack(coordinate);
    shotsFired.push(coordinate);
    isTurn = false;
    return JSON.stringify(coordinate);
  };
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return {
    isTurn: false,
    attack,
    board,
    receiveAttack,
    randomAttack,
  };
};

module.exports = playerFactory;
