function calculator(firstNumber, operator, secondNumber){
  if(operator == `+`){
    var result = firstNumber + secondNumber
    return result;
  }
  else if(operator == `-`){
    var result = firstNumber - secondNumber
    return result;}
  else if(operator == `*`){
    var result = firstNumber * secondNumber
    return result;
  }
  else if(operator == `/`){
    var result = firstNumber / secondNumber
    return result
  }
  else {
    return 0;
  }
  }


  console.log(calculator(2, '+', 2))
  console.log(calculator(3, '-', 2))
  console.log(calculator(4, '*', 2))
  console.log(calculator(20, '/', 2))
  console.log(calculator(8, '/', 0))

//  calculator(2, '+', 2) // results 4
//calculator(3, '-', 2) // results 1
//calculator(4, '*', 2) // results 8
//calculator(20, '/', 2) // results 10
//Be aware of the case when the divided by zero, it should be `Infinity`
// calculator(8, '/', 0) // results Infinity