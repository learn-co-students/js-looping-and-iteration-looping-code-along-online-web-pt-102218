// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];
 
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
 
  return gifts;
}

let giftGivers = ["Lisa", "Kaitlin", "Jan"]
let event = 'surprise'
function writeCards(giftGivers, event) {
    let messages = [];
    for (let i = 0; i < giftGivers.length; i++) {
        messages.push(`Thank you, ${giftGivers[i]}, for the wonderful ${event} gift!`);
    };
    return messages;
}

function countdown(n) {
    while (n >= 0) {
        console.log(n);
        n--;
    }
}