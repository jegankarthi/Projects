const compareCities = (a, b) => {
  if (a.length !== b.length) return false;
  else {
    return true;
  }
};

let city1 = "bombay";
let city2 = "bombay";

console.log(compareCities(city1, city2)); 

const returnNumber = function(num){return num + 1;}
const myNum = 13;
const returnedValue = returnNumber(myNum)

console.log(myNum);