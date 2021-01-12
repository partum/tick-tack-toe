var move = 'O'
var choice = '#FF858D'
var xMoves = ""
var oMoves = []
var won = false
const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
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
    let gameWon = checkWin();
    if (gameWon) shutItDown();
}
function checkWin(){
    let plays = origBoard.reduce((a, e, i) => 
    (e == move) ? a.concat(i) : a, []);
    let gameWon = null;
    for (let [index, win] of winCombos.entries()) {
		if (win.every(elem => plays.indexOf(elem) > -1)) {
			gameWon = {index: index, move:move};
			break;
		}
	}
	return gameWon;
}
function shutItDown(){
    for (i=0; i<9; i++){
        document.getElementById(i).removeEventListener("click", displayMove);
    }
    won = true;
    document.getElementById("start").style.visibility = "visible";
}
function setItUp(){
    for (i=0; i<9; i++){
        document.getElementById(i).addEventListener("click", displayMove);
        document.getElementById(i).innerHTML = "";
    }
    won = false;
    document.getElementById("start").style.visibility = "hidden";
    origBoard = Array.from(Array(9).keys());
    document.getElementById("guide").innerHTML = "Welcome to tick-tack-toe!";
}