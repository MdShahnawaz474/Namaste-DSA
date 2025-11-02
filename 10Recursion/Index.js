
 function printnum() {
    // console.log("num is 2");
    // printnum();
    
}
printnum();

const fun = (num)=>{
    if(num ==0) return;
    console.log(num);
    num = num-1;
    fun(num)
} 

const a = 5;
// fun(a)

const printN =  (n)=>{
    if(n<1)return ;
    console.log(n);
    printN(--n);
    
}

// printN(10);
let n = 10
const print1toN = (x)=>{
    if(x>n)return;
    console.log(x);
    
    print1toN(++x);
    
}

print1toN(1)