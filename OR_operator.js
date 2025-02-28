let playerFirstName = "",
playerMiddleName = "",
playerLastName = "";
let tShirtDisplayName;

tShirtDisplayName = playerFirstName || playerMiddleName || playerLastName || "Unknown" ;
console.log(tShirtDisplayName);


let advertisers = true ;
let audience = false ;

let finalDecision = advertisers || audience ;

console.log(finalDecision ? "Yes, Match is on" : "No, Match is aborted");

