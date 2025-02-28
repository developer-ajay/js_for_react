let playerFirstName;
let playerMiddleName = null;
let playerLastName = null;

let tShirtName = playerFirstName ?? playerMiddleName ?? playerLastName ?? "Please provide a name";
console.log(tShirtName);

let x = 0 ;

console.log(x || 10); //OR considers 0 as false ,hence 10 is showed.
console.log(x ?? 10); //nullish will take value even if it's 0 ,until it is "null" or "undefined".

