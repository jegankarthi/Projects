// Step 1: use slice to find elements in an array
function sliceElements(givenArray) {
    //TODO: return last 3 elements of givenArray
    let E = givenArray.slice(2);
    return E;
}
console.log(sliceElements([1, 2, 3, 4, 5]));

// Step 2: use splice to find elements in an array
function spliceElements(givenArray, element1, element2) {
    //TODO: remove the last element of givenArray and add
    let E = givenArray.splice(4, 1, element1, element2);
    return E;
}

console.log(spliceElements([1, 2, 3, 4, 5], 6, 7));

// Step 3: use splice to find elements in an array
function splitElements(givenString) {
    let E = givenString.split(" ");
    return E;
}
console.log(splitElements("Hello World"));

//Uncomment these line to see results for step 1
console.log(sliceElements([1, 2, "MIT Certificate", 4, 5]));

// should return ["MIT Certificate", 4, 5]
console.log(sliceElements([1, 2, [3, 4], "JavaScript"]));
// should return [2, [3, 4], "JavaScript"]

//Uncomment these line to see results for Step 2
var arr = [1, 2, "MIT Certificate", 4, 5];

console.log(spliceElements(arr, "JavaScript", 101));
// should return [1, 2, "MIT Certificate", 4, "JavaScript", 101]

//Uncomment these line to see results for Step 3
var str = "MIT Certificate loves JavaScript";

console.log(splitElements(str));
// should return ["MIT", "Certificate", "loves", "JavaScript"]

//don't change this line
if (typeof module !== 'undefined') {
    module.exports = { sliceElements, spliceElements, splitElements };
}