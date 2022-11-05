const ship = require("./ship");
const gameboard = require("./gameboard");
let board = gameboard();
let destroyer = ship("Destroyer");
let Carrier = ship("Carrier");
test("put a destroyer on the specific coordinate", () => {
  expect(board.insert(destroyer, [0, 0], "y")).toBe("Added");
});
test("if theres already a ship there return error", () => {
  expect(board.insert(destroyer, [0, 1], "y")).toBe("error");
});
test("adds an carrier on x axis", () => {
  expect(board.insert(Carrier, [5, 4], "x")).toBe("Added");
});
test("gives error message if theres a attempt to place a ship where it wouldnt fit", () => {
  expect(board.insert(Carrier, [5, 9], "y")).toBe("error");
});
test("return hit if it was hit by the enemy", () => {
  expect(board.receive([0, 0])).toBe("hit");
});
test("return miss if the enemy has shot and didnt hit", () => {
  expect(board.receive([0, 4])).toBe("miss");
});
test("returns true or false if the game is over aka all ships sunk", () => {
  expect(board.isGameOver()).toBe(false);
});
