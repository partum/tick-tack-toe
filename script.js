var move = 'O'
const cells = document.querySelectorAll('.cells')
for (i=0; i<9; i++){
    document.getElementById(i).addEventListener("click", displayMove);
}
function whoseTurn(){
    if (move == 'O'){
        move = 'X'
    }
    else if(move == 'X'){
        move = 'O'
    }  
}
function displayMove(){
    whoseTurn();
    var node = document.createTextNode(move);
    document.getElementById(this.id).appendChild(node)
}