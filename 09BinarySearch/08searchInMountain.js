

function search (arr,target){
    let peak = peakIndexInMountainArray(arr);
    let firstTry = orderAgnosticBS(arr, target,0,peak);
    if(firstTry!= -1){
        return firstTry;
    }
    
    return orderAgnosticBS(arr,target,peak+1, arr.length-1)
}


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

function orderAgnosticBS(arr, target, start, end) {
    // determine if array is ascending or descending
    let isAsc = arr[start] < arr[end];

    while (start <= end) {
        // find the middle element
        let mid = start + Math.floor((end - start) / 2);

        if (arr[mid] === target) {
            return mid; // found target
        }

        if (isAsc) {
            // ascending order
            if (target < arr[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            // descending order
            if (target > arr[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }

    return -1; // not found
}
