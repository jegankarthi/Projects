/*
Instructions

Create a conditional that checks if you're old enough to vote.
- isOldEnoughToVote(age)
- response will store true or false values
*/
const age = 20;
let response = true;

// Add your code here
function isOldEnoughToVote(age) {
  //your code goes here
  if(age >= 18) 
  {
    if(response === true)
    result = `You are major`
    else
    result = `You are minor!`
  }else {
    result = `You are not eligible to vote`; 
    }
    return result;

  // return true or false based on the age
  
}

//open the browser console to check results
console.log('results: ', isOldEnoughToVote(18));
// Don't edit the code below here
if (typeof module !== 'undefined') {
  module.exports = isOldEnoughToVote;
}