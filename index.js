// Code your solutions in this file
const names = ['Lisa', 'Kaitlin', 'Jan'];
let event = 'surprise';
const greeting = [];

function writeCards(names, event) {
  for (let i = 0; i < names.length; i++) {

    greeting.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    
  }
  return greeting;
}


let count;


function countdown(count) {

  while (count >= 0) {
    console.log(count);
    count--;
  }
}

console.log(countdown(11))
