const cat = {
  name: "Pipey",
  age: 8,
  whatname() {
    return this.name;
  },
};
console.log(cat.whatname());

cat.name = "Nexxar";
console.log(cat.whatname());
