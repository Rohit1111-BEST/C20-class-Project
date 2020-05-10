var movingrect,fixedrect;

function setup() {
  createCanvas(800,400);
movingrect=createSprite(400, 200, 50, 50);
fixedrect=createSprite(400,50,50,50);
 movingrect.shapeColor="orange"
 fixedrect.shapeColor="orange"
}
function draw() {
  background("blue");  
movingrect.y=mouseY;
movingrect.x=mouseX;
  drawSprites();
}