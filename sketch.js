function createGrid(gridsize) {
    let cell;
    gridContainer.style.display = 'inline-grid';
    gridContainer.style.width = '800px';
    gridContainer.style.height = '800px';

    for (let i = 0; i < parseInt(gridsize); i++) {
        gridContainer.style.gridTemplateColumns += ' auto';
        for (let j = 0; j < parseInt(gridsize); j++) {
            cell = document.createElement('div');
            cell.setAttribute('id', 'grid-cell');
            gridContainer.appendChild(cell);
        }
    }

    let cellStyle = document.querySelectorAll('#grid-cell');
    cellStyle.forEach ((cell) => {
        cell.style.border = '0.5px solid black';
        cell.style.textAlign = 'center';
        cell.addEventListener('mouseover', () => {
            if (drawMode === true) 
                cell.style.backgroundColor = 'black';
        })
    });
}

function gridSize() {
    let size = prompt("What size should the new grid be?");
    while (size > 100) {
        alert("The maximum grid size is 100.");
        size = prompt("What size should the new grid be?");
    }
    return size;
}

function toggleDraw(e) {
    if (e.keyCode === 68) {
        if (drawMode === true) {
            drawIndicator.style.backgroundColor = 'white';
            drawMode = false;
        }
        else if (drawMode === false) {
            drawIndicator.style.backgroundColor = '#fff385';
            drawMode = true;
        }
    }
}

let body = document.querySelector('body');
body.style.display = 'flex';
body.style.justifyContent = 'center';
let drawMode = false;

let gridContainer = document.createElement('div');
gridContainer.setAttribute('class', 'container');

let extraContainer = document.createElement('div');
extraContainer.style.textAlign = 'center';

let sizeBtn = document.createElement('button');
sizeBtn.style.padding = '15px';
sizeBtn.style.margin = '0px 30px';
sizeBtn.textContent = "Change Grid Size";
extraContainer.appendChild(sizeBtn);

let drawIndicator = document.createElement('div');
drawIndicator.textContent = "DRAW";
drawIndicator.style.padding = '10px 0px';
drawIndicator.style.margin = '20px';
drawIndicator.style.fontSize = '30px';

let instructions = document.createElement('p');
instructions.textContent = "Hit \"D\" to toggle drawing";
instructions.style.fontSize = '16px';

extraContainer.appendChild(drawIndicator);
extraContainer.appendChild(instructions);

body.appendChild(extraContainer);
body.appendChild(gridContainer);

createGrid(16);
sizeBtn.addEventListener('click', () => {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    gridContainer.style.gridTemplateColumns = '';
    let size = gridSize();
    createGrid(size);
})

window.addEventListener('keydown', toggleDraw);
