
const numberArray = [5,10,15,20,25,30,35,40];
let total =0 ;


//conventional way
for (let i=0 ; i < numberArray.length; i++ ){
    total = total + numberArray[i]
}
 
console.log(total);


//reduce 
const newArray = numberArray.reduce( (total,value) => total + value , 0)
console.log(newArray);

