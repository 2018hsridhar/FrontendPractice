/*
ArrayMethods.js
Add new properties/methods to our array
Array is a JS object
no mutate original array -> create new array
callback = param passed to a function

Map-Filter-Reduce

Prototype : `this` access based :-)

20 minutes spent :-)
*/
Array.prototype.myMap = function (callback) {
  let newArr = Array(this.length);// constructor notation
  // push method generic : `this` with .length property
  for(let i = 0; i < this.length; i++) {
    newArr[i] = callback(this[i],i,this);
  }  
  return newArr;
};

Array.prototype.myFilter = function (callback) {
  let filterArr = [];
  // literal notation
  // push method generic : `this` with .length property
  for(let i = 0; i < this.length; i++) {
    // gaah truth values and == vs === here. RTake note
    if(callback(this[i],i,this) === true) {
      // console.log("Passed at" + this[i]);
      filterArr.push(this[i]);
    }
  }  
  return filterArr;
};

// Return last call to callback
// Does not return a new array
Array.prototype.myReduce = function (callback, initialValue) {
  if(this == null || this.length == 0) {
    return initialValue;
  }
  // newArr = new Array(); // constructor notation : no `new` keyword
  let i = 0;
  let accumulator = 0;
  if(initialValue == null) { // null == undefined : if (variable === undefined || variable === null) {
    accumulator = this[0];
    i++; // second element call direct
  }
  while(i < this.length) {
    let localCallback = callback(accumulator,this[i],i,this);
    accumulator = localCallback;
    i++;  
  }
    lastCallback = accumulator;
  return lastCallback;
};  
