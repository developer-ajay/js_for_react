console.log("Filter Method");

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

//conventional way
const names_arry = [];
for(let i =0;i<globalObject.length ; i++){
    if (globalObject[i].name === "Ajay"){
        names_arry.push(globalObject[i].name)
    }
}
console.log(names_arry);

//filter method

const ajay_name = globalObject.filter( (value) => value.age === 27);
console.log(ajay_name);
const ajay_name1 = globalObject.filter( (value,index) => index);
console.log(ajay_name1);
const ajay_name2 = globalObject.filter( (value,index,array) => array);
console.log(ajay_name2);
