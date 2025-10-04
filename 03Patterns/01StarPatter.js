function printStarfunc(x){
    for(let i =0; i<x;i++){
        // console.log("*");
        let stars= ""
        for(let j =0 ;j<x;j++ ){
            stars+="*"
        }
        console.log(stars);
        
    }
}
printStarfunc(3);

// ***
// ***
// ***

function printStarfunc (x){
    for(let i =0; i<=x; i++){
        let stars =""
        for(let j = 0 ; j<i; j++){
            stars +="*"
        }
        console.log(stars);
        
    }
}
printStarfunc(3)
// *
// **
// ***