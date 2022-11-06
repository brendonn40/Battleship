import "./style.css";
import { createBoardDisplay, createFleet, createOpponent } from "./domStuff.js";
const playerFactory = require("./factories/player.js");
const player = document.getElementById("player");
const computer = document.getElementById("computer");
player.appendChild(createFleet());
computer.appendChild(createOpponent());
createBoardDisplay(player);
createBoardDisplay(computer);
