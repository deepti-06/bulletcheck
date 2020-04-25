var bullet;
var wall;
var damage;
var obj1,obj2;
var weight,speed,thick;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(200,200,40,20)
  
  speed=Math.round(random(223,321));
  
  weight=Math.round(random(30,52))
  bullet.velocityX=speed;
  bullet.shapeColor="white";
thick=Math.round(random(22,83))
  wall=createSprite(1500, 200, thick, 400);
wall.shapeColor=color(80,80,80);

}

function draw() {
  background(255,255,255);  
  //isTouching();
  ifif(hasCollided(bullet,wall)){
   console.log("hi");
    //object1.shapeColor="red"
//object2.shapeColor="red"
bullet.velocityX=0;
damage=(0.5*weight*speed*speed)/(thick*thick*thick)
  }
if(damage<10){
  console.log("hello")
  wall.shapeColor="green"
}
if(damage>10){
  console.log("ssup")
  wall.shapeColor="red"
}
  drawSprites();
}
function hasCollided(obj1,obj2){
  bulletRightEdge=obj1.x+obj1.width;
  wallLeftEdge=obj2.x;
  if(bulletRightEdge>=wallLeftEdge){
return true;
  }
    
      return false;
  }

