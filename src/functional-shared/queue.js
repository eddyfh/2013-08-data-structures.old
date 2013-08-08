var makeQueue = function(){

  // Implement the methods below
  var queueobj = {
    _storage: {},
    _size: 0,
    _created: 0
  };
  extendq(outfunc, queueobj);
  return queueobj;
};

var extendq = function(from, to) {
  for (var key in from) {
    to[key] = from[key];
  }
};

outfunc = {};

outfunc.enqueue = function(value){
    this._size++;
    this._created++;
    this._storage[this._created] = value;
  };

outfunc.dequeue = function(){
    if (this._size > 0) {
      this._size--;
    }
    var results = this._storage[this._created - this._size];
    delete this._storage[this._created-this._size];
    return results;
  };

outfunc.size = function(){
    return this._size;
};



