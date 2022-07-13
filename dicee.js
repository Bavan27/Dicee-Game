var randomNumber1 = Math.floor( Math.random()*6) + 1;

var randomDiceImage = "dice"+randomNumber1+".png";

var randomImageSource = "Images/" + randomDiceImage;

var image1 = document.querySelector(".img1").setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "Images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent ="🚩Player1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent ="Player2 Wins!🚩";

}
else {
  document.querySelector("h1").textContent ="Draw";
}
