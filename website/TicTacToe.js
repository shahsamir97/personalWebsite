var x=1;
var countState = 0;
var isGameFinished = false;


if(navigator.userAgent.match(/Android/i))
{
   document.getElementById("style").setAttribute("href","TicTacToe_mobile.css");
}else {
    document.getElementById("style").setAttribute("href","TicTacToe_desktop.css");
}


function  reloadPage() {
    window.location.reload();
}

function verifyPlayerTurn(e) {
    if (e.innerHTML ==="O")
    {
        document.getElementById("turn").innerHTML = "Now Player :X";

    }else {
        document.getElementById("turn").innerHTML = "Now Player :O";

    }
}
function showSign(e) {
    if (x === 1 && e.innerHTML === "" && isGameFinished === false) {
        countState++;
        e.style.color="darkred";
        e.innerHTML = "X"
        x++;
        player1_StoreData("X",e.id);
        verifyPlayerTurn(e);
        winner();
        isGameOver();
    } else if (x === 2 && e.innerHTML === "" && isGameFinished === false) {
        countState++;
       e.style.color = "forestgreen";
        e.innerHTML = "O";
        player2_StoreData("O",e.id);
        verifyPlayerTurn(e);
        x = 1;
        winner();
        isGameOver();
    }
}

var moves = [];
var possibleSolutions=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
];


function player1_StoreData(value,id) {
    var indexNo = parseInt(id,10);
    moves[indexNo-1]=value;

}

function player2_StoreData(value,id) {
    var indexNo = parseInt(id,10);
   moves[indexNo-1]=value;

}

function winner() {
    if(countState>=9)
    {
        document.getElementById("winner").innerHTML = "Game is Draw!";
        if(isGameFinished===false){
          document.getElementById("turn").innerHTML = "Restart The Game To Play Again!";
        }
    }
    let i=0;
    for (i;i<9;i++)
    {
        const [a,b,c] = possibleSolutions[i];

        if(moves[a-1]==moves[b-1] && moves[b-1]==moves[c-1] && moves[a-1]==moves[c-1] && moves[a-1]!=null){
          if(moves[a-1]=="O"){
              document.getElementById("winner").innerHTML = "Winner is O";
            document.getElementById("turn").innerHTML = "Restart The Game To Play Again!";
              isGameFinished = true;
          }else{
              isGameFinished= true;
              document.getElementById("winner").innerHTML = "Winner is X";
            document.getElementById("turn").innerHTML = "Restart The Game To Play Again!";
          }
        }
    }
}

function isGameOver(){

}

