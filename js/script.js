// ===DOM Entries===

// Enter player 1 and player 2 name and appears in input
function addPlayerName1() {
    const x = document.getElementById("nameEntry1").value;
    document.getElementById("player1Name").innerHTML = x;
    document.getElementById("nameEntry1").append
  }
function addPlayerName2() {
    const y = document.getElementById("nameEntry2").value;
    document.getElementById("player2Name").innerHTML = y;
    document.getElementById("nameEntry2").append
  }

// Make the player name box disable entry
function disableButton1() {
    const xx = document.getElementById("nameEntry1");
    const xy = document.getElementById("buttonP1");
    xx.disabled = true;
    xy.disabled = true;
  }

function disableButton2() {
    const yy = document.getElementById("nameEntry2");
    const yx = document.getElementById("buttonP2");
    yy.disabled = true;
    yx.disabled = true;
  }

// Heads/tails div appears once both players added
function showHeadsTailsButton() {
    const xxx = document.getElementById("headsTails-container");
    if (xxx.style.display === "none") {
      xxx.style.display = "none";
    } else {
      xxx.style.display = "flex";
    }
  }

//   Player1 select heads. ****Why isn't this working?****
document.getElementById("heads").addEventListener("click, pickHeads")
function pickHeads(){
    document.getElementById("choice1").innerHTML="HEADS";
    document.getElementById("choice2").innerHTML="TAILS";
}


//   Player1 select tails. ****Why isn't this working?****
document.getElementById("tails").addEventListener("click, pickTails")
function pickTails(){
    document.getElementById("choice1").innerHTML="TAILS";
    document.getElementById("choice2").innerHTML="HEADS";
}


// Flip coin div appears once heads/tails has been chosen
function showFlipCoin() {
    const yyy = document.getElementsByClassName("flipButton");
    when(choice1 && choice2 != undefined)
    if (yyy.style.display === "none") {
      yyy.style.display = "none";
    } else {
      yyy.style.display = "flex";
    }
  }

// Coin flip occurs
function flipCoin(){
    if(Math.random() < 0.50) {
        Tails;
    } else {
        Heads;
    }
}

// Determine the winner
function winnerIs(){
    if(document.getElementById("choice1") === true)
    return "Player1 wins the toss!!" 
    else{
        return "Player2 wins the toss!!"
    }
}



