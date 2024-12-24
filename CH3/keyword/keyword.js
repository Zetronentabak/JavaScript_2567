var name = "Fatema";

function fun() {
  // Some code here
  console.log(this.name);
}
const user = {
  name: "Marium",
  yearofBirth: 1999,
  calcAge: function () {
    const currentYear = new Data().getFullYear();
    return currentYear - this.yearofBirth;
  },
};

fun();          // this is global. logs 'Fatema'
user.calcAge(); // this is the  user Object
fun.call(user); // this is the user object. logs "Marium"
