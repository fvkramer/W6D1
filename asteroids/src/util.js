

// Function.prototype.inherits = function (parentClass) {
//   this.prototype = Object.create(parentClass.prototype);
//   this.prototype.constructor = this;
// };

const Util = {
  inherits(childClass, parentClass) {
    childClass.prototype = Object.create(parentClass.prototype);
    childClass.prototype.constructor = childClass;
  },

  randomVec(length) {
      const deg = 2 * Math.PI * Math.random();
      return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    },
    // Scale the length of a vector by the given amount.
    scale(vec, m) {
      return [vec[0] * m, vec[1] * m];
    },

  wrap(current, max) {
    if (current < 0) {
      return max + current;
    } else if (current > max) {
      return (0 + (current % max));
    } else {
      return current;
    }
  }
};


module.exports = Util;
