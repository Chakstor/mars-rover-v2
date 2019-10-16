// Rover Object Goes Here
// ======================

var rover = {
    direction: 'N',
    travelLog: ['[0, 0]'],
    x: 0,
    y: 0
};


// Grid Goes Here
// ======================

var grid = {
    rows: 10,
    columns: 10
};


// Methods Go Here
// ======================

function turnLeft(rover) {
    var previousDirection = rover.direction;
    updateDirection(rover.direction, 'left');
    printDirectionStatus(previousDirection, rover.direction, 'turnLeft');
}

function turnRight(rover) {
    var previousDirection = rover.direction;
    updateDirection(rover.direction, 'right');
    printDirectionStatus(previousDirection, rover.direction, 'turnRight');
}

function moveForward(rover) {
    switch(rover.direction) {
        case 'N':
            rover.y = (rover.y - 1 >= 0) ? rover.y - 1 : rover.y;
            break;
        case 'E':
            rover.x = (rover.x + 1 < grid.columns) ? rover.x + 1 : rover.x;
            break;
        case 'S':
            rover.y = (rover.y + 1 < grid.rows) ? rover.y + 1 : rover.y;
            break;
        case 'W':
            rover.x = (rover.x - 1 >- 0) ? rover.x - 1 : rover.x;
            break;
    }

    rover.travelLog.push(`[${rover.x}, ${rover.y}]`);
    printPositionStatus(rover, 'moveForward');
}

function moveBackward(rover) {
    switch (rover.direction) {
        case 'N':
            rover.y = (rover.y + 1 < grid.rows) ? rover.y + 1 : rover.y;
            break;
        case 'E':
            rover.x = (rover.x - 1 > 0) ? rover.x - 1 : rover.x;
            break;
        case 'S':
            rover.y = (rover.y - 1 >= 0) ? rover.y - 1 : rover.y;
            break;
        case 'W':
            rover.x = (rover.x + 1 < grid.columns) ? rover.x + 1 : rover.x;
            break;
    }

    rover.travelLog.push(`[${rover.x}, ${rover.y}]`);
    printPositionStatus(rover, 'moveBackward');
}

function updateDirection(direction, turn) {
    switch(direction) {
        case 'N':
            rover.direction = turn === 'left' ? 'W' : 'E';
            break;
        case 'E':
            rover.direction = turn === 'left' ? 'N' : 'S';
            break;
        case 'S':
            rover.direction = turn === 'left' ? 'E' : 'W';
            break;
        case 'W':
            rover.direction = turn === 'left' ? 'S' : 'N';
            break;
    }
}

function roverCommands(commands) {
    for (var i = 0; i <= commands.length; i++) {
        switch(commands[i]) {
            case 'f':
                moveForward(rover);
                break;
            case 'b':
                moveBackward(rover);
                break;
            case 'r':
                turnRight(rover);
                break;
            case 'l':
                turnLeft(rover);
                break;
        }
    }
}

function printDirectionStatus(previousDirection, newDirection, calledMethod) {
    console.log(`Previous direction: ${previousDirection}`);
    console.log(`New direction: ${newDirection}`);
    console.log(`${calledMethod} was called!`);
}

function printPositionStatus(rover, calledMethod) {
    console.log(`${calledMethod} was called`);
    console.log(`new position: [${rover.x}, ${rover.y}]`);
}

function getRoverTravelLog() {
    console.log(rover.travelLog);
}