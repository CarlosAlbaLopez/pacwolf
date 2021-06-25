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
  for (let i = 2; i < 10; i++) {
    if (i % 2 === 0) {
      console.log("Thomas' turn");
      thomasAction();
    } else {
      console.log("Wolf's turn");
      wolfAction();
    }
  }
};

console.log(gameLoop());

thomasAction();
