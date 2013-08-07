var makeStack = function(){
  // Hey! Copy your code from src/functional/stack.js and paste it here
  var storage = {};
  var size = 0; // Hint: set an initial value here
  // Implement the methods below
  var stack = {
  };
  extend(stack, thingy);

  return stack;

};

var extend = function(to, from) {
    for (var key in from) {
      to[key] = from[key];
    }
};

thingy = {};

thingy.push = function(value){
    this.size++;
    this.storage[size] = value;
  };

thingy.pop = function(){
    var results = this.storage[this.size];
    if (this.size > 0) this.size--;
    return results;
  };

thingy.size = function(){
    return this.size;
  };

var tester = function() {
  var a = 0;
  var b = 2;
};
tester();