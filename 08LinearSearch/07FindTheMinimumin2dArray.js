
const matrix = [
    [1,26,6,5],
    [32,12,123],
    [47,44,41]
]


const findMinValIn2d= (arr)=>{
    let minVal = arr[0][0];
    for (let i = 0;  i < arr.length ;  i++){
        for (let j = 0; j<arr[i].length; j++){
            if(arr[i][j]<minVal){
                minVal =arr[i][j];
            }
        }
    }
    return  minVal;
}

console.log(findMinValIn2d(matrix));
