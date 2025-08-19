let arr = [1, 2, 3, 4, 5];
// let k = k%arr.length;

// for (let j = 0; j <= k; j++) {
//   let copy = arr[0];

//   for (let i = 0; i <= arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }

//   arr[arr.length - 1] = copy;
// }

// console.log(arr);

//Try with diffrent algoritm where time complexity n;
// let arr = [1, 2, 3, 4, 5];
let temp = new Array(arr.length);
let k = 2;

k = k % arr.length;

for (let i = 0; i < arr.length; i++) {
    temp[(i + k) % arr.length] = arr[i];
}

console.log(temp);
//[ 4, 5, 1, 2, 3 ]
