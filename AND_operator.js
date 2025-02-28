let investors = true;
let advertisment = true;
let audience = true;

let match_ready = investors && advertisment && audience ;

console.log(match_ready ? "Match is ON" : "Match is OFF");
console.log("Value Of Final Decision",match_ready);

