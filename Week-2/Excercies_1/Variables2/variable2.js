//Instructions
// - Check the instructions in the summary file and calculate the current year
const day = new Date();
let currentYear = day.getFullYear();
//console log the result
console.log('current year result: ', currentYear); //should be the value of the currentYear variable
//don't change this line
if (typeof module !== 'undefined') {
  module.exports = currentYear;
}