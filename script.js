const grid = document.querySelector('.grid');
const reset = document.querySelector('.reset');
let gridSize = document.querySelector('.gridSize');
let gridInput = document.querySelector('input');

let boxSize = 30;
createGrid(boxSize);

function createDiv(size) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.border = '1px thin black';
    return div;
}

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          grid.appendChild(createDiv(grid.clientWidth / gridSize));
        }
      }
}

gridInput.addEventListener('input', function (e) {
    squareSize = e.target.value;
    gridSize.textContent = `${squareSize}x${squareSize}`;
});