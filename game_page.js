var player1_name=localStorage.getItem("player1_name");
var player2_name=localStorage.getItem("player2_name");

var player1_score= 0;
var player2_score= 0;

document.getElementById("player1_name").innerHTML=player1_name+ ":";
document.getElementById("player2_name").innerHTML=player2_name+ ":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="quetion turn-"+ player1_name;
document.getElementById("player_answer").innerHTML="answer turn-"+ player2_name;

