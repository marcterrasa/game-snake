import {Game} from './game.js';

const canvas = document.getElementById('canvas');
start()

function start() {
    const game = new Game(canvas);
    game.start()
}




