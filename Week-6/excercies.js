const person = [{Name: "Mohandas Karamchand Gandhi", salary: '17200'},
                {Name: "Jawaharlal Nehru", salary: '19200'},
                {Name: "Subhas Chandra Bose", salary: '35000'}];

let salaries = 0;
function add (item, counter, array){
    salaries += Number(item.salary);
}

person.forEach(add);
console.log(salaries);