function writeCards(name, message){
    let cards = [];
    for(let i = 0; i < name.length; i++){
        cards.push(`Thank you, ${name[i]}, for the wonderful ${message} gift!`);
    }
    return cards
}

function countdown(number){
     let i = number
     while (i >= 0){
         console.log(i)
         i--
     }
}