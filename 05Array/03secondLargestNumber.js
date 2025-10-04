
function searchSecondLargestNumber (arr){
    if(arr.length<2){
        return null
    }
    let firstLargest =-Infinity;
    let secondLargest =-Infinity;
    for(let i =0; i<arr.length; i++){
        let num = arr[i]
        if(num>firstLargest){

            secondLargest= firstLargest;
            firstLargest=num
            
        }else if(num>secondLargest  && num != firstLargest){
            secondLargest= num
        }
    }
    return secondLargest;
}   

const arr=[1,82,12,3,4,2,1,22,34,82]
const secondLargestNum = searchSecondLargestNumber(arr)
console.log(secondLargestNum);
