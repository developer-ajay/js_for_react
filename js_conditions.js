let is_rain_today = true;
let is_match_today;

if (!is_rain_today){
  is_match_today = true
}
else {
    is_match_today = false
}
console.log(`match is ${is_match_today}`);

//ternary operator
let match_status = is_rain_today ? "Match is on" : "Match os off"

console.log(match_status);
