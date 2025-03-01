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
