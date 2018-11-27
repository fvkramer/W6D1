function MovingObject (options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
}



MovingObject.prototype.draw = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI
  );

  ctx.fill();
};



MovingObject.prototype.isCollideWith = function(otherObject) {
  let selfX = this.pos[0];
  let selfY = this.pos[1];
  let otherX = otherObject.pos[0];
  let otherY = otherObject.pos[1];

  let dist = Math.sqrt((otherX - selfX)*(otherX - selfX) + (selfY - otherY)*(selfY - otherY));
  if (dist <= this.radius * 2) {
    return true;
  }
};


MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  let res = this.game.wrap(this.pos);
  this.pos[0] = res[0];
  this.pos[1] = res[1];
};

module.exports = MovingObject;
