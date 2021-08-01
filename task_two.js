//// Q2
const mathMap = new Map();

// a
mathMap.set("division", (a, b) => {
  const dividend = Math.max(a, b);
  const divisor = Math.min(a, b);
  return dividend ? dividend / divisor : "Dividend can NOT be zero.";
});

const divide = mathMap.get('division');
console.log(divide(3, 15));


// b
mathMap.set("addition", (array) => {
  return array.reduce((accumulation, current) => accumulation + current, 0);
});

const sum = mathMap.get('addition');
console.log(sum([2,5,2,8]));


// c
mathMap.set("subtraction", (array) => {
  result = array[0];
  for (let i = 1; i < array.length; i++) {
    result -= array[i];
  }
  return result;
});

const subtract = mathMap.get('subtraction');
console.log(subtract([ 3,8,6,7,25,1 ]));


// d
mathMap.set("multiplication", (array) => {
  return array.reduce((accumulation, current) => accumulation * current, 1);
});

const multiply = mathMap.get('multiplication');
console.log(multiply([ 2, 5, 3]));