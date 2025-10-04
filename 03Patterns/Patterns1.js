
// Given a value n(positive integer print the following patter on the screen);

// ex :- n = 4 

// Output should 4 star in horizentally and also veritically 


// #Observation 1: - i am assuming for green row, we print n * int row 

// #Observation 2:- here the element of repetition is task , we repeatedly do the same task in each row 

// So it mean i can use the loop 


// let n = 5

// for (let row =1; row <= n ; row  += 1){

//      let str = "";
//      for ( let col = 1; col <= n ; col += 1){
//         str += "*";
//      }

//     //  console.log(str);
     
// }


function Pattern (x){
    for ( let row = 1 ; row <= x ; row += 1){
        let str = "";
        for (let col = 1; col <= x; col += 1){
            str += "*";
    
        }
        console.log(str);   
    }
}
let x = 4;

Pattern(x)


