import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED, getSnakeHead, snakeIntersection
} from "./snake.js";
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0;
let gameOver = false
const gameBoard = document.getElementById("game-board");

// game loop
function main(currentTime) {
  if (gameOver) {
    if (confirm('You lost. Press ok to restart.')) {
      window.location = '/'
    }
    return 
    
    // return alert("you lose")
  }

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
  updateFood()
  checkDeath()
}

function draw() {
  gameBoard.innerHTML = "";
  // don't show previouse snake pieces
  drawSnake(gameBoard);
  drawFood(gameBoard)
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
