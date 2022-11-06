const gameboardFactory = () => {
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
      if (axis === "x") {
        for (let i = 0; i < ship.size; i++) {
          board[x + i][y] = ship.name;
        }
      } else {
        for (let i = 0; i < ship.size; i++) {
          board[x][y + i] = ship.name;
        }
      }
      ships.push(ship);
      return "Added";
    } else {
      return "error";
    }
  };
  const receive = (coordinate) => {
    let x = coordinate[0];
    let y = coordinate[1];
    switch (board[x][y]) {
      case "miss":
        return "Error. That spot has been already attacked";
        break;
      case "empty":
        board[x][y] = "miss";
        return board[x][y];
        break;
      default:
        let hit = board[x][y];
        decrease(hit);
        board[x][y] = "hit";
        return board[x][y];
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
    if (axis === "y") {
      for (let i = 1; i < ship.size; i++) {
        if (board[x][y + i] !== "empty") {
          return false;
        }
      }
    } else {
      for (let i = 1; i < ship.size; i++) {
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
  return { insert, receive, isGameOver };
};

module.exports = gameboardFactory;
