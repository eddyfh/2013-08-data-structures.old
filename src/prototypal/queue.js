var Queue = function() {
  // Hey! Copy your code from src/functional-shared/queue.js and paste it here
  // Implement the methods below
  var queueobj = Object.create(outfunc);
  queueobj._storage =  {};
  queueobj._size = 0;
  queueobj._created = 0;
  return queueobj;
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

