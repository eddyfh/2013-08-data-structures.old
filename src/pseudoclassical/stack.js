var Stack = function() {
  this._size = 0;
  this._storage = {};

};

Stack.prototype.push = function(value){
    this._storage[this._size] = value;
    this._size++;
  };

Stack.prototype.pop = function(){
    if (this._size > 0) this._size--;
    var results = this._storage[this._size];
    return results;
  };

Stack.prototype.size = function(){
    return this._size;
  };

