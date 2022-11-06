const player = require("./player");

let computer = player();
let enemy = player();
test("creates a human player", () => {
  const expected = { isTurn: false };
  expect(player()).toEqual(expect.objectContaining(expected));
});
test("player is able to do random  valid shot", () => {
  let possible = [];
  const board_size = 10;
  for (let i = 0; i < board_size; i++) {
    for (let j = 0; j < board_size; j++) {
      let arr = [i, j];
      possible.push(JSON.stringify(arr));
    }
  }
  let coord = computer.randomAttack(enemy);
  expect(possible.includes(coord)).toBe(true);
});
