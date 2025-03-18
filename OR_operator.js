let playerFirstName,
playerMiddleName = "",
playerLastName = "";
let tShirtDisplayName;

tShirtDisplayName = playerFirstName || playerMiddleName || playerLastName || console.log("No name is given by the team");
console.log(tShirtDisplayName);


let advertisers = true ; 
let audience = false ;

let finalDecision = advertisers || audience ;

console.log(finalDecision ? "Yes, Match is on" : "No, Match is aborted");

