export function moveListener(player, enemy) {
  const cells = document.querySelectorAll("[data='computer']");
  let arr = Array.from(cells);
  arr.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.stopPropagation();
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
        }
      }
      if (enemy.isTurn) {
        enemy.randomAttack(player);
        player.isTurn = true;
        enemy.isTurn = false;
      }
    });
  });
}
