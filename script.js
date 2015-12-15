var can = document.getElementById("myCanvas");
var ctx = can.getContext("2d");


ctx.beginPath();
ctx.strokeStyle="blue" // couleur du cercle
ctx.lineWidth = 20; // épaisseur du cercle

ctx.arc(200,200,140,0,Math.PI*2,true); // cercle de rayon 140px
ctx.fillStyle="blue"; // couleur du premier carré
ctx.fillRect(175,130, 50,50); // position et taille du premier carré
ctx.fillStyle= "rgb(7, 8, 119)"; // couleur du second carré
ctx.fillRect(175,220,50,50); // position du second carré
ctx.stroke();


function website() {
  window.location.href="http://boulogne.simplon.co";
}
