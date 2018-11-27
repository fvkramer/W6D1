// const Game = require('./game.js');

function GameView (ctx, game) {
  // setInterval()
  this.ctx = ctx;
  this.game = game;
}

GameView.prototype.start = function() {
  let ctx = this.ctx;
  let game = this.game;

  setInterval( this.startCalls.bind(this), 20);


  // let ctx = this.ctx;
  // let game = this.game;
  // console.log(game);
  // setInterval( (ctx.bind(this), game.bind(this)) => {
  //   console.log(game);
  //   game.moveObjects();
  //   game.draw(ctx);
  // }, 20);
};

GameView.prototype.startCalls = function() {
  this.game.moveObjects();
  this.game.draw(this.ctx);
};



// Your GameView class will be responsible for keeping track of the canvas context, the game, and the ship. Your GameView will be in charge of setting an interval to animate your game. In addition, it will eventually bind key handlers to the ship so that we can move it around.
//
// Define an GameView class in src/game_view.js. The GameView should store a Game and take in and store a drawing ctx.
//
// Write a GameView.prototype.start method. It should call setInterval to call Game.prototype.moveObjects and Game.prototype.draw once every 20ms or so.

module.exports = GameView;
