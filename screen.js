// const
const SNAKE_COLOR = "white"
const FOOD_COLOR = "red"
const CANVAS_BACKGROUND_COLOR = '#1A1A1A';
const PIXEL_SIZE = 20;
const CANVAS_WIDTH = 41;
const CANVAS_HEIGTH = 41;

// calculated consts
const START_X = Math.floor(CANVAS_WIDTH / 2) + 1;
const START_Y = Math.floor(CANVAS_HEIGTH / 2) + 1;

class Screen {

    constructor(canvas) {
        this.canvas = canvas;
        canvas.height = CANVAS_HEIGTH * PIXEL_SIZE;
        canvas.width = CANVAS_WIDTH * PIXEL_SIZE;

        this.ctx = canvas.getContext('2d');
    }

    clear() {
        this.ctx.fillStyle = CANVAS_BACKGROUND_COLOR;
        this.ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    canDraw(snake) {
        return snake.head.x >= 0
            && snake.head.y >= 0
            && snake.head.x < CANVAS_WIDTH
            && snake.head.y < CANVAS_HEIGTH
            && !snake.headCollidesBody();
    }
    
    drawSnake(snake) {
        for (let part of snake.parts) {
            this.drawPixel(part.x, part.y, SNAKE_COLOR);
        }
    }

    drawFood(food) {
        this.drawPixel(food.x, food.y, FOOD_COLOR);
    }

    drawPixel(x, y, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect((x * PIXEL_SIZE) + 1, (y * PIXEL_SIZE) + 1, PIXEL_SIZE - 1, PIXEL_SIZE - 1)
    }

    randomX() {
        return Math.floor(Math.random() * CANVAS_WIDTH);
    }

    randomY() {
        return Math.floor(Math.random() * CANVAS_WIDTH);
    }

}

export {Screen, START_X, START_Y}