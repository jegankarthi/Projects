let Bike = [`Sport`, `Hunk`, `CT-110`, 'Apache']
let Car = ['Audi', `Benz`, `TATA-Venture`]

let combinedArray = [];


function arrayFlattener(){

  combinedArray.push(...Bike, ...Car)
  
  return console.log(combinedArray)

}

console.log(arrayFlattener());

