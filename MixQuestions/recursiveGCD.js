
// Find GCD (Greatest common divisior )

function recursiveGCD (a,b){
    if(b===0) return a;
    return recursiveGCD(b, a %b);
}

console.log(recursiveGCD(48,18));
