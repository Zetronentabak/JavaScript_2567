const status_ = 500;

if (status_ === 200) {
  console.log('The request was successful');
} else if (status_ === 400 || status_ === 500) {
  console.log('Error!');
} else {
  console.log('An unknown error occurred');
}
