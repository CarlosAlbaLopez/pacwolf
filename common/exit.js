const { puzzle } = require("./jsonData");

let exit;
for (let i = 0; i < puzzle.length; i++) {
  if (
    (puzzle[i].row === 1 && puzzle[i].borders.search("T") < 0) ||
    (puzzle[i].column === 1 && puzzle[i].borders.search("L") < 0) ||
    (puzzle[i].row === 7 && puzzle[i].borders.search("B") < 0) ||
    (puzzle[i].column === 7 && puzzle[i].borders.search("R") < 0)
  )
    exit = {
      position: {
        row: puzzle[i].row,
        column: puzzle[i].column,
      },
    };
}

module.exports = { exit };
