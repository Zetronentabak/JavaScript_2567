let plusFive = (number) => {
  return number + 5;
};
// f is assigned the value of plusFive
let f = plusFive;

console.log(plusFive(3));
// Since f has a function value, it can be invoked
console.log(f(0)); //14
