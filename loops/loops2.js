// write a function that returns the number of negative numbers  in an array


const countNegative = (arr)=>{
    let count = 0;
    for(let i =0; i<=arr.length;i++){
        if(arr[i]<0){
            count= count+1
        }
    }
    return count;
}

let arr = [1,2,3,4,-2,-4,-4,-1,-9]; //return 5;

// let arr= [1,3,5,6,7,8,5] return 0

// countNegative(arr)
const res = countNegative(arr);
// console.log(res);


//revision of search element;

function searchElement (arr,x){
    for(let i =0; i<=arr.length;i++){
        if(arr[i]==x){
            return i
        }
        
    }
    return -1;
}

// console.log(searchElement(arr,4));
