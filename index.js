import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

// Code your solutions in this file
// const writeCards = ["Ada", "Brendan", "Ali"], "birthday";

function writeCards(arr, message){
    let new_Arr = [];
    for(let i = 0; i < arr.length; i++){
        new_Arr.push(`Thank you, ${arr[i]}, for the wonderful ${message} gift!`);
    }
    return new_Arr
}

function countdown(number){
     let i = number
     while (i >= 0){
         console.log(i)
         i--
     }
}
