
function searchSmallestNumber (arr){
    let smallestNumber = arr[0]
    for(let i=0 ; i<arr.length; i++ ){
        if(arr[i]<smallestNumber){
            smallestNumber= arr[i];
        }

    }
    return smallestNumber;

}
let arr=[1,2,4,-19,-89];

const smallestNumber = searchSmallestNumber(arr);
// console.log(smallestNumber);

//using built-in JS
const smallestNum = Math.min(...arr);
// console.log(smallestNum);


function searchSmallestNumber2(arr){
    let smallestNum = arr[0];
    for(let i =0; i<arr.length; i++){
        if(arr[i]<smallestNum){
            smallestNum=arr[i];
        }
    }
    return smallestNum;
}   

const res= searchSmallestNumber2(arr)
console.log(res);
