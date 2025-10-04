const arr = [10,20,30,42,21,34,21,34]
let i =0;
let j = arr.length-1

while(i<j){
    let temp = arr[i];
    arr[i]= arr[j]
    arr[j]= temp
    i++
    j--

}

console.log(arr);
