//REST OPERATOR

//function parameter
function sum(...numbers){
    return numbers.reduce( (acc,num) => acc+num , 0);
}

console.log(sum(1,2,3,4,5));

//Array destructuring
const [first , second , ...rest] = [100,200,300,400,500];
console.log(first);
console.log(second);
console.log(...rest);

//Object destructuring
const {names , place , ...rest_details} = {
    names :"Dona Ajay",
    place : "Kannur",
    post : "Ulikkal",
    country : "India"
}
console.log(names);
console.log(place);
console.log(rest_details);
