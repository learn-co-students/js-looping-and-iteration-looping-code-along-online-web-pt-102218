// Code your solutions in this file
function writeCards(names, evint){
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful ${evint} gift.`);
  }
 
  return names;
}

function countdown(num){
  while (num > -1) {
    console.log(num);
    num=num-1
  }
}