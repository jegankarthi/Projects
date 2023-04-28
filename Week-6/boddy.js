// This is a list of words
let words = ['Loops', 'are', 'a', 'great', 'way', 'to', 'find', 'elements', 'in', 'an', 'array'];
// TODO: implement this function to return a string containing all words in a paragraph.

function createParagraph(words) {
let paragraph = words.forEach(function(words){
        console.log(words);
});  
return paragraph;
}

let many = words.toString( );
console.log(many);

// Prints paragraph to console
console.log(createParagraph(words));

// don't change this line
if (typeof module !== 'undefined') {
module.exports = createParagraph;
}