console.log("Map method");

const globalObject = [
    {
        name :"Ajay",
        age : 27,
        place : "Kannur"
    },
    {
        name :"Rahul",
        age : 26,
        place : "Kannur"
    },
    {
        name :"John",
        age : 27,
        place : "Kochi"
    }
]

//conventional method

const names_array = [];

for (let i =0 ; i<globalObject.length ; i++){
    names_array.push(globalObject[i].name)
}

console.log(names_array);

//map method
const all_names = globalObject.map ( value => value.name )
console.log(all_names);
const all_names1 = globalObject.map ( (value,index) => index )
console.log(all_names1);
const all_names2 = globalObject.map ( (value,index,array) => array )
console.log(all_names2);
