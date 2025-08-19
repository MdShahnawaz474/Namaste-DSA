
// que  0,1,1,2,3,5,8,13,21.... 

// The abve series of numbers are called fibonacci numbers , given a value of n, write a code to print the direct n fibonacci numbers;

// ex : 6 output:- 0 1 1 2 3 5 8  

function printFibonacci (n){
    if(n===0){
        console.log(0);
        return;
    }

    if(n>=1){
        console.log(0);
        console.log(1);
    }

    let last= 1;
    let secondLast = 0 ;
    for (let i=2 ; i<=n; i++){
        let ans = last+ secondLast;
        console.log(ans);
        secondLast= last;
        last= ans;
    }
}

printFibonacci(5)
// 0
// 1
// 1
// 2
// 3
// 5


// Practice:

function printFibonacci1 (n){
    if(n===0){
        console.log(0);
        return;

    }
    if(n===1){
        console.log(1);
        return;
    }

    let last = 1;
    let secondLast = 0;
    for(let i =2; i<=n; i++){
        let ans = last+ secondLast;
        console.log(ans);
        secondLast = last;
        last= ans
    }
}

// printFibonacci1(12)

// 0
// 1
// 1
// 2
// 3
// 5
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
// 89
// 144


function printFibonacci2 (n){
    if(n===0){
        console.log(0);
        return;
    }
    if(n===1){
        console.log(1);
        return;
    }
 
    let last = 1;
    let secondLast =0;
    for(let i =2; i<=n ; i++){
     let ans = last + secondLast;
     console.log(ans);
     secondLast=last;
     last=ans
    }


}

printFibonacci2(4)