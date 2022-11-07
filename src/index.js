import "./style.css";
import { createBoardDisplay, createFleet, createOpponent } from "./domStuff.js";
import { moveListener } from "./event.js";
import { playerFactory } from "./factories/player.js";
const player = document.getElementById("player");
const computer = document.getElementById("computer");
player.appendChild(createFleet());
computer.appendChild(createOpponent());
createBoardDisplay(player);
createBoardDisplay(computer);

let computerPlayer = playerFactory("pc");
computerPlayer.randomizeShips();
let userPlayer = playerFactory("player");
userPlayer.randomizeShips();
userPlayer.isTurn = true;
moveListener(userPlayer, computerPlayer);
// while (!userPlayer.board.isGameOver() && !computerPlayer.board.isGameOver()) {
//   if (userPlayer.isTurn) {
//     moveListener(userPlayer, computerPlayer);
//   } else {
//     computerPlayer.randomAttack(userPlayer);
//   }
// }
