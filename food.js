export function update() {
    
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = segment.y;
  foodElement.style.gridColumnStart = segment.x;
  foodElement.classList.add("snake");

  gameBoard.appendChild(snakeElement);
}
