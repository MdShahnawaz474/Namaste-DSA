
var peakIndexInMountainArray = function(arr) {
    let start =0;
    let end = arr.length -1;

    while (start<end){
        let mid = start + Math.floor((end-start)/2)
        if(arr[mid]>arr[mid+1]){
            // you are in dec part of array
            //this may be the answer , but look at left
            //this is why end is not mid -1
            end = mid ;
        }else{
            start = mid+1; //because we know that mid +1 element >mid element 

        }
    }
    return start; //in the end , start == end and pointing to the largest number because of the 2 checks above
}