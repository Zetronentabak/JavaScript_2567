function createQuote(qute, callback) {
  let myQuote = "Like I always say, " + quote;
  callback(myQuote);
}
function logQuote(quote) {
  console.log(quote + "Yes..");
}
createQuote(" you will get better!", logQuote);
