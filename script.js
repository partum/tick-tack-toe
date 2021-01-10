var move = 'O'
var choice = '#FF858D'
var xMoves = ""
var oMoves = []
var won = false
const winCombos = [
    "012",
    "345",
    "678",
    "036",
    "147",
    "258",
    "048",
    "246"
]
const cells = document.querySelectorAll('.cells')
for (i=0; i<9; i++){
    document.getElementById(i).addEventListener("click", displayMove);
}
setTimeout(newH1, 4000)
var origBoard = Array.from(Array(9).keys());
console.log(origBoard)

function whoseTurn(){
    if (move == 'O'){
        move = 'X';
        choice = '#ff9fe5';
    }
    else if(move == 'X'){
        move = 'O';
        choice = '#FF858D';
    }  
}
function displayMove(){
    var node = document.createTextNode(move);
    document.getElementById(this.id).style.color = choice;
    document.getElementById(this.id).appendChild(node)
    recordMoves(this.id);
    whoseTurn();
    newH1(won);
    document.getElementById(this.id).removeEventListener("click", displayMove);
}
function newH1(won){
    document.getElementById("guide").innerHTML = "It's " + move + "'s turn";
    if (won == true){
        whoseTurn();
        document.getElementById("guide").innerHTML = move + " won!";
        shutItDown();
    }
}
function recordMoves(theID){
    // if (move == 'O'){
    //     oMoves = oMoves + theID;
    // }
    // else if (move == 'X'){
    //     xMoves = xMoves + theID;
    // }
    origBoard[theID] = move;
    console.log(origBoard);
    if (winCombos.includes(xMoves) || winCombos.includes(oMoves)){
        won = true;
    }    
}
function shutItDown(){
    for (i=0; i<9; i++){
        document.getElementById(i).removeEventListener("click", displayMove);
    }
    document.getElementById("start").style.visibility = "visible";
}
function setItUp(){
    for (i=0; i<9; i++){
        document.getElementById(i).addEventListener("click", displayMove);
        document.getElementById(i).innerHTML = "";
    }
    document.getElementById("start").style.visibility = "hidden";
}