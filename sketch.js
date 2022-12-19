const GRID_ROWS = 16;
const GRID_COLS = 16;

function createGrid() {
    let cell;
    let gridContainer = document.querySelector('.container');
    gridContainer.style.display = 'inline-grid';

    for (let i = 0; i < GRID_ROWS; i++) {
        gridContainer.style.gridTemplateColumns += ' auto';
        for (let j = 0; j < GRID_COLS; j++) {
            cell = document.createElement('div');
            cell.setAttribute('id', 'grid-cell');
            gridContainer.appendChild(cell);
        }
    }
    console.log(gridContainer.style.gridTemplateColumns);

    let cellStyle = document.querySelectorAll('#grid-cell');
    cellStyle.forEach ((cell) => {
        cell.style.border = '1px solid black';
        cell.style.width = '50px';
        cell.style.height = '50px'
        cell.style.textAlign = 'center';
    });
}

document.querySelector('body').style.textAlign = 'center';
createGrid();