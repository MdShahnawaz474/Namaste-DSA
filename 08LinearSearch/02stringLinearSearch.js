// A simple function to search for a character in a string.
const search = (str, target) => {
  // If the string is empty, return false.
  if (str.length === 0) {
    return false;
  }

  // Loop through each character of the string.
  // The for...of loop is a clean way to do this.
  for (const char of str) {
    // If the current character matches the target, return true.
    if (char === target) {
      return true;
    }
  }

  // If the loop completes without finding a match, return false.
  return false;
};

// Main part of the program
const name = "Kunal";
const target = 'u';

// Call the search function and print the result.
console.log(search(name, target));