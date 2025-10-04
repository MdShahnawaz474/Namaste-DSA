/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let length = s.length;
  let halfLength = Math.floor( length / 2)

  for (let i=0; i < halfLength ; i++){
    temp = s[i];
    s[i]=s[length-1-i];
    s[length-1-i] =temp
  }

};