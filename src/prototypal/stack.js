var Stack = function() {
  // Hey! Copy your code from src/functional-shared/stack.js and paste it here
  var stackobj = Object.create(thingy);
  stackobj['_size'] = 0;
  stackobj['_storage'] = {};
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
    this._storage[this._size] = value;
    this._size++;
  };

thingy.pop = function(){
    if (this._size > 0) this._size--;
    var results = this._storage[this._size];
    return results;
  };

thingy.size = function(){
    return this._size;
  };

