
// Euclid's Algorith 

// We need to calculate GCD(Greatest Common diviser) of a, b;

// Let We divide 33 with 5 ;

// 33 = 5 * 6 + 3 

// if we divide a with b , such that q is the queient and r is the reminder 

// if we divide a/b 

// Can we say a = b * q + r  //Eqution 1;
// a=33 = b:5 * q:6 + r:3 

// we can write it also 

// a - b * q = r  
// 33 -5*6 = 3

// if  G is the GCD (greatest common diviser) of a and b

// then  it should a/g===0 and b/g===0


// final code : - 

function GCD ( a, b){
    while(b !== 0){
        let r = a%b;
        a = b;
        b=r;
    }
    return a;
}

// console.log(GCD(18,9));

// LCM(a, b) * GCD(a, b) = a * b


function greatestCommon (a,b){
    while (b !== 0 ){
        let r = a%b
        a= b;
        b=r;

    }
    return a;

}

function LCM  (a,b){
    return (a*b )/ greatestCommon(a,b);
}

// console.log(LCM(12,18));





