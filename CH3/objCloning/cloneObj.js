const obj1 = {
  persion: "Voraphol",
  weight: 52
}

// const obj2 = obj1;
// const obj2 = object,assign({},obj1);
const obj2 = { ...obj1 };
obj2.weight = 75;
console.log(obj1);
console.log(obj2);
