function writeCards(namesList, eventName) {
  let messages = []
  for (let i = 0; i < namesList.length; i++) {
    messages.push(`Thank you, ${namesList[i]}, for the wonderful ${eventName} gift!`)
  }
  return messages
}


function countdown() {
  let i = 10;
  while (i >= 0) {
    console.log(i)
    i--
  }
}
