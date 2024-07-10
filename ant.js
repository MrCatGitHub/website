const canvas = document.getElementById('langtonsAntCanvas');
const ctx = canvas.getContext('2d');
const canvasSize = 600;
const cellSize = 5;
const numCells = canvasSize / cellSize;

const grid = Array(numCells).fill(null).map(() => Array(numCells).fill(0));

let antX = Math.floor(numCells / 2);
let antY = Math.floor(numCells / 2);
let antDirection = 0;

function drawGrid() {
    for (let x = 0; x < numCells; x++) {
        for (let y = 0; y < numCells; y++) {
            if (grid[x][y] === 1) {
                ctx.fillStyle = 'black';
            } else {
                ctx.fillStyle = 'white';
            }
            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
    }
}

function drawAnt() {
    ctx.fillStyle = 'red';
    ctx.fillRect(antX * cellSize, antY * cellSize, cellSize, cellSize);
}

function moveAnt() {
    if (grid[antX][antY] === 0) {
        antDirection = (antDirection + 1) % 4;
        grid[antX][antY] = 1;
    } else {
        antDirection = (antDirection + 3) % 4;
        grid[antX][antY] = 0;
    }

    switch (antDirection) {
        case 0: antY = (antY - 1 + numCells) % numCells; break;
        case 1: antX = (antX + 1) % numCells; break;
        case 2: antY = (antY + 1) % numCells; break;
        case 3: antX = (antX - 1 + numCells) % numCells; break;
    }
}

function update() {
    moveAnt();
    drawGrid();
    drawAnt();
}

function start() {
    setInterval(update, 10);
}

drawGrid();
drawAnt();
start();