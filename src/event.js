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
