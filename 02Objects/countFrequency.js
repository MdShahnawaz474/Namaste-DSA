
// Given a string , try to print no of accurance of each unique character of a string

// Ex :- Javascript  

let str = "Javscript" ;
let freqMap={};
for(const character of str){
    if(freqMap[character]){
        //If present update it 
        freqMap[character] +=1; 
    }else{
        freqMap[character]=1;
    }
}

console.log(freqMap);

// { J: 1, a: 1, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }