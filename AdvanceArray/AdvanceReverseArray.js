
// Given an array , write an algorithm to reverse the same array .
// You should not create a new array;

// Ex :- [5,9,1,8,2,3];
//Output : - [3,2,8,1,9,5];

function swaps (arr, i ,j){
    // function swaps the elements of the array at index i and j;
    let temp = arr[i];
    arr[i]= arr[j];
    arr[j]= temp;
}

const arr = [5,9,1,8,2,3];
let i = 0 // Starting index;
let j = arr.length-1; //last index

while (i<=j){
    swaps(arr,i,j);
    i+=1;
    j-=1
}


console.log(arr);
//[ 3, 2, 8, 1, 9, 5 ]