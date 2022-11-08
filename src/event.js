export function moveListener(player, enemy) {
  const cells = document.querySelectorAll("[data='computer']");
  let arr = Array.from(cells);
  arr.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.stopPropagation();
      let winner;
      if (player.isTurn) {
        let valid = player.attack(
          [
            parseInt(item.getAttribute("data-row")),
            parseInt(item.getAttribute("data-column")),
          ],
          enemy
        );
        if (valid) {
          player.isTurn = false;
          enemy.isTurn = true;
          winner = checkForEnd(player, enemy);
          if (winner !== null) {
            alert(`${winner.name} won!!`);
            player.isTurn = false;
            enemy.isTurn = false;
          }
        }
      }
      if (enemy.isTurn) {
        enemy.randomAttack(player);
        player.isTurn = true;
        enemy.isTurn = false;
        winner = checkForEnd(player, enemy);
        if (winner !== null) {
          alert(`${winner.name} won!!`);
          player.isTurn = false;
          enemy.isTurn = false;
        }
      }
    });
  });
}

function checkForEnd(player, computer) {
  let winner = null;
  if (player.board.isGameOver()) {
    winner = computer;
    return winner;
  }
  if (computer.board.isGameOver()) {
    winner = player;
    return winner;
  }
  return winner;
}

export function getCoordinates(player) {
  let names = ["Carrier", "Battleship", "Cruiser", "Submarine", "Destroyer"];

  for (const name of names) {
    let valid = false;
    while (!valid) {
      let letters = "abcdefghij";
      let coord = prompt(
        `Where do you want to place your ${name}? format column/row Example: b5`
      );
      let axis = prompt("Vertical or Horizontal? use v or h:");
      let letter = letters.indexOf(coord[0]);
      let number = parseInt(coord[1]) - 1;
      let coordinate = [number, letter];
      valid = player.placeShip(name, coordinate, axis === "v" ? "y" : "x");
      if (!valid) {
        alert("You cant place a ship there or you typed a wrong parameter");
      }
    }
  }
}
