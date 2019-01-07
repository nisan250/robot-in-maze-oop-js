'use strict';

function MazeSpace(directions) {
    for(i = 0; i < directions.length; i++) {
        this[directions[i]] = false;
    }
}

MazeSpace.prototype.setWall = function(direction) {
    this[direction] = true;
}