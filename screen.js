// Constants
const SNAKE_COLOR = "white"
const FOOD_COLOR = "red"
const CANVAS_BACKGROUND_COLOR = '#1A1A1A';
const PIXEL_SIZE = 20;
const CANVAS_PERCENTATGE = 0.8

class Screen {

    constructor(canvas) {
        this.canvas = canvas;

        const canvasWidth = this.calculateReducedSize(window.innerWidth);
        const canvasHeight = this.calculateReducedSize(window.innerHeight);

        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        this.canvasPixelWidth = canvasWidth / PIXEL_SIZE;
        this.canvasPixelHeight = canvasHeight / PIXEL_SIZE;

        this.ctx = canvas.getContext('2d');
    }

    calculateReducedSize(fullSize) {
        const actualSize = fullSize * CANVAS_PERCENTATGE;

        // Round it up to be divisible by pixel size
        return actualSize - (actualSize % PIXEL_SIZE)
    }

    clear() {
        this.ctx.fillStyle = CANVAS_BACKGROUND_COLOR;
        this.ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    canDraw(snake) {
        return snake.head.x >= 0
            && snake.head.y >= 0
            && snake.head.x < this.canvasPixelWidth
            && snake.head.y < this.canvasPixelHeight
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
        return Math.floor(Math.random() * this.canvasPixelWidth);
    }

    randomY() {
        return Math.floor(Math.random() * this.canvasPixelHeight);
    }

    get startX() {
        return Math.floor(this.canvasPixelWidth / 2) + 1;
    }

    get startY() {
        return Math.floor(this.canvasPixelHeight / 2) + 1;
    }

}

export {Screen}