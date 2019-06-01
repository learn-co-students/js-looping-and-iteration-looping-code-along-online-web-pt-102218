// Code your solutions in this file
function writeCards(array) {
  const retArr = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    retArr.push(`Thank you, ${element}, for the wonderful surprise gift!`)
  }
  return retArr
};

function countdown(num) {
  for (let index = num; index >= 0; index--) {
    console.log(index)
    
  }
}