var car,wall;
var speed, weight;

function setup() {
  createCanvas(800,400);
speed=random(55,90);
weight=random(400,800);
car=createSprite(50,200,50,50);
wall=createSprite(750,200,60,height/2);



}

function draw() {
  background(80,80,80);
  car.velocityX = speed;
 
  wall.x-car.x <(car.width+wall.width)/2;

if(car.x-wall.x<car.width/2+wall.width/2){
  
car.velocityX=0;
var deformation=0.5 * weight * speed* speed/22509;
if(deformation>180)
{
  car.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100)
{
  car.shapeColor=color(230,230,0);
}
if(deformation<100)
{
car.shapeColor=color(0,255,0)
}

}

  drawSprites();
}