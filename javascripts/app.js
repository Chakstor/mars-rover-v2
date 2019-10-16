$(document).ready(function () {
    // Variables
    // ======================

    var rover = {
        direction: 'N',
        travelLog: ['[0, 0]'],
        x: 0,
        y: 0
    };

    var gridDefinition = {
        rows: 3,
        columns: 3
    };

    var grid = [];


    // Generate Grid
    // ======================

    for (var row = 0; row <= gridDefinition.rows - 1; row++) {
        var arr = [];
        $('#grid').append('<ul></ul>');

        for (var col = 0; col <= gridDefinition.columns - 1; col++) {
            $('#grid ul').eq(row).append(`<li></li>`)
        }

        grid.push(arr);
    }

    updateRoverOnMap();


    // Methods
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
        var previousPos = {
            x: rover.x,
            y: rover.y
        }

        switch(rover.direction) {
            case 'N':
                rover.x = (rover.x - 1 > - 0) ? rover.x - 1 : rover.x;
                break;
            case 'E':
                rover.y = (rover.y + 1 < gridDefinition.columns) ? rover.y + 1 : rover.y;
                break;
            case 'S':
                rover.x = (rover.x + 1 < gridDefinition.rows) ? rover.x + 1 : rover.x;
                break;
            case 'W':
                rover.y = (rover.y - 1 >= 0) ? rover.y - 1 : rover.y;
                break;
        }

        updateRoverTravelLog(rover);
        printRoverPosition(rover, 'moveForward');
        updateGridMap(previousPos, rover);
    }

    function moveBackward(rover) {
        var previousPos = {
            x: rover.x,
            y: rover.y
        }

        switch (rover.direction) {
            case 'N':
                rover.x = (rover.x + 1 < gridDefinition.rows) ? rover.x + 1 : rover.x;
                break;
            case 'E':
                rover.y = (rover.y - 1 >= 0) ? rover.y - 1 : rover.y;
                break;
            case 'S':
                rover.x = (rover.x - 1 > 0) ? rover.x - 1 : rover.x;
                break;
            case 'W':
                rover.y = (rover.y + 1 < gridDefinition.columns) ? rover.y + 1 : rover.y;
                break;
        }

        updateRoverTravelLog(rover);
        printRoverPosition(rover, 'moveBackward');
        updateGridMap(previousPos, rover);
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

    function updateGridMap(previousPos, rover) {
        grid[previousPos.x][previousPos.y] = null;
        grid[rover.x][rover.y] = 'X';

        console.log(grid);
    }

    function updateRoverOnMap() {
        $('#grid ul:nth-child(' + rover.y + 1 + ') li:nth-child(' + rover.x + 1 + ')').text('x');
    }

    function printDirectionStatus(previousDirection, newDirection, calledMethod) {
        console.log(`Previous direction: ${previousDirection}`);
        console.log(`New direction: ${newDirection}`);
        console.log(`${calledMethod} was called!`);
    }

    function printRoverPosition(rover, calledMethod) {
        console.log(`${calledMethod} was called`);
        console.log(`new position: [${rover.x}, ${rover.y}]`);
    }

    function updateRoverTravelLog(rover) {
        rover.travelLog.push(`[${rover.x}, ${rover.y}]`);
    }

    function getRoverTravelLog() {
        console.log(rover.travelLog);
    }
});