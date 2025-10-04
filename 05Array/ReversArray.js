 // Given an array , write an algorithm to reverse the same array .

 // Not you should not create a new array.

 // ex : [1,5,6,8,9,0,9,3]
//  Output :[3,9,0,9,8,6,5,1]


function reverseArray (arr){
    let left = 0;
    let right = arr.length -1;
     while(left< right){
        [arr[left], arr[right]]= [arr[right], arr[left]]
        left++
        right--
     }
     return arr
}

const arr = [1,5,6,8,9,0,9,3]

// console.log(reverseArray(arr));

// [3, 9, 0, 9, 8, 6, 5, 1]

//Another method:-

function swap(arr2, i , j){
    //Function swap the element 
    let temp =arr2[i];
    arr2[i] = arr2[j];
    arr2[j] = temp;
}

let arr2=  [1,5,6,8,9,0,9,3]
let i =0;
let j = arr2.length -  1;
while(i<=j){
    swap(arr2, i, j )
    i++ ;
    j--;

}

console.log(arr2);
// [
//     3, 9, 0, 9,
//     8, 6, 5, 1
//   ]