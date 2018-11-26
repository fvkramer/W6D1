// function sum() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }
//
// function sum(...args) {
//   let sum = 0;
//   args.forEach(el => {
//     sum += el;
//   });
//
//   return sum;
// }

let x = [1,2,3,4];
function sum() { return ((Array.from(arguments).reduce( (accumulator, currentValue) => accumulator + currentValue)));
}



Function.prototype.myBind = function (context, ...bindargs) {
  return (...callargs) => {
    this.apply(context, bindargs.concat(callargs));
  };
};


function curriedSum (numArgs) {
  let numbers = [];

  function _curriedSum (num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      let sum = 0;
      numbers.forEach(el => {
        sum += el;
      });
      return sum;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}



function test(args) {
  console.log(args);
  return args.reduce( (accumulator, currentValue) => accumulator + currentValue);
}

Function.prototype.curry = function(numArgs) {
  let numbers = [];
  let that = this;
  function _curriedSum (num) {
    numbers.push(num);
    // console.log(numbers);
    if (numbers.length === numArgs) {
      return that.apply(this, [numbers]);
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
};



Function.prototype.curry = function(numArgs, ...otherArgs) {
  let numbers = [];
  let that = this;
  function _curriedSum (...otherArgs) {
    if (numArgs >= otherArgs.length) {
      let sum = 0;
      for (var i = 0; i < numArgs; i++) {
        sum += otherArgs[i];
      }
      return sum;
    } else {
      return _curriedSum;
    }
  }
  return curriedSum;
};
