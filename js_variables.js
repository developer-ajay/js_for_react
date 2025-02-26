//variable keywords in JS
//var , let and const 

let numberOfMatches = 56 , favoriteTeam = "Rajasthan Royals";
console.log(numberOfMatches, favoriteTeam);

//let's change favorite team as "Mumbai Indians"
favoriteTeam = "Mumbai Indians";
console.log("favoriteTeam :", favoriteTeam);

//constant variables 
const MyBirthDay = "23-10-1997";
console.log(MyBirthDay);

//difference between ver,let and const

if (true){
    var var_variable  = 10;
    let let_variable  = 11; //let cannot be accessed outside this scope.
}
console.log(`Var variable : ${var_variable}`);


for (var j = 0; j < 3; j++) {
    console.log(j); // ✅ Accessible inside loop
}
console.log(j);

//function scope

function example(){
    var number = 35;
    console.log(number);
    
}

example();

// console.log(number); number cannot be accessed outside the function scope
//that is true for var,let and const

var example_var = 101;
var example_var = 100;
console.log(example_var);

//redeclaration and redefining var is possible 
//but this is not possible in let and const

let eg_let = 115;
eg_let = 116;
console.log(eg_let);
