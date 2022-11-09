import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
} from "./snake.js";

let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");

// game loop
function main(currentTime) {
  window.requestAnimationFrame(main);

  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  // if time since last render is < 0.5s, no need move snake

  //   console.log("Render");
  lastRenderTime = currentTime;

  // update game logic loop
  update();

  // draw/render from logic
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
}

function draw() {
  gameBoard.innerHTML = "";
  // don't show previouse snake pieces
  drawSnake(gameBoard);
}
