let playerFirstName;
let playerMiddleName = null;
let playerLastName = null; 
console.log(playerFirstName);

let tShirtName = playerFirstName ?? playerMiddleName ?? playerLastName ?? "Please provide a name";
console.log(tShirtName);

let x = 0 ;

console.log(x || 10); //OR considers 0 as false ,hence 10 is showed.
console.log("" ?? 10); //nullish will take value even if it's 0 ,until it is "null" or "undefined".

console.log("" || "fallback");  // Output: "fallback" (because "" is falsy)
console.log("" ?? "fallback");  // Output: "" (because "" is NOT null or undefined)

console.log(0 || 100);  // Output: 100 (0 is falsy)
console.log(0 ?? 100);  // Output: 0 (0 is NOT null or undefined)

console.log(null || "fallback");  // Output: "fallback"
console.log(null ?? "fallback");  // Output: "fallback"

console.log(undefined || "fallback");  // Output: "fallback"
console.log(undefined ?? "fallback");  // Output: "fallback
