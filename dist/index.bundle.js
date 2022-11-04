/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const shipFactory = (name) => {
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

let ship = shipFactory("Destroyer");
ship.hit();
ship.hit();
console.log(ship.isSunk);
console.log(ship);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNoaXBGYWN0b3J5ID0gKG5hbWUpID0+IHtcclxuICBsZXQgaGl0cyA9IDA7XHJcbiAgbGV0IHNoaXBzID0ge1xyXG4gICAgQ2FycmllcjogNSxcclxuICAgIEJhdHRsZXNoaXA6IDQsXHJcbiAgICBDcnVpc2VyOiAzLFxyXG4gICAgU3VibWFyaW5lOiAzLFxyXG4gICAgRGVzdHJveWVyOiAyLFxyXG4gIH07XHJcbiAgaWYgKCFzaGlwcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xyXG4gICAgcmV0dXJuIFwiRXJyb3IuIFRoYXQgc2hpcCBkb2VzbnQgZXhpc3QuXCI7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBzaXplOiBzaGlwc1tuYW1lXSxcclxuICAgIGlzU3VuazogZmFsc2UsXHJcbiAgICBoaXRzLFxyXG4gICAgaGl0KCkge1xyXG4gICAgICB0aGlzLmhpdHMrKztcclxuICAgICAgaWYgKHRoaXMuaGl0cyA9PT0gdGhpcy5zaXplKSB7XHJcbiAgICAgICAgdGhpcy5pc1N1bmsgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5sZXQgc2hpcCA9IHNoaXBGYWN0b3J5KFwiRGVzdHJveWVyXCIpO1xyXG5zaGlwLmhpdCgpO1xyXG5zaGlwLmhpdCgpO1xyXG5jb25zb2xlLmxvZyhzaGlwLmlzU3Vuayk7XHJcbmNvbnNvbGUubG9nKHNoaXApO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=