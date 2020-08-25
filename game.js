import {Snake, directions} from './snake.js';
import {Screen, START_X, START_Y} from './screen.js';

const KEY_DIRECTION_MAPPING = {
    'ArrowUp': directions.UP,
    'ArrowDown': directions.DOWN,
    'ArrowLeft': directions.LEFT,
    'ArrowRight': directions.RIGHT,
}

const TICK_MS = 80;

class Game {

    constructor(canvas) {
        this.screen = new Screen(canvas);
    }

    start() {
        this.snake = new Snake(START_X, START_Y);

        document.addEventListener('keydown', e => this.keyDownHandler(e.key), false);

        this.tickIntervalId = setInterval(() => this.onTick(), TICK_MS);
    }

    onTick() {
        console.log("Executing")
        this.snake.move();

        if (this.screen.canDraw(this.snake)) {
            this.screen.clear();
            this.screen.drawFood();
            this.screen.drawSnake(this.snake);
        } else {
            this.snake = null;
            clearInterval(this.tickIntervalId);
            if(confirm("You ded boi. Again?")) this.start()
        }
    }

    keyDownHandler(key) {
        const newDirection = KEY_DIRECTION_MAPPING[key];
        if (newDirection) {
            this.snake.changeDirection(newDirection);
        }
    }

}

export {Game}