var makeStack = function(){
  // Hey! Copy your code from src/functional/stack.js and paste it here
  //var storage = {}; // object holding index in keys and values in properties
  //var sizer = 0; // Hint: set an initial value here
  // Implement the methods below
  var stackobj = {
    _size: 0,
    _storage: {}
  };
  extend(stackobj, thingy);

  return stackobj;

};

var extend = function(to, from) {
    for (var key in from) {
      to[key] = from[key];
    }
};

thingy = {};

thingy.push = function(value){
    this._size++;
    this.storage[this._size] = value;
  };

thingy.pop = function(){
    var results = this._storage[this._size];
    if (this._size > 0) this._size--;
    return results;
  };

thingy.size = function(){
    return this._size;
  };
/*

_size and _storage need to be defined within stackobj since the methods push, pop
etc are not defined in the original scope where stackobj is

then, within each method, use this to refer to the object


*/