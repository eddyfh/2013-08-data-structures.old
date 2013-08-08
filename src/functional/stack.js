var makeStack = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  var stack = {};

  stack.push = function(value){
    storage[size] = value;
    size++;
  };

  stack.pop = function(){
    if (size > 0) size--;
    var results = storage[size];
    return results;
  };

  stack.size = function(){
    return size;
  };

  return stack;
};
