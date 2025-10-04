// Que = create a inverted stars like previous question

// ex
// _ _ _ _*
// _ _ _ **
// _ _ ***
// _ ****
// *****

function invertedPattern(n) {
  for (let row = 1; row <= n; row += 1) {
    let str = "";
    let spaces = n - row;

    for (let j = 1; j <= spaces; j += 1) {
      str += " ";
    }
    let stars = row;
    for (let col = 1; col <= stars; col += 1) {
      str += "*";
    }
    console.log(str);
  }
}

// invertedPattern(4)

// Inverted Patter Practice :-

function invertedPattern2(x) {
  for (let row = 1; row <= x; row++) {
    let str = "";
    let spaces = x - row;
    for (let j = 1; j <= spaces; j++) {
      str += " ";
    }
    let stars = row;
    for (let cols = 1; cols <= stars; cols++) {
      str += "*";
    }
    console.log(str);
  }
}

invertedPattern2(10);

// OutPut:-
//          *
//         **
//        ***
//       ****
//      *****
//     ******
//    *******
//   ********
//  *********
// **********

function invertedPattern3(x) {
  for (let row = 1; row <= x; row++) {
    let str = "";
    let spaces = x - row;
    for (let j = 1; j <= spaces; j++) {
      str += " ";
    }
    let stars = 2 * row - 1;
    for (let cols = 1; cols <= stars; cols++) {
      str += "*";
    }
    console.log(str);
  }
}

invertedPattern3(10);

// //       *
//         ***
//        *****
//       *******
//      *********
//     ***********
//    *************
//   ***************
//  *****************
// *******************