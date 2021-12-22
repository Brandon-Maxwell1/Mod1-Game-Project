// ===DOM Entries===


// Player 1 choose heads or tail

function addPlayerName1(){
    let input = document.getElementById('nameEntry')
    let div = document.getElementById('player1Name')    
    div.innerHTML = div.innerHTML + input.value;
    }

function addPlayerName2(){
    let input = document.getElementById('nameEntry')
    let div = document.getElementById('player2Name')
    div.innerHTML = div.innerHTML + input.value;
}


function choose(){
let heads = 1
let tails = 2
let randNum = Math.round((Math.random() * (2 - 1)) + 1)

if(p1 === heads && randNum === 1)
console.log('HEADS: p1 wins')
else{
    console.log('TAILS: p2 wins')
}
}