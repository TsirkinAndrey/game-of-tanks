import World from "./world";
import View from "./view";
import Game from "./game";
import levels from "./data/levels.js";

const canvas = document.querySelector('canvas');

const game = new Game({
    levels,
    world: new World(),
    view: new View(canvas)
});

console.log(game)