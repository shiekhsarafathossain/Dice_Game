var num1 = Math.floor(Math.random() * 6 + 1);
var num2 = Math.floor(Math.random() * 6 + 1);

var randomdice1 = "dice" + num1 +".png"
var randomImages1 = "./images/" + randomdice1;
var randomdice2 = "dice" + num2 +".png"
var randomImages2 = "./images/" + randomdice2;

document.querySelector(".img1").setAttribute("src", randomImages1);
document.querySelector(".img2").setAttribute("src", randomImages2);


if(num1>num2){
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
}
else if(num1 === num2){
    document.querySelector("h1").innerHTML = "Draw! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}