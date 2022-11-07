export const shipFactory = (name) => {
  let hits = 0;
  let ships = {
    Carrier: 5,
    Battleship: 4,
    Cruiser: 3,
    Submarine: 3,
    Destroyer: 2,
  };
  if (!ships.hasOwnProperty(name)) {
    return "Error. That ship doesnt exist.";
  }
  return {
    size: ships[name],
    name: name,
    isSunk: false,
    hits,
    hit() {
      this.hits++;
      if (this.hits === this.size) {
        this.isSunk = true;
      }
    },
  };
};
