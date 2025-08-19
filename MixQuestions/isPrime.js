
// A prime number is only divisible by 1 and itself
function isPrime (n){
    if(n <= 1) return false;
    for (let i =2 ; i*i  <=n;  i++){
     if( n % i ===0) return false;

    }
    return true;
}

console.log(isPrime(17));
console.log(isPrime(18));
