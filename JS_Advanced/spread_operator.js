console.log("*******************Advanced JS********************");

//SPREAD OPERATOR

const globalPlayer = {
    name :"Ajay Joy",
    age : 27,
    playerLevel : 100
}

const player1 = {...globalPlayer};

player1.playerLevel = 50

console.log(player1);
console.log(globalPlayer)


const players1 = ["ajay","mufil","rameez"];
const players2 = ["imthiyaz","mohammed","fathima"];

const all_players = [...players1,"adzyn",...players2]

console.log(all_players);

//spreading an array
const numbers = [4,5,6]
const whole_numbers = [1,2,3,...numbers]
console.log(whole_numbers);

//copying an object/array
const languages = ["Java" , "Javascript"]
const copy_languages = [...languages]
console.log(copy_languages);


//spreading object
const personal_details = {
    name : "Dona Ajay",
    age : 26,
    place : "Kannur"
}
const new_updates ={
    ...personal_details , post : "Ulikkal"
}
console.log(new_updates)

//spreading strings
const greetings = "Hello World";
const greet_object = {...greetings}
const greet_array = [...greetings]
console.log(greet_array)
console.log(greet_object)
