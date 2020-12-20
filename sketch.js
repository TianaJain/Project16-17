
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodgroup, obstaclegroup
var score;
var survivaTime=0;
var ground;
var gameState="PLAY";
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,600);
  
  //creating monkey
  monkey=createSprite(80,160,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
   ground=createSprite(300,600,600,10);
  
  score=0;
  
 foodgroup=new Group();
 obstaclegroup=new Group();
  
}


function draw() {
  background(180);
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  //add gravity
  monkey.velocityY=monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survival Time" + survivalTime, 100,50);
  fruits();
  
  
  if(gameState==="END"){
    foodgroup.setLifetime(-1);
  obstaclesgroup.setLifetime(-1);
  }

  drawSprites();
  
  
  function fruits(){
    if(frameCount%80===0){
      var food=createSprite(100,100);
      food.addAnimation(bananaImage);
      food.scale=0.5;
      
      //generate random food
      food.y=Math.round(random,120,200);
  food.addAnimation("bananaImage", bananaImage)
      food.velocityX=-3;
      
      foodgroup.add(food);
    }
  }
  
  function obstaclesgroup(){
    function Obstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.addAnimation("obstacleImage",obstacleImage);
   obstacle.velocityX = -(6 + score/100);
   
    //generate random obstacles
    var rand = Math.round(random(1,6));
 }
  }
}
}







