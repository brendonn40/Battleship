import "./style.css";
import { createDisplay, clearDisplay } from "./domStuff.js";
import { getCoordinates, moveListener } from "./event.js";
import { playerFactory } from "./factories/player.js";
import { shipFactory } from "./factories/ship.js";
createDisplay();
function game() {
  let computerPlayer = playerFactory("pc");
  let userPlayer = playerFactory("player");
  const random = document.getElementById("random");
  const start = document.getElementById("start");
  const place = document.getElementById("place");
  computerPlayer.randomizeShips();
  random.addEventListener(
    "click",
    function (e) {
      e.stopPropagation();
      userPlayer.randomizeShips();
      userPlayer.isTurn = true;
      userPlayer.show();
    },
    { once: true }
  );
  start.addEventListener("click", function (e) {
    e.stopPropagation();
    if (userPlayer.isTurn) {
      moveListener(userPlayer, computerPlayer);
    }
  });
  // place.addEventListener(
  //   "click",
  //   function (e) {
  //     e.stopPropagation();
  //     getCoordinates(userPlayer);
  //     userPlayer.isTurn = true;
  //     userPlayer.show();
  //   },
  //   { once: true }
  // );
}
game();
