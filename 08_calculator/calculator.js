const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(array) {

  let total = 0;
  for (i = 0; i < array.length; i++) {
    total += array[i];
  }
  return parseInt(total);

};

const multiply = function(array) {
  product = array.reduce((a,b) => a * b);
  return product
};

const power = function(a,b) {
  return a ** b;
	
};

const factorial = function(n) {
	let array = []; 
  if (n == 0 || n == 1) return 1
  else { 
    for (i=0; i < n; i++) {
        array.push(n-i)
    }

    let result = array.reduce((a,b) => a*b);
    return result
  }
  };

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
