
function myFunction(age,name = "Default Name"){
    let myName = name;
    let myAge = age;
    console.log(`Hello World, Myname is ${myName} and MyAge is ${myAge}`);
    
}

myFunction(27);

let anony_func =function () {
    console.log("Anonymous Function"); 
}

anony_func();

let arrow_func = () => console.log("This is arrow function");

arrow_func();
