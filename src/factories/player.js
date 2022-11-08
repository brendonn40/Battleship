import { displayShot, putShipOnDisplay } from "../domStuff.js";
import { gameboardFactory } from "./gameboard.js";
import { shipFactory } from "./ship.js";

export const playerFactory = (name) => {
  let board = gameboardFactory();
  let shotsFired = [];
  let ships = [];
  let names = ["Carrier", "Battleship", "Cruiser", "Submarine", "Destroyer"];
  let isTurn = false;
  for (const name of names) {
    ships.push(shipFactory(name));
  }
  const attack = (coordinate, enemy) => {
    if (!shotsFired.includes(JSON.stringify(coordinate))) {
      enemy.receiveAttack(coordinate);
      shotsFired.push(JSON.stringify(coordinate));
      return true;
    } else {
      return false;
    }
  };
  const receiveAttack = (coordinate) => {
    let hitOrMiss = board.receive(coordinate);
    displayShot(coordinate, hitOrMiss, name);
    return;
  };
  const randomAttack = (enemy) => {
    let coordinate = [getRndInteger(0, 10), getRndInteger(0, 10)];
    while (shotsFired.includes(JSON.stringify(coordinate))) {
      coordinate = [getRndInteger(0, 10), getRndInteger(0, 10)];
    }
    let result = enemy.receiveAttack(coordinate);
    shotsFired.push(JSON.stringify(coordinate));
    return result;
  };
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const randomizeShips = () => {
    for (const ship of ships) {
      let number = getRndInteger(1, 3);
      let axis = number === 1 ? "y" : "x";
      let add = board.insert(ship, randomCoordinate(), axis);
      while (!add) {
        add = board.insert(ship, randomCoordinate(), axis);
      }
    }
  };
  const randomCoordinate = () => {
    return [getRndInteger(0, 10), getRndInteger(0, 10)];
  };
  const show = () => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let cellname = `[data-row="${i}"][data-column="${j}"][data="player"]`;
        if (board.board[i][j] !== "empty") {
          const cell = document.querySelector(cellname);
          cell.style.background = "blue";
        }
      }
    }
  };
  const placeShip = (shipName, coordinate, axis) => {
    let selected;
    for (const ship of ships) {
      if (ship.name === shipName) {
        selected = ship;
      }
    }
    if (board.insert(selected, coordinate, axis)) {
      let index = ships.indexOf(selected);
      ships.splice(index, 1);
      return true;
    }
    return false;
  };
  return {
    isTurn,
    name,
    attack,
    board,
    receiveAttack,
    randomAttack,
    randomizeShips,
    show,
    placeShip,
  };
};
