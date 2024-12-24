// While loop
const names = ["Justin", "Sarah", "Christopher"];

let index = 0;
while (index < name.length) {
  const name = names[index];
  console.log(name);
  index++;
}
// for loop
console.log("--For--");
for (let index = 0; index < names.length; index++) {
  const name = name[index];
  console.log(name);
}
// for of
console.log("--for of--");
for (let name of names) {
  console.log(name);
}
