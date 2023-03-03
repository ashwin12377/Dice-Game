// for player1
var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1)+1;                        // randomNumber generator

var randomDiceImg = "dice" + randomNumber1 + ".png";               //dice1 - dice6

var randomImgsource = "images/" + randomDiceImg;                   //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img") [0];                 //[0] is player 1

image1.setAttribute("src" , randomImgsource);




// for player2           written in simplified
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImgsource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src" , randomImgsource2);                 //[1] is player2




// If player wins
if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML="🚩 Player 1  Wins!";
}

else if(randomNumber2 > randomNumber1){
        document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}

else{
    document.querySelector("h1").innerHTML="🚩 Draw! 🚩";
}