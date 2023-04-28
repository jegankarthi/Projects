var pet = "animal";
function yourPet() {
  // message can only be used in logMessage
  var pet = "rabbit";
  console.log("your Pet");
  console.log(pet);
  return;
  }
 // This console log will cause an error
 console.log(pet);