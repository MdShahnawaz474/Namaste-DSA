
const findTheFloor = (arr,target)=>{
    let start =0;
    let end = arr.length -1;

    while (start <= end){
        let mid = start + Math.floor((end - start) / 2);
        if(arr[mid]> target){
         end = mid -1;
        }else if(arr[mid]<target){
            start = mid+1;
        }else{
            return mid;
        }
    }
    return end
}

let arr = [1,3,5,6,7,12,14,18];

const target  =3
const result = findTheFloor(arr,target);
console.log(result);
