

function searchElement(arr,x){
    for(let i =0; i <= arr.length ;i++){
        if(arr[i]==x){
            return i;
        }
    }
    return -1; 
}

let arr =[1,2,3,4,5,5,2];

// console.log(searchElement(arr,5));

function searchElement2 (arr2,x){
    for(let i =0; i<=arr.length;i++){
        if(arr2[i]==x){
            return i;
        }
    }
    return false;
}

const arr2 =[1,3,2,4,5,6,33,21];

// console.log(searchElement2(arr2,34));

const searchElement3= (arrays,y)=>{
    for(let i =0; i<=arrays.length;i++){
        if(arrays[i]==y){
            return i;
        }
    }
    return -1
}

let newArr = [1,3,4,2,5,7,87,8,53];

console.log(searchElement3(newArr,20));