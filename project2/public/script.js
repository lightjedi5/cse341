//event listeners added
var elements = document.getElementsByClassName('box')
for(var i = 0; i < customElements.length; i++){
    elements[i].addEventListener('click', putMarker)
}
//create board
var board = new Array(3);
for(var i = 0; i<board.length; i++)
    board[i] = [];

function initializeBoard(){
    for(var i=0; i<3; i++){
        for(var j=0; j<3; j++){
            board[i][j] = 0;
        }
    }
}

function winCondition(){
    var win = false
    //checks if player 1 won
    if(board[0][0]===1 && board[0][1]===1 && board[0][2]===1)
        return win = true
    if(board[1][0]===1 && board[1][1]===1 && board[1][2]===1)
        return win = true
    if(board[2][0]===1 && board[2][1]===1 && board[2][2]===1)
        return win = true
    if(board[0][0]===1 && board[1][0]===1 && board[2][0]===1)
        return win = true
    if(board[0][1]===1 && board[1][1]===1 && board[2][1]===1)
        return win = true
    if(board[0][2]===1 && board[1][2]===1 && board[2][2]===1)
        return win = true
    if(board[0][0]===1 && board[1][1]===1 && board[2][2]===1)
        return win = true
    if(board[0][2]===1 && board[1][1]===1 && board[2][0]===1)
        return win = true
    //checks if player 2 won
    if(board[0][0]===2 && board[0][1]===2 && board[0][2]===2)
        return win = true
    if(board[1][0]===2 && board[1][1]===2 && board[1][2]===2)
        return win = true
    if(board[2][0]===2 && board[2][1]===2 && board[2][2]===2)
        return win = true
    if(board[0][0]===2 && board[1][0]===2 && board[2][0]===2)
        return win = true
    if(board[0][1]===2 && board[1][1]===2 && board[2][1]===2)
        return win = true
    if(board[0][2]===2 && board[1][2]===2 && board[2][2]===2)
        return win = true
    if(board[0][0]===2 && board[1][1]===2 && board[2][2]===2)
        return win = true
    if(board[0][2]===2 && board[1][1]===2 && board[2][0]===2)
        return win = true
}

//keeps track of the turn and will help know whos turn it is
var turnCounter = 0

function putMarker(el){
    turnCounter++
    //player2 turn
    if((turnCounter % 2) === 0){
        document.getElementById(el).innerHTML = 'O'
    }
    else{
        document.getElementById(el).innerHTML = 'X'
    }

}