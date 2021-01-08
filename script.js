var move = 'O'
var choice = '#FF858D'
const cells = document.querySelectorAll('.cells')
for (i=0; i<9; i++){
    document.getElementById(i).addEventListener("click", displayMove);
}
setTimeout(newH1, 4000)


function whoseTurn(){
    if (move == 'O'){
        move = 'X'
        choice = '#ff9fe5'
    }
    else if(move == 'X'){
        move = 'O'
        choice = '#FF858D'
    }  
}
function displayMove(){
    var node = document.createTextNode(move);
    document.getElementById(this.id).style.color = choice;
    document.getElementById(this.id).appendChild(node)
    whoseTurn();
    newH1();
}
function newH1(){
    document.getElementById("guide").innerHTML = "It's " + move + "'s turn"
}