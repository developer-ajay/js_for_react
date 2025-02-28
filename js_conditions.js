let is_raining_today = false;
let is_match_today;

if (is_raining_today){
     
    is_match_today = "No, There is no match today!";
}
else {
    is_match_today = "Yes, There is match today!"; 
}

console.log(is_match_today);


//ternary operator
is_match_today = is_raining_today ? "No, There is no match today!" : "Yes, There is match today!";
console.log(is_match_today);
