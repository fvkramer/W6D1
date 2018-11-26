function Surrogate () {}
Surrogate.prototype = BigDaddy.prototype;
Filipp.prototype = new Surrogate();
Filipp.prototype.constructor = Filipp;


Function.prototype.inherits = function(DaddyClass) {
  function Surrogate () {}
  Surrogate.prototype = DaddyClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};



Function.prototype.inherits = function(DaddyClass) {
  this.prototype = Object.create(DaddyClass.prototype);
  this.prototype.constructor = this;
};
