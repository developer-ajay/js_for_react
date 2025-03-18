number = 10;

var UserName = "Ajay Joy"

console.log(UserName);

if (number = 10){
    console.log(UserName);
    UserName = "Imthiyaz";
    console.log(UserName);
    
}

//var is not Block scoped we can access it out of a block.

let myName = "Ajay let";
console.log(myName);


function noName (){
    var function_name = "noName";
    console.log(function_name);
    
}

noName();
//console.log(function_name); not possible

//var is function scoped we cannot acces it outside of a function.
//all are function scoped even let and const.


var noname ="alien";
var noname = "aliens";
console.log(noname);
//redeclaration is possible using var (which is not good!)


let let_noname ="let alien";
let_noname = "let aliens";
console.log(let_noname);
//redeclaration is not possible using let

