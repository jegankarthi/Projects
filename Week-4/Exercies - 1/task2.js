//Instructions 
//Given an array of strings, words, return a string that has all the words concatenated together
// - spaces are needed in between words
// const array = ['how', 'are', 'you'];
//
//ex. ['how', 'are', 'you'] -> 'how are you'
function wordsToSentence(array) {
    //your code here
      console.log(`${array[0]} ${array[1]}`);

		}  
  //console log results
  console.log('results', wordsToSentence(['hey', 'there']));
  console.log('results', wordsToSentence(['Good', 'Morning']));

  
  
  //don't change this line
  if (typeof module !== 'undefined') {
    module.exports = {
      wordsToSentence,
    };
  }
  