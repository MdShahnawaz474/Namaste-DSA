// Que1

// Given two number a and b , find the greatest common divisor of a&b ,

// {Greatest common diviser ->GCD -> HCF-> Highest Common factor};



// ex: a=28
//     b=24


// factor of 28 -> 2*2*7;
// factor of 23-> 2*2*2*3;

// 2*2 = 4 ;Common factors;

// In this question we Want to detect a number that can divide both a and b;

// Among those multiple numbers we need to get the biggest number .

// can 2 divide both a and b : Yes;

// lets Check 

let a = 28;
let b =24

if(a%2===0 && b%2===0 ){
    // console.log("Yes 2 Divide both A and b"); //Let comment it 
}

// Yes 2 Divide both A and b

// it can be bigger than divide but its a potentiental answer ;

// lets check another one now check this with number of 3 because we need greatest number 


if(a%3===0 && b%3===0){
    // console.log("Yes A and be can divide by 3");
    
}else{
    // console.log("Yes A and be can not divide by 3");
}

// Output:- Yes A and be can not divide by 3

// Now we tried with number 4 

if(a%4===0&& b%4===0){
    // console.log("Yes A and be can divide by 4");  
}else{
    // console.log("Yes A and be can not divide by 3");
}

// Output:- Yes A and be can divide by 4 

// Final code : -


// Que1

// Given two number a and b , find the greatest common divisor of a&b ,

// {Greatest common diviser ->GCD -> HCF-> Highest Common factor};



// ex: a=28
//     b=24

function GCD  ( a,b){
    let ans = 1;
    for (let i = 2 ; i<=Math.min(a,b); i++){
        if(a%i==0 & b %i ==0){
            ans = i;
        }
    }
    return ans;
}

console.log( GCD(a,b));
