# Mars Rover Kata

We are sending a rover to Mars and we need to program its movements so that we can send it commands from Earth.

The rover can turn right or left and  move forwards or backwards based on its direction.
It receives a string of commands via the `roverCommands` method.

## Commands

Available commands are:
* `f` = moves the robot forward.
* `b` = moves the robot backward.
* `l` = face the robot to the left.
* `r` = face the robot to the right.

## How to use it

Open `index.html` in your preferred browser. Open the browser's console and call the `roverCommands` method passing a string of commands. For example: `roverCommands('rfrf')`. If this were ran from the very begining, this should move the robot from position `[0, 0]` to position `[1, 1]`.
