// Que 2:- Given a Value n(Positive Integer ), print the following patter on the screen;

// *
// **
// ***
// ****

// This problem is  a lot similar the task problem in the sense that , here also we have to repeat the task ;

let x = 3;

function rowStar(x) {
  for (let row = 1; row <= x; row++) {
    // Here the logic of the star
    // here we can do string concatination for the print star
    let str = "";
    for (let col = 1; col <= row; col++) {
      str += "*";
    }
    console.log(str);
  }
}

// rowStar(x);


// Practice 1:- 

let y =4
function rowStar1 (y){
    for (let row =1; row<=y ; row++){
        let str = "";

        for (let col =1 ; col <= row; col++){
            str += "*";
        }
        console.log(str);
    }
}

// rowStar1(y)


function printStar (z){
    for (let row = 1; row <= z; row++){
        let str = "";
        for (let col = 1; col <= row; col ++){
             str += "*";   
        }
        console.log(str);
    }
}

let z=4
printStar(z);