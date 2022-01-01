var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg=loadAnimation("ship-1.png","ship-2.png");
//Choose the correct option by uncommenting the right line to load the animation for ship.
  //shipImg = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-2.png");
  //shipImg = loadAnimation("ship-1","ship-1","ship-2","ship-2");
  //shipImg = loadAnimation("1.png","2.png");

}

function setup(){
  createCanvas(620,400);
  background("blue");
  

  // Moving background
  sea=createSprite(400,200);
  sea.addImage("running",seaImg);
  sea.scale=0.3;

  
  ship = createSprite(200,200,30,30);
  ship.addAnimation("running",shipImg);
  ship.scale = 0.25;
  
}

function draw() {
  background(0);
  if (keyDown("Right")) {
    ship.velocityX = 5;
  }
   if (keyDown("Left")) {
     ship.velocityX = -5;
   }
    if (keyDown("space")) {
      ship.velocityX = 0;
    }
     if (sea.x < 0) {
       sea.x = sea.width / 2;
     } 

     drawSprites();
}
