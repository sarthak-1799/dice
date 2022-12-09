var randomnumber1 = Math.floor((Math.random()*6)+1);
var dicename = "images/dice"+randomnumber1+".png"

document.querySelector(".img1").setAttribute("src", dicename);

var randomnumber2 = Math.floor((Math.random()*6)+1);
var dicename2 = "images/dice"+randomnumber2+".png"

document.querySelector(".img2").setAttribute("src", dicename2);

///////Winner////////
if (randomnumber1 > randomnumber2){
document.querySelector("h1").innerHTML = "🎉 Player1 WINS 🎉";}
else if (randomnumber1 < randomnumber2) {
document.querySelector("h1").innerHTML = "👑 Player2 WINS 👑";}
else {
document.querySelector("h1").innerHTML = "👊 OOPS!! ITS A DRAW 👊";}
