// que :- Given a number x , calculate the sum of digits of the no x

// ex 4136

// if we need the sum of digits of the no ,first of all need to extract the digit of no.

// let sum = 0;

function sumOfDigits(x) {
  while (x > 0) {
    let lastDigit = x % 10;
    sum += lastDigit;
    x = Math.floor(x / 10);
  }
  return sum;
}


// console.log(sumOfDigits(4136));


// Practice :- 

let sum = 0
 function sumOfDigits2(x){
    while(x>0){
        lastDigit = x %10;
        sum += lastDigit;
        x= Math.floor(x/10);
    }
    return sum;
 }
//  console.log(sumOfDigits2(7893));
 


 function sumOfDigits3(x){
    let sum = 0;
    while(x>0){
        lastDigit = x % 10;
        sum += lastDigit;
        x = parseInt(x/10);
    }
    return sum;
 }

//  console.log(sumOfDigits3(4136));



 

if (x !== y && a <= b) {
  const fn = x => x * 2;
}
