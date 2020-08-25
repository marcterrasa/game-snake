const directions = {
    UP: {name: 'up', axis: 'y'},
    DOWN: {name: 'down', axis: 'y'},
    LEFT: {name: 'left', axis: 'x'},
    RIGHT: {name: 'right', axis: 'x'},
}

class SnakePart {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Snake {

    constructor(x, y) {
        this.parts = [
            new SnakePart(x, y),
            new SnakePart(x - 1, y),
            new SnakePart(x - 2, y),
        ]
        this.direction = directions.RIGHT;
    }

    move() {
        for (let i = this.parts.length; i > 1; i--) {
            this.parts[i - 1].x = this.parts[i - 2].x;
            this.parts[i - 1].y = this.parts[i - 2].y;
        }

        switch (this.direction) {
            case directions.UP:
                this.parts[0].y -= 1;
                break;
            case directions.DOWN:
                this.parts[0].y += 1;
                break;
            case directions.LEFT:
                this.parts[0].x -= 1;
                break;
            case directions.RIGHT:
                this.parts[0].x +=1;
                break;
        }
    }

    changeDirection(newDirection) {
        if (this.direction.axis != newDirection.axis) {
            this.direction = newDirection;
        }
    }

    headCollidesBody() {
        for (let i = 1; i < this.parts.length; i++) {
            let part = this.parts[i];
            if (this.head.x == part.x && this.head.y == part.y) return true;
        }
        return false;
    }

    get head() {
        return this.parts[0];
    }
}

export {Snake, directions}