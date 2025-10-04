//DNF Algorithm :-
// que Given an array which only contains 0 & 1, the data is shuffled randomly .

// Write a function that can rearrange the data such that all the 0's are present before 1;

// ex [0,1,0,1,0,0,0,0,1,0,]  Don't create new array
// Output should : - [0,0,0,0,0,0,0,0,1,1,1]

// Condition :- do the arrangements , by ready accesess the whole array only once (single pass).

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function separate(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    if (arr[i] == 1) {
      swap(arr, i, j);
      j--;
    } else {
      i++;
    }
  }
}

let arr = [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1];
separate(arr);
console.log(arr);
