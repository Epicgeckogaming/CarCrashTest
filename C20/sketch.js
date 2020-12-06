var car, wall;
var speed, weight;

function setup() {
  createCanvas(2000,400);
  speed = random(1,300);
  weight = random(400,4000);
  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  car.shapeColor = "orange";
  wall = createSprite(1200,200,10,height/2);
}

function draw() {
  background(0,0,0);
  if (wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX = 0;
  }
  drawSprites();
}