
function pattern(n){
    for(let row = 1; row<=n ; row++){
        let str = "";
        let spaces = row-1;
        for(let i =1; i<=spaces; i++){
            str+=" ";

        }
        let num = row;
        while(num <= n){
            str+= num+" ";
            num++;

        }
        console.log(str);
        
    }

    //Lower Part
    for(let row = 1; row<=n-1; row++){
        let str = "";
        let spaces = n-row-1;
        for(let i= 1; i<= spaces; i++){
            str+=" "
        }
        let num = n-row ;
        while(num <= n){
            str +=num+ " ";
            num++
        }
        console.log(str);
        
    }
}

pattern(7)

//Output :- 
 
// 1 2 3 4 5 6 7 
//  2 3 4 5 6 7 
//   3 4 5 6 7 
//    4 5 6 7 
//     5 6 7 
//      6 7 
//       7 
//      6 7 
//     5 6 7 
//    4 5 6 7 
//   3 4 5 6 7 
//  2 3 4 5 6 7 
// 1 2 3 4 5 6 7 