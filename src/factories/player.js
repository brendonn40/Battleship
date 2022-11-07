import { displayShot } from "../domStuff.js";
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
      let add = board.insert(ship, randomCoordinate(), "y");
      while (!add) {
        add = board.insert(ship, randomCoordinate(), "y");
      }
    }
  };
  const randomCoordinate = () => {
    return [getRndInteger(0, 10), getRndInteger(0, 10)];
  };
  return {
    isTurn,
    name,
    attack,
    board,
    receiveAttack,
    randomAttack,
    randomizeShips,
  };
};
