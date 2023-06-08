//alert("working");
let randnum1 = Math.floor(Math.random() * 6)+1;
//alert(randnum);
var randdice1 = "dice" + randnum1 + ".png";

let rimgs1 = "images/" + randdice1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", rimgs1);




let randnum2 = Math.floor(Math.random() * 6)+1;
//alert(randnum);
var randdice2 = "dice" + randnum2 + ".png";

let rimgs2 = "images/" + randdice2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", rimgs2);

if (randnum1 > randnum2) {
    document.querySelector("h1").innerHTML = "Player 1 wins 🚩";
}
else if (randnum1 < randnum2) {
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩🚩";
}
else document.querySelector("h1").innerHTML = "Draw";

    

