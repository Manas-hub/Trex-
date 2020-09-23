var trex, trex_running, trex_collided,cloudimg,ob1img,ob2img,ob3img,ob4img,ob5img,ob6img;
var ground, invisibleGround, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  cloudimg=loadImage("cloud.png");
  ob1img=loadImage("obstacle1.png");
  ob2img=loadImage("obstacle2.png")
  ob3img=loadImage("obstacle3.png")
  ob4img=loadImage("obstacle4.png")
  ob5img=loadImage("obstacle5.png")
  ob6img=loadImage("obstacle6.png")
  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -6;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(255);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  spawnClouds();
  spawnObstacles();
  
  drawSprites();
  
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,160,10,40);
    obstacle.velocityX = ground.velocityX;
    
    //generate random obstacles
    var rand = Math.round(random (1,6));
   switch(rand)
   {
       case 1:
       obstacle.addImage("ob2",ob1img);
       break;
       case 2:
       obstacle.addImage("ob2",ob2img);
       break;
       case 3:
       obstacle.addImage("ob3",ob3img);
       break;
       case 4:
       obstacle.addImage("ob4",ob4img);
       break;
       case 5:
       obstacle.addImage("ob5",ob5img);
       break;
       case 6:
       obstacle.addImage("ob6",ob6img);
       break;
       default : break;
   }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 110;
  }
}


function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = random(100,130);
    cloud.addImage("cd",cloudimg);
    cloud.scale = 0.5;
    cloud.velocityX = ground.velocityX;
    
     //assign lifetime to the variable
    cloud.lifetime = 101;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }
  
}