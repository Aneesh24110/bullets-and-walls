var car, wall
var car2, wall2
var car3, wall3
var car4, wall4
var speed, weight
function setup() {
  createCanvas(1600,800);
  car = createSprite(50, 100, 25, 25);
  car2 = createSprite(50, 270, 25, 25);
  car3 = createSprite(50, 440, 25, 25);
  car4 = createSprite(50, 610, 25, 25);
  wall = createSprite(1500, 100, 20, 80);
  wall2 = createSprite(1500, 270, 20, 80);
  wall3 = createSprite(1500, 440, 20, 80);
  wall4 = createSprite(1500, 610, 20, 80);
  wall.shapeColor = color(80,80,80);
  wall2.shapeColor = color(80,80,80);
  wall3.shapeColor = color(80,80,80);
  wall4.shapeColor = color(80,80,80);
  speed = random(55,90)
  weight = random(400,1500)
  car.velocityX = speed; 
  car2.velocityX = speed; 
  car3.velocityX = speed; 
  car4.velocityX = speed; 
  
}

function draw() {
  background(0); 
  if(wall.x-car.x < (car.width+wall.width)/2)
{
  car.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>180)
  {
    car.shapeColor=color(255,0,0)
  }
  if(deformation<180 && deformation<180 && deformation>100)
  {
   car.shapeColor=color(230,230,0);
  }
  
  if(deformation,100)
  {
  car.shapeColor=color(0,255,0);
  }
}


if(wall2.x-car2.x < (car2.width+wall2.width)/2)
{
  car2.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>180)
  {
    car2.shapeColor=color(0,255,0)
  }
  if(deformation<180 && deformation<180 && deformation>100)
  {
   car2.shapeColor=color(230,230,0);
  }
  
  if(deformation,100)
  {
  car2.shapeColor=color(255,0,0);
  }
}

if(wall3.x-car3.x < (car3.width+wall3.width)/2)
{
  car3.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>180)
  {
    car3.shapeColor=color(255,0,0)
  }
  if(deformation<180 && deformation<180 && deformation>100)
  {
   car3.shapeColor=color(230,230,0);
  }
  
  if(deformation,100)
  {
  car3.shapeColor=color(0,0,255);
  }
}

if(wall4.x-car4.x < (car4.width+wall4.width)/2)
{
  car4.velocityX=0; 
  var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>180)
  {
    car4.shapeColor=color(255,0,0)
  }
  if(deformation<180 && deformation<180 && deformation>100)
  {
   car4.shapeColor=color(230,230,0);
  }
  
  if(deformation,100)
  {
  car4.shapeColor=color(255,255,255);
  }
}
  drawSprites();
}
