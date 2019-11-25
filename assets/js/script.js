var c = document.getElementById('canvas');
//Création d'un objet CanvasRenderingContext2D
var ctx = c.getContext('2d');
//Mur de la maison
function mur(){
  ctx.beginPath(); //Début du chemin
  ctx.moveTo(150, 100); // Se déplacer à la position(x, y)
  ctx.lineTo(150, 200);
  ctx.lineTo(250, 200);
  ctx.lineTo(250, 100);
  ctx.fillStyle = "lightblue";
  ctx.fill();
}
// Toit de la maison
function toit(){
  ctx.beginPath(); //Début du chemin
  ctx.moveTo(150, 100); // Se déplacer à la position
  ctx.lineTo(200, 50); // Tracer une ligne jusqu'à la position
  ctx.lineTo(250, 100); // Tracer une ligne jusqu'à la position
  ctx.fillStyle = "orange";
  ctx.fill();
}
// Fenêtre gauche et droite
function fenetre(){
  //Fenetre gauche
  ctx.beginPath();
  ctx.moveTo(170, 120);
  ctx.lineTo(170, 140);
  ctx.lineTo(190, 140);
  ctx.lineTo(190, 120);
  ctx.fillStyle = "grey";
  ctx.fill();
  //Fenetre droite
  ctx.beginPath();
  ctx.moveTo(230, 120);
  ctx.lineTo(230, 140);
  ctx.lineTo(210, 140);
  ctx.lineTo(210, 120);
  ctx.fillStyle = "grey";
  ctx.fill();
}
//Porte de la maison
function porte() {
  ctx.beginPath();
  ctx.moveTo(190, 200);
  ctx.lineTo(210, 200);
  ctx.lineTo(210, 170);
  ctx.lineTo(190, 170);
  ctx.fillStyle = "grey";
  ctx.fill();
}
function main(){
  mur();
  toit();
  fenetre();
  porte();
}
main();
