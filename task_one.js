const data = [ "a", 10, "b", "hola", 122, 15, 985, "hello", 0, 500, true, {} ];

// a
// Returns an array containing only strings, from given array
const getLetters = (array) => array.filter((element) => typeof element === "string");

// b
// Returns an array containing only numbers, from given array
const getNumbers = (array) => array.filter((element) => typeof element === "number");

// c
// Returns the highest number from given array
const getHighestNumber = (array) => {
  let number = 0;
  for (let element of array) {
    if (typeof element === "number" && element > number) number = element;
  }
  return number;
};

getLetters(data);
getNumbers(data);
getHighestNumber(data);