var move = 'O'
var choice = '#FF858D'
var xMoves = []
var oMoves = []
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
    recordMoves(this.id);
    whoseTurn();
    newH1();
}
function newH1(){
    document.getElementById("guide").innerHTML = "It's " + move + "'s turn"
}
function recordMoves(theID){
    if (move == 'O'){
        oMoves.push(parseInt(theID))
    }
    else if (move == 'X'){
        xMoves.push(theID)
    }
    if (winCombos.includes(oMoves)){
        console.log('✌')
    }
    console.log(oMoves)
    console.log(winCombos)
    
    for(var i=0;i<a.length;i++) 
        if(a[i]!=b[i]) 
          return "False"; 
        return "True"; 
    
}