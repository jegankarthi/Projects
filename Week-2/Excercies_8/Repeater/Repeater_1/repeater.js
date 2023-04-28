//Write a function here to display "Hello World" on the console
counter = 0;

function myfunction(){
  counter++;
  console.log("Hello World " + counter);
}
//Write another function here that will delay the execution of the 1st function by 3 seconds
setInterval(myfunction, 3000);