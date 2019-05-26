// Code your solutions in this file
function writeCards(people){
    let thanks = []
    for (let i=0; i<people.length; i++){
        thanks.push(`Thank you, ${people[i]}, for the wonderful surprise gift!`)
    }
    //
    return thanks
}

function countdown(n){
    
    while (n >= 0){
        console.log(n)
        n-=1
    }
}