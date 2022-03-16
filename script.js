const grid = document.querySelector('.grid');
const resetButton = document.querySelector('.reset');
let gridSize = document.querySelector('.gridSize');
let gridInput = document.querySelector('input');
const applyGridSize = document.querySelector('.apply');

//Creates default grid
let boxSize = 20;
createGrid(boxSize);

//Creating divs using javascript
function createDiv(size) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.classList.add('box');
    return div;
}

//Creates grid using the provided grid size
function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          grid.appendChild(createDiv(grid.clientWidth / gridSize));
        }
    }
}

//Refreshes page
function reset() {
    location.reload();
}

//Uses slider input to change grid size


//Mouse hovering targets childs in the grid. Then adds an active class to those targeted childs.
grid.addEventListener('mouseover', function (e) {
  if (e.target.matches('.box')) {
    e.target.classList.add('active');
  }
});

gridInput.addEventListener('input', function (e) {
    boxSize = e.target.value;
    gridSize.textContent = `${boxSize}x${boxSize}`;
});

applyGridSize.addEventListener('click', function () {
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
    createGrid(boxSize);
});

//Calls reset function when reset button is clicked.
resetButton.addEventListener('click', reset)