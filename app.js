function reverseString(str) {
  let reverseString = '';
  for (let i = 0; i < str.length; ++i) {
    // This is how you loop through every character in a string
    console.log(str[i]);
    reverseString = str[i] + reverseString;
  }
  return reverseString;
}
console.log(reverseString("abc"));
// turning abc into "cba"