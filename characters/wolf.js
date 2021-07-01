const { data } = require("../common/jsonData");
const { checkWalls } = require("../common/checkWalls");
const {
  distanceBetweenCharacters,
} = require("../common/distanceBetweenCharacters");
const { thomas } = require("./thomas");

distanceBetweenCharacters;

let wolf = {
  state: 0,
  position: {
    row: data.puzzles[0].wolf.row,
    column: data.puzzles[0].wolf.column,
  },
};

let wolfAction = () => {
  //mirar en qué dirección está Thomas
  //puede moverse en esa dirección
  //moverse (cambiar su posición)

  //mueva horiz hacia thomas
  if (wolf.position.row === thomas.position.row) {
    if (wolf.position.column > thomas.position.column) {
      if (checkWalls(wolf, "L")) {
        console.log("paso");
        //pasar turno
      } else {
        console.log("muevo hacia " + "L");
        //cambiar posicion
        wolf.position.column -= 1;
        console.log(wolf.position);
      }
    } else {
      if (checkWalls(wolf, "R")) {
        console.log("paso");

        //pasar turno
      } else {
        console.log("muevo hacia " + "R");

        //cambiar posicion
        wolf.position.column += 1;
        console.log(wolf.position);
      }
    }
    //mueva vert hacia thomas
  } else if (wolf.position.column === thomas.position.column) {
    if (wolf.position.row > thomas.position.row) {
      if (checkWalls(wolf, "T")) {
        console.log("paso");

        //pasar turno
      } else {
        console.log("muevo hacia " + "T");
        //cambiar posicion
        wolf.position.row -= 1;
        console.log(wolf.position);
      }
    } else {
      if (checkWalls(wolf, "B")) {
        console.log("paso");

        //pasar turno
      } else {
        console.log("muevo hacia " + "B");

        //cambiar posicion
        wolf.position.row += 1;
        console.log(wolf.position);
      }
    }
    //moverse direccion thomas no bloqueada
  } else if (
    wolf.position.row !== thomas.position.row &&
    wolf.position.column !== thomas.position.column
  ) {
    if (wolf.position.row < thomas.position.row) {
      if (checkWalls(wolf, "B")) {
        console.log("continue");

        //pasar turno
      } else {
        console.log("muevo hacia " + "B");

        //cambiar posicion
        wolf.position.row += 1;
        console.log(wolf.position);
        return;
      }
    }
    if (wolf.position.row > thomas.position.row) {
      if (checkWalls(wolf, "T")) {
        console.log("next");

        //pasar turno
      } else {
        console.log("muevo hacia " + "T");

        //cambiar posicion
        wolf.position.row -= 1;
        console.log(wolf.position);
        return;
      }
    }
    if (wolf.position.column > thomas.position.column) {
      if (checkWalls(wolf, "L")) {
        console.log("paso");

        //pasar turno
      } else {
        console.log("muevo hacia " + "L");

        //cambiar posicion
        wolf.position.column -= 1;
        console.log(wolf.position);
        return;
      }
    }
    if (wolf.position.column < thomas.position.column) {
      if (checkWalls(wolf, "R")) {
        console.log("paso");

        //pasar turno
      } else {
        console.log("muevo hacia " + "R");

        //cambiar posicion
        wolf.position.column += 1;
        console.log(wolf.position);
      }
    }
  } else {
    console.log("paso");
    //no se mueve
  }

  checkGameState();
};

function checkGameState() {
  if (
    wolf.position.row === thomas.position.row &&
    wolf.position.column === thomas.position.column
  ) {
    wolf.state = 2;
    thomas.state = 2;
  }
}

module.exports = {
  wolf,
  wolfAction,
};
