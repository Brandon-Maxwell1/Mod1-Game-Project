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
function headsTails(){
    const xxx = document.createElement("BUTTON");
    document.getElementById("buttonP2") = xxx;
    xxx.append

}

// Enter player1 and player2 name

