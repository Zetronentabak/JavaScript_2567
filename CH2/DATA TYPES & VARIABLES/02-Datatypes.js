const people = ["Aaron", "Mek", "John"];
const one = 1;
const str = "Hello World";
const b = true;
const employee = {
  firstName: "Anirach",
  lastName: "Mingkhwan",
};

function sayHellow(person) {
  console.log("Hello" + person.firstName);
}
console.log(typeof people);
console.log(typeof sayHellow);
console.log(employee instanceof Array);
sayHellow(employee);
