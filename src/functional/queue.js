var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};
  var created = 0;
  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  var queue = {};

  queue.enqueue = function(value){
    size++;
    created++;
    storage[created] = value;
  };

  queue.dequeue = function(){
    if (size > 0) {
      size--;
    }
    var results = storage[created - size];
    delete storage[created-size];
    return results;
  };

  queue.size = function(){
    return size;
  };

  return queue;
};


/*

{
  0: blah
  1: blabla
  2: thing
}
created: 3
size: 3
index: 2
remove two items, add two items

3, 4 added
0, 1 removed
created: 5
size: 3
index: 2
{
 2: thing
 3: thing3
 4: thing4
}

add 2, remove 1
{
  3: 
  4:
  5: thing5
  6: thing6
}
created: 7
size: 4
index: 3

size = 3 after
created = 5
next delete is on 2

2 ways
- reassign all the keys each time
- 


*/