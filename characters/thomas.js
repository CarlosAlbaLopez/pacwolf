const { data } = require("../common/jsonData");
const { exit } = require("../common/exit");

let thomas = {
  state: 0,
  position: {
    row: data.puzzles[0].thomas.row,
    column: data.puzzles[0].thomas.column,
  },
};

let thomasAction = () => {
  let currentPath = g
    .shortestPath(
      thomas.position.row.toString() + thomas.position.column.toString(),
      exit.position.row.toString() + exit.position.column.toString()
    )
    .reverse();
  console.log(currentPath);

  //move to first position in returned array = update thomas position
  thomas.position.row = parseInt(currentPath[0].split("")[0]);
  thomas.position.column = parseInt(currentPath[0].split("")[1]);
  console.log("Thomas' position", thomas.position);

  //check game state
  if (
    exit.position.row === thomas.position.row &&
    exit.position.column === thomas.position.column
  ) {
    thomas.state = 1;
  }
};

/**
 * Basic priority queue implementation. If a better priority queue is wanted/needed,
 * this code works with the implementation in google's closure library (https://code.google.com/p/closure-library/).
 * Use goog.require('goog.structs.PriorityQueue'); and new goog.structs.PriorityQueue()
 */
function PriorityQueue() {
  this._nodes = [];

  this.enqueue = function (priority, key) {
    this._nodes.push({ key: key, priority: priority });
    this.sort();
  };
  this.dequeue = function () {
    return this._nodes.shift().key;
  };
  this.sort = function () {
    this._nodes.sort(function (a, b) {
      return a.priority - b.priority;
    });
  };
  this.isEmpty = function () {
    return !this._nodes.length;
  };
}

/**
 * Pathfinding starts here
 */
function Graph() {
  var INFINITY = 1 / 0;
  this.vertices = {};

  this.addVertex = function (name, edges) {
    this.vertices[name] = edges;
  };

  this.shortestPath = function (start, finish) {
    var nodes = new PriorityQueue(),
      distances = {},
      previous = {},
      path = [],
      smallest,
      vertex,
      neighbor,
      alt;

    for (vertex in this.vertices) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(0, vertex);
      } else {
        distances[vertex] = INFINITY;
        nodes.enqueue(INFINITY, vertex);
      }

      previous[vertex] = null;
    }

    while (!nodes.isEmpty()) {
      smallest = nodes.dequeue();

      if (smallest === finish) {
        path = [];

        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }

        break;
      }

      if (!smallest || distances[smallest] === INFINITY) {
        continue;
      }

      for (neighbor in this.vertices[smallest]) {
        alt = distances[smallest] + this.vertices[smallest][neighbor];

        if (alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = smallest;

          nodes.enqueue(alt, neighbor);
        }
      }
    }

    return path;
  };
}

var g = new Graph();

//pendiente crear función que convierta puzzle en graph
g.addVertex("11", { 12: 1, 21: 1 });
g.addVertex("12", { 13: 1, 11: 1 });
g.addVertex("13", { 12: 1, 14: 1 });
g.addVertex("14", { 13: 1, 15: 1, 24: 1 });
g.addVertex("15", { 14: 1, 16: 1, 25: 1 });
g.addVertex("16", { 15: 1, 17: 1 });
g.addVertex("17", { 16: 1, 27: 1 });
g.addVertex("21", { 11: 1, 31: 1 });
g.addVertex("22", { 23: 1 });
g.addVertex("23", { 22: 1, 24: 1 });
g.addVertex("24", { 14: 1, 23: 1, 34: 1 });
g.addVertex("25", { 15: 1, 26: 1, 35: 1 });
g.addVertex("26", { 25: 1, 36: 1 });
g.addVertex("27", { 17: 1, 37: 1 });
g.addVertex("31", { 21: 1, 41: 1 });
g.addVertex("32", { 33: 1, 42: 1 });
g.addVertex("33", { 32: 1, 34: 1, 43: 1 });
g.addVertex("34", { 24: 1, 33: 1, 44: 1 });
g.addVertex("35", { 25: 1, 45: 1 });
g.addVertex("36", { 26: 1, 46: 1 });
g.addVertex("37", { 27: 1, 47: 1 });
g.addVertex("41", { 31: 1, 51: 1 });
g.addVertex("42", { 32: 1, 43: 1, 52: 1 });
g.addVertex("43", { 33: 1, 42: 1, 44: 1, 53: 1 });
g.addVertex("44", { 34: 1, 43: 1, 45: 1 });
g.addVertex("45", { 35: 1, 44: 1, 55: 1 });
g.addVertex("46", { 36: 1, 56: 1 });
g.addVertex("47", { 37: 1, 57: 1 });
g.addVertex("51", { 41: 1, 61: 1 });
g.addVertex("52", { 42: 1, 62: 1 });
g.addVertex("53", { 43: 1, 54: 1 });
g.addVertex("54", { 53: 1, 55: 1, 64: 1 });
g.addVertex("55", { 45: 1, 54: 1, 65: 1 });
g.addVertex("56", { 46: 1, 66: 1 });
g.addVertex("57", { 47: 1, 57: 1 });
g.addVertex("61", { 51: 1, 71: 1 });
g.addVertex("62", { 52: 1, 72: 1 });
g.addVertex("63", { 64: 1 });
g.addVertex("64", { 54: 1, 63: 1, 65: 1 });
g.addVertex("65", { 55: 1, 64: 1 });
g.addVertex("66", { 56: 1, 76: 1 });
g.addVertex("67", { 57: 1, 77: 1 });
g.addVertex("71", { 61: 1 });
g.addVertex("72", { 62: 1, 73: 1 });
g.addVertex("73", { 72: 1, 74: 1 });
g.addVertex("74", { 73: 1, 75: 1 });
g.addVertex("75", { 74: 1, 76: 1 });
g.addVertex("76", { 66: 1, 75: 1, 77: 1 });
g.addVertex("77", { 67: 1, 76: 1 });

// Log test, with the addition of reversing the path and prepending the first node so it's more readable
// console.log(g.shortestPath("A", "H").concat(["A"]).reverse());

module.exports = { thomas, thomasAction };
