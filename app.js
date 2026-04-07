const grid = document.querySelector("#grid");
const gridWidth = 9;
const gridSize = gridWidth * gridWidth;
const squares = [];
const initialPosition = 76;
let currentPosition = initialPosition;
let gameOver = false;

const moveUp = -gridWidth;
const moveDown = gridWidth;
const moveLeft = -1;
const moveRight = 1;

function moveFrog(e) {
    squares[currentPosition].classList.remove("frog");
    switch (e.key) {
        case "ArrowLeft":
            currentPosition += currentPosition % gridWidth !== 0 ? moveLeft : 0;
            break;
        case "ArrowRight":
            currentPosition +=
                currentPosition % gridWidth < gridWidth - 1 ? moveRight : 0;
            break;
        case "ArrowUp":
            currentPosition += currentPosition >= gridWidth ? moveUp : 0;
            break;
        case "ArrowDown":
            currentPosition +=
                currentPosition < gridSize - gridWidth ? moveDown : 0;
            break;
    }
    squares[currentPosition].classList.add("frog");
}

document.addEventListener("keydown", moveFrog);

function createBoard() {
    let j = 1;
    for (let i = 0; i < gridSize; i++) {
        const square = document.createElement("div");
        if (i === 4) square.classList.add("end");
        if (i === initialPosition) square.classList.add("start", "frog");
        if (i >= 18 && i < 27) {
            square.classList.add("road-left");
            square.classList.add("c" + j); // l de CAR = Carro
            square.setAttribute("data-car", j++);
            if (j > 3) j = 1;
        }
        if (i >= 27 && i < 36) {
            square.classList.add("road-right");
            square.classList.add("c" + j); // l de CAR = Carro
            square.setAttribute("data-car", j++);
            if (j > 3) j = 1;
        }
        if (i >= 45 && i < 54) {
            square.classList.add("river-left");
            square.classList.add("l" + j); // l de LOG = Tronco
            square.setAttribute("data-log", j++);
            if (j > 5) j = 1;
        }
        if (i >= 54 && i < 63) {
            square.classList.add("river-right");
            square.classList.add("l" + j); // l de LOG = Tronco
            square.setAttribute("data-log", j++);
            if (j > 5) j = 1;
        }

        squares.push(square);
        grid.appendChild(square);
    }
}

createBoard();

const logsLeft = document.querySelectorAll(".river-left");
const logsRight = document.querySelectorAll(".river-right");
const carsLeft = document.querySelectorAll(".road-left");
const carsRight = document.querySelectorAll(".road-right");

function autoMove() {
    logsLeft.forEach((logLeft) => moveLogLeft(logLeft));
    logsRight.forEach((logRight) => moveLogRight(logRight));
    carsLeft.forEach((carLeft) => moveCarLeft(carLeft));
    carsRight.forEach((carRight) => moveCarRight(carRight));
}

function moveLogLeft(logLeft) {
    logLeft.classList.remove("l" + logLeft.dataset.log);
    if (logLeft.dataset.log == 5) {
        logLeft.classList.add("l" + 1);
        logLeft.dataset.log = 1;
    } else {
        logLeft.classList.add("l" + (parseInt(logLeft.dataset.log) + 1));
        logLeft.dataset.log = parseInt(logLeft.dataset.log) + 1;
    }
}

/*    switch (true) {
        case logLeft.classList.contains("l1"):
            logLeft.classList.remove("l1");
            logLeft.classList.add("l2");
            break;
        case logLeft.classList.contains("l2"):
            logLeft.classList.remove("l2");
            logLeft.classList.add("l3");
            break;
        case logLeft.classList.contains("l3"):
            logLeft.classList.remove("l3");
            logLeft.classList.add("l4");
            break;
        case logLeft.classList.contains("l4"):
            logLeft.classList.remove("l4");
            logLeft.classList.add("l5");
            break;
        case logLeft.classList.contains("l5"):
            logLeft.classList.remove("l5");
            logLeft.classList.add("l1");
            break;
    } */

function moveLogRight(logRight) {
    logRight.classList.remove("l" + logRight.dataset.log);
    if (logRight.dataset.log == 1) {
        logRight.classList.add("l" + 5);
        logRight.dataset.log = 5;
    } else {
        logRight.classList.add("l" + (logRight.dataset.log - 1));
        logRight.dataset.log -= 1;
    }
}

/*    switch (true) {
        case logRight.classList.contains("l1"):
            logRight.classList.remove("l1");
            logRight.classList.add("l5");
            break;
        case logRight.classList.contains("l2"):
            logRight.classList.remove("l2");
            logRight.classList.add("l1");
            break;
        case logRight.classList.contains("l3"):
            logRight.classList.remove("l3");
            logRight.classList.add("l2");
            break;
        case logRight.classList.contains("l4"):
            logRight.classList.remove("l4");
            logRight.classList.add("l3");
            break;
        case logRight.classList.contains("l5"):
            logRight.classList.remove("l5");
            logRight.classList.add("l4");
            break;
    } */

function moveCarLeft(carLeft) {
    carLeft.classList.remove("c" + carLeft.dataset.car);
    if (carLeft.dataset.car == 3) {
        carLeft.classList.add("c" + 1);
        carLeft.dataset.car = 1;
    } else {
        carLeft.classList.add("c" + (parseInt(carLeft.dataset.car) + 1));
        carLeft.dataset.car = parseInt(carLeft.dataset.car) + 1;
    }
}

function moveCarRight(carRight) {
    carRight.classList.remove("c" + carRight.dataset.car);
    if (carRight.dataset.car == 1) {
        carRight.classList.add("c" + 3);
        carRight.dataset.car = 3;
    } else {
        carRight.classList.add("c" + (carRight.dataset.car - 1));
        carRight.dataset.car -= 1;
    }
}

function checkWin() {
    const here = squares[currentPosition].classList;
    if (
        here.contains("l1") ||
        here.contains("l2") ||
        here.contains("l3") ||
        here.contains("c1")
    ) {
        console.log("Morreste!!!!");
        gameOver = true;
    } else if (here.contains("end")) {
        console.log("Ganhaste!!!!");
        gameOver = true;
    }

    if (gameOver) {
        document.removeEventListener("keydown", moveFrog);
        clearInterval(checkWinInterval);
        clearInterval(autoMoveInterval);
    }
}

let checkWinInterval = setInterval(checkWin, 50);
let autoMoveInterval = setInterval(autoMove, 1000);
