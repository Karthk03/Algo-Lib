var fixedRect, movingRect;
var block1, block2;
var collider = [];

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;

  block1 = createSprite(100, 400, 50, 80);
  block1.shapeColor = "green";
  //block1.debug = true;
  block2 = createSprite(900, 400,80,30);
  block2.shapeColor = "green";
  //block2.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  block1.velocityX = 5;
  block2.velocityX = -5;
}

function draw() {
  background(0,0,0);  
  drawSprites();
  bounceOff(movingRect,fixedRect);
  if(isTouching(block1,block2))
  {
    block1.shapeColor = "blue"
    block2.shapeColor = "blue"
  }
  else
  {
    block1.shapeColor = "green"
    block2.shapeColor = "green"
  }

  setCollider(block1,"rectangle",0,0,50,50)
  setCollider(block2,"rectangle",0,0,50,50)
}