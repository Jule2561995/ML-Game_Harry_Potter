import keyboard from "./keyboard.mjs";

let left = keyboard("ArrowLeft");
let right = keyboard("ArrowRight");
let up = keyboard("ArrowUp");
let down = keyboard("ArrowDown");

/*
left.press = () => {
  console.log("left");
};
right.press = () => {
  console.log("right");
};
up.press = () => {
  console.log("up");
};
down.press = () => {
  console.log("down");
};
*/

export default {
  left,
  right,
  up,
  down,
};
// tracking.js -> hier läuft alles zusammen
// js-array bauen mit x,y-werten, die länge des arrays > 180 frames dann push