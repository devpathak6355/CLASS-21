var movingRect, fixedRect;
var gameObject1, gameObject2, gameObject3,gameObject4,gameObject5;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(200,200,50,50);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  fixedRect.debug="true";
  movingRect.debug="true";
  gameObject1=createSprite(200,100,50,50);
  gameObject1.shapeColor="green";
  gameObject2=createSprite(600,50,50,50);
  gameObject2.shapeColor="orange";
  gameObject2.velocityY=2;
  gameObject3=createSprite(600,350,50,50);
  gameObject3.shapeColor="yellow";
  gameObject3.velocityY=-2;
  gameObject4=createSprite(100,350,50,50);
  gameObject4.shapeColor="white";
  gameObject4.velocityX=2;
  gameObject5=createSprite(500,350,50,50);
  gameObject5.shapeColor="grey";
  gameObject5.velocityX=-2;
}

function draw() {
  background("black"); 
  movingRect.x=World.mouseX ;
  movingRect.y=World.mouseY ;
  if(isTouching(fixedRect,movingRect)){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  if(isTouching(gameObject1,movingRect)){
    movingRect.shapeColor="blue";
    gameObject1.shapeColor="blue";
  }
  else{
    gameObject1.shapeColor="green";
    
  }
  bounceOff(gameObject2,gameObject3);
  bounceOff(gameObject4,gameObject5);
  drawSprites();
}


