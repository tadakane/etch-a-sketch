function createGrid(gridsize) {
    let cell;
    gridContainer.style.display = 'inline-grid';
    gridContainer.style.width = '800px';
    gridContainer.style.height = '800px';
    //gridConatiner.style.margin = '0px';

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

let body = document.querySelector('body');
body.style.textAlign = 'center';

let gridContainer = document.querySelector('.container');

let sizeBtn = document.createElement('button');
sizeBtn.style.padding = '15px';
sizeBtn.style.margin = '0px 30px';
sizeBtn.textContent = "Change Grid Size";
body.appendChild(sizeBtn);

createGrid(16);
sizeBtn.addEventListener('click', () => {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    gridContainer.style.gridTemplateColumns = '';
    let size = gridSize();
    createGrid(size);
})
