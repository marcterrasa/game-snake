import {Snake, Food, directions} from './snake.js';
import {Screen} from './screen.js';

const KEY_DIRECTION_MAPPING = {
    'ArrowUp': directions.UP,
    'ArrowDown': directions.DOWN,
    'ArrowLeft': directions.LEFT,
    'ArrowRight': directions.RIGHT,
}

const TICK_MS = 60;

class Game {

    constructor(canvas) {
        this.screen = new Screen(canvas);
    }

    start() {
        this.snake = this.generateSnake();
        this.food = this.generateFood();

        document.addEventListener('keydown', e => this.keyDownHandler(e.key), false);

        this.tickIntervalId = setInterval(() => this.onTick(), TICK_MS);
    }

    onTick() {
        this.snake.move();

        if (this.screen.canDraw(this.snake)) {
            if (this.snake.eatsFood(this.food)) {
                this.snake.grow();
                this.food = this.generateFood();
            }

            this.screen.clear();
            this.screen.drawFood(this.food);
            this.screen.drawSnake(this.snake);
        } else {
            clearInterval(this.tickIntervalId);
            if(confirm("You ded boi. Again?")) this.start()
        }
    }

    generateSnake() {
        return new Snake(this.screen.startX, this.screen.startY);
    }

    // This cood generate food in a pixel where the snake is currently in
    generateFood() {
        return new Food(this.screen.randomX(), this.screen.randomY());
    }

    keyDownHandler(key) {
        const newDirection = KEY_DIRECTION_MAPPING[key];
        if (newDirection) {
            this.snake.changeDirection(newDirection);
        }
    }

}

export {Game}