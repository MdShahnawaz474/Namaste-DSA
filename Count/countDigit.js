
function countDigit(num){
    let count = 0;
    while (num>0) {
        num = Math.floor(num / 10);
        count++
    }
    console.log(count);
    
}
let count = 1234512
countDigit(count)