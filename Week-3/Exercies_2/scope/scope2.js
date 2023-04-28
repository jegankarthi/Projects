var pet = "cat";
function myPet() {
  // message can only be used in logMessage
  var pet = "cat";
  console.log("My Pet");
  console.log(pet);
  return pet;
  }
 // This console log will cause an error
console.log(pet);