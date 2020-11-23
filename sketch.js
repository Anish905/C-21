var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(100,450,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX = 4;
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  
  //if(isTouching(movingRect,fixedRect)){
   //text("CAR HAS BEEN COLLIDED",300,200);
   //textSize(60);
  //}
 
  bounceOff(movingRect,fixedRect);

  
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 +object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && fixedRect.y - object1.y < object2.height/2 + object1.height/2) {
      return true;
}
else {
  return false;
 
}

}

  
