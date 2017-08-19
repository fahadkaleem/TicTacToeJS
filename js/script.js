/**
 * Created by kaleemmf on 8/10/17.
 */
function startGame(){
    for(var i=1;i<=9;i=i+1){
        clearBox(i);
    }
    document.turn = "X";
    document.number = 0;
    if (Math.random() < 0.5){
        document.turn = "O";
    }
    document.winner = null;
    setMessage(document.turn + " gets to start!");
}
function setMessage(message){
    document.getElementById("message").innerText = message;
}
function nextMove(square){
    if(document.winner != null){
        setMessage(document.winner + " already won the game!.");
    }
    else if (square.innerText=="") {
        square.innerText = document.turn;
        document.number +=1;
        switchTurn();
    }
    else{
        setMessage("That square is already used!")
    }
}
function switchTurn(){
    if (checkForWinner(document.turn)){
        setMessage("Congratulations, " + document.turn + "! You win!");
        document.winner = document.turn;
    }
    else if(document.number===9){
        setMessage("Game Over!");
    }
    else if(document.turn=="X"){
        document.turn="O";
        setMessage("It's " + document.turn + " 's turn!")
    }
    else{
        document.turn = "X";
        setMessage("It's " + document.turn + " 's turn!")
    }
}
function checkForWinner(move){
    var result = false;
    if(checkRow(1,2,3,move) ||
        checkRow(4,5,6,move) ||
        checkRow(7,8,9,move) ||
        checkRow(1,4,7,move) ||
        checkRow(2,5,8,move) ||
        checkRow(3,6,9,move) ||
        checkRow(1,5,9,move) ||
        checkRow(3,5,7,move)){
        result= true;
    }
    else {
        result = false;
    }
    return result;
}

function checkRow(a,b,c,move){
    var result = false;
    if (getBox(a)==move && getBox(b)==move && getBox(c)==move){
        result=true;
    }
    return result;
}
function getBox(number){
    return document.getElementById("s"+number).innerText;
}
function clearBox(number){
    document.getElementById("s"+ number).innerText = "";
}