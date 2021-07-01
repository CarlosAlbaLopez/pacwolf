const { puzzle } = require("./jsonData");

let distanceBetweenCharacters = (referenceCharacter, targetCharacter) => {
  let rowsDistance =
    referenceCharacter.position.row - targetCharacter.position.row;
  let colsDistance =
    referenceCharacter.position.column - targetCharacter.position.column;

  let borders = square.borders.split("");
  let check = borders.find((element) => element === movementDirection);
  if (check) return true;
};

module.exports = {
  distanceBetweenCharacters,
};
