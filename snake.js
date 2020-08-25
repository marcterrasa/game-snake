const directions = {
    UP: {name: 'up', axis: 'y', modifier: -1},
    DOWN: {name: 'down', axis: 'y', modifier: 1},
    LEFT: {name: 'left', axis: 'x', modifier: -1},
    RIGHT: {name: 'right', axis: 'x', modifier: 1},
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
        this.newDirection = directions.RIGHT;
    }

    move() {
        this.direction = this.newDirection;

        for (let i = this.parts.length; i > 1; i--) {
            this.parts[i - 1].x = this.parts[i - 2].x;
            this.parts[i - 1].y = this.parts[i - 2].y;
        }

        this.head[this.direction.axis] += this.direction.modifier;
    }

    changeDirection(newDirection) {
        if (this.direction.axis != newDirection.axis) {
            this.newDirection = newDirection;
        }
    }

    headCollidesBody() {
        for (let i = 1; i < this.parts.length; i++) {
            let part = this.parts[i];
            if (this.head.x == part.x && this.head.y == part.y) return true;
        }
        return false;
    }

    eatsFood(food) {
        return this.head.x === food.x && this.head.y === food.y;
    }

    grow(){
        this.parts.push(new SnakePart(this.tail.x, this.tail.y));
    }

    get head() {
        return this.parts[0];
    }

    get tail() {
        return this.parts[this.parts.length - 1];
    }
}

class Food {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

export {Snake, Food, directions}