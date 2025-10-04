
const findTheCeiling= (arr, target)=>{
    let start =0;
    let end = arr.length -1;
    
    if (target > arr[arr.length-1]){
        return -1
    }
    while (start <= end){
        let mid = start + Math.floor((end-start)/2)
        if(target <arr[mid]){
            end  = mid-1;
        }else if(target > arr[mid]){
            start = mid +1;    
        }else{
            return mid;
        }
    }

    return [arr[start],start]
}

const arr = [1,3,4,5,12,14,42,54];

const result = findTheCeiling(arr,42)

console.log(result);


// function findTheCeiling2 (arr,target){
//     let start =0;
//     let end = arr.length-1;
//     if(target>){

//     }
//     while(start<= end){
    
//     }
// }