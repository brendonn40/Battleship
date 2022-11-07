export const gameboardFactory = () => {
  const board_size = 10;
  let board = [];
  let ships = [];
  for (let i = 0; i < board_size; i++) {
    let row = [];
    for (let j = 0; j < board_size; j++) {
      row.push("empty");
    }
    board.push(row);
  }
  const insert = (ship, coordinate, axis) => {
    let x = coordinate[0];
    let y = coordinate[1];
    if (shipFits(ship, coordinate, axis)) {
      if (axis === "y") {
        for (let i = 0; i < ship.size; i++) {
          board[x + i][y] = ship.name;
        }
      } else {
        for (let i = 0; i < ship.size; i++) {
          board[x][y + i] = ship.name;
        }
      }
      ships.push(ship);
      return true;
    } else {
      return false;
    }
  };
  const receive = (coordinate) => {
    // coordinate = JSON.parse(coordinate);
    let x = coordinate[0];
    let y = coordinate[1];
    switch (board[x][y]) {
      case "miss":
        return "Error. That spot has been already attacked";
        break;
      case "empty":
        board[x][y] = "miss";
        return false;
        break;
      default:
        let hit = board[x][y];
        decrease(hit);
        board[x][y] = "hit";
        return true;
        break;
    }
    //todo change status on board and return the result hit or miss
  };
  const isGameOver = () => {
    let counter = 0;
    for (const ship of ships) {
      if (ship.isSunk) {
        counter++;
      }
    }
    return counter === ships.length;
    // check if all ships inside this board is sunk, if so return true else false
  };
  const shipFits = (ship, coordinate, axis) => {
    let x = coordinate[0];
    let y = coordinate[1];
    if (board[x][y] !== "empty" || (axis !== "x" && axis !== "y")) {
      return false;
    }
    if (axis === "x") {
      for (let i = 1; i < ship.size; i++) {
        if (y + i > 9) {
          return false;
        }
        if (board[x][y + i] !== "empty") {
          return false;
        }
      }
    } else {
      for (let i = 1; i < ship.size; i++) {
        if (x + i > 9) {
          return false;
        }
        if (board[x + i][y] !== "empty") {
          return false;
        }
      }
    }
    return true;
  };
  const decrease = (shipName) => {
    for (const ship of ships) {
      if (ship.name === shipName) {
        ship.hit();
      }
    }
  };
  return { insert, receive, isGameOver, board };
};
