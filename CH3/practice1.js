let values1 = ["Apple", 1, false];
let values2 = ["Fires", 2, true];
let values3 = ["Mars", 9, "Apple"];

function getMatches(values1, values2, values3) {
  let matches = [];

  for (let i = 0; i < values1.length; i++) {
    for (let j = 0; j < values2.length; j++) {
      for (let k = 0; values3.length; k++) {
        if (values1[i] === values2[j]) matches.push(values1(i));
      }
    }
  }
  return matches;
}
console.log(getMatches(values1, values2, values3));
