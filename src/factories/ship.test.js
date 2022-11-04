const ship = require("./ship");

let example = ship("Destroyer");
example.hit();
example.hit();
test("returns a ship object with the right properties", () => {
  const expected = { size: 5, hits: 0, isSunk: false };
  expect(ship("Carrier")).toEqual(expect.objectContaining(expected));
});
test("hit increases 'hits' property", () => {
  expect(example.hits).toBe(2);
});

test("if hits == length changes property isSunk to true", () => {
  expect(example.isSunk).toBe(true);
});
test("if the name of the ship u used as parameter doesnt exist returns error", () => {
  expect(ship("teste")).toBe("Error. That ship doesnt exist.");
});
