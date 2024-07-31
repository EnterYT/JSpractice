const board = document.getElementById('board');
const boardSize = 5;
let knightPosition = { h: 0, v: 0 };
let field = [];
let flipped = Array.from({ length: boardSize }, () => Array(boardSize).fill(false));

// Initialize board
function initBoard() {
    for (let i = 0; i < boardSize; i++) {
        field[i] = [];
        for (let j = 0; j < boardSize; j++) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.id = `tile-${i}-${j}`;
            tile.addEventListener('click', () => flipTile(tile, i, j));
            board.appendChild(tile);
            field[i][j] = tile;
        }
    }
    moveKnightOnField(0, 0);
}

// Move knight
function moveKnight(direction) {
    const { h, v } = knightPosition;
    let newH = h;
    let newV = v;

    if (direction === 'up') newV = (v - 1 + boardSize) % boardSize; // move up
    if (direction === 'down') newV = (v + 1) % boardSize;           // move down
    if (direction === 'left') newH = (h - 1 + boardSize) % boardSize; // move left
    if (direction === 'right') newH = (h + 1) % boardSize;           // move right

    moveKnightOnField(newH, newV);
}


// Move knight on field
function moveKnightOnField(h, v) {
    const { h: oldH, v: oldV } = knightPosition;
    field[oldH][oldV].classList.remove('knight');
    field[h][v].classList.add('knight');
    knightPosition = { h, v };
}

// Flip tile
function flipTile(tile, h, v) {
    flipped[h][v] = !flipped[h][v];
    tile.style.backgroundColor = flipped[h][v] ? 'rgb(153, 180, 209)' : 'palegreen';
}

// Reset game
function resetGame() {
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            flipped[i][j] = false;
            field[i][j].style.backgroundColor = 'palegreen';
        }
    }
    moveKnightOnField(0, 0);
}

initBoard();
