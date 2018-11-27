const Asteroid = require("./asteroid");
const DEFAULTS = {
  DIM_X: 1500,
  DIM_Y: 1500,
  NUM_ASTEROIDS: 20
};

function Game () {
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function () {
  for (var i = 0; i < DEFAULTS.NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroid({ pos: this.randomPosition() }));
  }
};

Game.prototype.randomPosition = function () {
  return [(Math.random() * DEFAULTS.DIM_X), (Math.random() * DEFAULTS.DIM_Y)];
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, DEFAULTS.DIM_X, DEFAULTS.DIM_Y);
  this.asteroids.forEach (el => {
    el.draw(ctx);
  });
};

Game.prototype.moveObjects = function () {
  this.asteroids.forEach (el => {
    el.move();
  });
};


module.exports = Game;
