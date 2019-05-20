// Code your solutions in this file
function writeCards(names, event) {
    let out = []
    for (let i = 0; i<names.length; i++) {
        out.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return out
}

function countdown(number) {
    while (number >= 0) {
        console.log(number)
        number--;
    }
}