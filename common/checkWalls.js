const { puzzle } = require("./jsonData");

let checkWalls = (character, movementDirection) => {
  let row = puzzle.filter((element) => element.row === character.position.row);
  let square = row.find(
    (element) => element.column === character.position.column
  );
  let borders = square.borders.split("");
  let check = borders.find((element) => element === movementDirection);
  if (check) return true;
};

module.exports = {
  checkWalls,
};

// let board = [];
// let printBoardState = () => {
//   for (let i = 1; i <= 7; i++) {
//     for (let j = 1; j <= 7; j++) {
//       if (i === thomas.position.row && j === thomas.position.column) {
//         board.push(i.toString() + j.toString() + "T");
//       } else if (i === wolf.position.row && j === wolf.position.column) {
//         board.push(i.toString() + j.toString() + "W");
//       } else if (exit.row === i && exit.column === j) {
//         board.push(i.toString() + j.toString() + "E");
//       } else {
//         board.push(i.toString() + j.toString());
//       }
//     }
//   }
// };

// console.log(board);
