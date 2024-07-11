const canvas = document.getElementById('langtonsAntCanvas');
const ctx = canvas.getContext('2d');
const canvasSize = 600;
const cellSize = 5;
const numCells = canvasSize / cellSize;

let grid = Array(numCells).fill(null).map(() => Array(numCells).fill(0));
let antX = Math.floor(numCells / 2);
let antY = Math.floor(numCells / 2);
let antDirection = 0;
let running = false;
let intervalId;

canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((event.clientX - rect.left) / cellSize);
    const y = Math.floor((event.clientY - rect.top) / cellSize);
    grid[x][y] = grid[x][y] === 0 ? 1 : 0;
    drawGrid();
    drawAnt();
});

function drawGrid() {
    for (let x = 0; x < numCells; x++) {
        for (let y = 0; y < numCells; y++) {
            ctx.fillStyle = grid[x][y] === 1 ? 'black' : 'white';
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

function startSimulation() {
    if (!running) {
        running = true;
        intervalId = setInterval(update, 9);
    }
}

function pauseSimulation() {
    running = false;
    clearInterval(intervalId);
}

function clearGrid() {
    grid = Array(numCells).fill(null).map(() => Array(numCells).fill(0));
    antX = Math.floor(numCells / 2);
    antY = Math.floor(numCells / 2);
    antDirection = 0;
    drawGrid();
    drawAnt();
}

function makeAllBlack() {
    grid = Array(numCells).fill(null).map(() => Array(numCells).fill(1));
    antX = Math.floor(numCells / 2);
    antY = Math.floor(numCells / 2);
    antDirection = 0;
    drawGrid();
    drawAnt();
}

function loadPreset(preset) {
    clearGrid();
    if (preset === 'checkerboard') {
        for (let x = 0; x < numCells; x++) {
            for (let y = 0; y < numCells; y++) {
                if ((x + y) % 2 === 0) {
                    grid[x][y] = 1;
                }
            }
        }
    } else if (preset === 'border') {
        for (let x = 0; x < numCells; x++) {
            grid[x][0] = 1;
            grid[x][numCells - 1] = 1;
        }
        for (let y = 0; y < numCells; y++) {
            grid[0][y] = 1;
            grid[numCells - 1][y] = 1;
        }
    } else if (preset === 'horizontalStripes') {
        for (let y = 0; y < numCells; y += 2) {
            for (let x = 0; x < numCells; x++) {
                grid[x][y] = 1;
            }
        }
    } else if (preset === 'verticalStripes') {
        for (let x = 0; x < numCells; x += 2) {
            for (let y = 0; y < numCells; y++) {
                grid[x][y] = 1;
            }
        }
    }
    drawGrid();
    drawAnt();
}

drawGrid();
drawAnt();