
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

//conventional for loop
for ( i=0 ; i<globalObject.length ; i++) {
    console.log(globalObject[i].name)
}

globalObject.forEach( (value,index ,array) => console.log(value.name) );

//foreach don't return anything 
//also it takes 3 parameters 
//value , index and array itslef

globalObject.forEach( (value,index ,array) => console.log(index) );

globalObject.forEach( (value,index ,array) => console.log(array) );

