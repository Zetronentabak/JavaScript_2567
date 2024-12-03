let num1 = "150";
let num2 = "15.0";

console.log("************Converting strings to integets************");
// Conversion strings to integers
console.log(parseInt("100"));
console.log(parseInt(num1));
console.log(parseInt("ABC"));
console.log(parseInt("0xFF"));

console.log("\n************Converting strings to floats************");
// Conversion strings to floats
console.log(parseFloat("1.25abc"));
console.log(parseFloat("flo1"));
console.log(parseFloat("ABC"));

console.log("\n************More Conversion Examples************");
// More Conversion Examples
// Numbers after specials characters are ignored
console.log(parseInt('1.5'));
console.log(parseInt('1 + 1'));

// Using Template Literals
console.log(parseInt('${1 + 1'));

console.log("************Converting numbers to strings************");
// Conversion numbers to strings
console.log(num1.toString());
console.log(flo1.toString());
console.log((100).toString());

