var Queue = function() {
  // Hey! Copy your code from src/prototypal/queue.js and paste it here
  this._storage =  {};
  this._size = 0;
  this._created = 0;
};

Queue.prototype.enqueue = function(value){
    this._size++;
    this._created++;
    this._storage[this._created] = value;
  };

Queue.prototype.dequeue = function(){
    if (this._size > 0) {
      this._size--;
    }
    var results = this._storage[this._created - this._size];
    delete this._storage[this._created-this._size];
    return results;
  };

Queue.prototype.size = function(){
    return this._size;
};

