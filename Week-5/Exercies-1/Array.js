// Push() 
const a = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thushday", "Friday"];

console.log(a);

a.push("Satureday day");

console.log("Push Function: ", a);

// pop()

const B = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thushday", "Friday"];

let b = B.pop();


console.log("pop function: ", b);

//slice()

const C = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thushday", "Friday"];

let c = C.slice(0, 2);

console.log("slice function: ", c);

// splice()

const D = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thushday", "Friday"];

let d = D.splice(0, 3);


console.log("splice function: ", d);

//split()

const E = "Sunday Monday Tuesday Wednesday Thushday Friday";

let s = E.length;

console.log(s);

let e = E.split(" ");

console.log("split function: ", e);

// Indexof

const F = "Sunday Monday Tuesday Wednesday Thushday Friday";

let f = F.indexOf("y")

console.log("Indexof function on y place: ", f);

// uppercase

const G = "Sunday Monday Tuesday Wednesday Thushday Friday";

let g = G.toLocaleUpperCase();

console.log("Touppercase function: ", g);


function name() {
    let firstName = 'Steve';
    let lastName = 'Miller';
    console.log(firstName);
    console.log(lastName);
    }

    name();