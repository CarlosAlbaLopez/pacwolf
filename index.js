"use strict";
//Imports
let { thomas, thomasAction } = require("./characters/thomas");
let { wolf, wolfAction } = require("./characters/wolf");
const { puzzle } = require("./common/jsonData");

//Variable definitions
const TOP = "T";
const BOTTOM = "B";
const LEFT = "L";
const RIGHT = "R";
const WALL = "W";
const GAMESTATES = {
  neutral: 0,
  escape: 1,
  eat: 2,
};

let gameLoop = () => {
  for (let i = 2; i < 100; i++) {
    if (thomas.state === 2) {
      console.log("GAME OVER");
      break;
    } else if (thomas.state === 1) {
      console.log("YOU WIN!");
      break;
    }
    if (i % 2 === 0) {
      console.log("Thomas' turn");
      // thomasAction();
      if (i === 2) {
        thomas.position.row = 2;
        thomas.position.column = 4;
        console.log("Thomas' position: ", thomas.position);
      } else if (i === 4) {
        thomas.position.row = 3;
        thomas.position.column = 4;
        console.log("Thomas' position: ", thomas.position);
      } else if (i === 6) {
        thomas.position.row = 3;
        thomas.position.column = 3;
        console.log("Thomas' position: ", thomas.position);
      } else if (i === 8) {
        thomas.position.row = 3;
        thomas.position.column = 2;
        console.log("Thomas' position: ", thomas.position);
      } else if (i === 10) {
        thomas.position.row = 4;
        thomas.position.column = 2;
        console.log("Thomas' position: ", thomas.position);
      } else if (i === 12) {
        thomas.position.row = 5;
        thomas.position.column = 2;
        console.log("Thomas' position: ", thomas.position);
      } else if (i === 14) {
        thomas.position.row = 6;
        thomas.position.column = 2;
        console.log("Thomas' position: ", thomas.position);
      } else if (i === 16) {
        thomas.position.row = 7;
        thomas.position.column = 2;
        console.log("Thomas' position: ", thomas.position);
      } else if (i === 18) {
        thomas.position.row = 7;
        thomas.position.column = 3;
        console.log("Thomas' position: ", thomas.position);
      } else if (i === 20) {
        thomas.position.row = 7;
        thomas.position.column = 4;
        console.log("Thomas' position: ", thomas.position);
      } else if (i === 22) {
        thomas.position.row = 7;
        thomas.position.column = 3;
        console.log("Thomas' position: ", thomas.position);
      } else if (i === 24) {
        thomas.position.row = 7;
        thomas.position.column = 2;
        console.log("Thomas' position: ", thomas.position);
      } else if (i === 26) {
        thomas.position.row = 6;
        thomas.position.column = 2;
        console.log("Thomas' position: ", thomas.position);
      } else {
        thomasAction();
      }
    } else {
      console.log("Wolf's turn");
      wolfAction();
      wolfAction();
      console.log("Wolf's position: ", wolf.position);
    }
  }
};

console.log(gameLoop());
