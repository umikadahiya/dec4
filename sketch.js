var girl,girlImg;
var path,pathImg;
var sound,girlfallImg;
var gameOverImg;
var resetImg;
var diamondsImg;
var dianosaurImg;
var girlstandingImg;
var score=0
var diamondsGroup
var caution

function preload(){
   girlImg=loadAnimation("run1.png","run2.png","run3.png","run4.png");
 girlstandingImg=loadImage("standing.png");
girlfallImg=loadImage("fall.png");
gameOverImg=loadImage("gameover.png");
pathImg=loadImage("road.jpg");
resetImg=loadImage("reset button.png");
dianosaurImg=loadImage("dianasour-.png");
diamondsImg=loadImage("diamond.png");
sound=loadSound("sound.wav");
speed=loadImage("speed.png");
cautionImg=loadImage("caution1.png")
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
// Moving background
path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4;
girl=createSprite(525,500,10,10)
girl.addAnimation("running",girlImg)
cautionGroup=new Group ()
diamondsGroup=new Group ()

}


function draw() {

  
  background(0);
  
  if(path.y > height ){
    path.y = height/2;

    
  }
  if(frameCount%500===0){
    diamonds=createSprite(Math.round(random(100,800)),Math.round(random(100,400)),10,10)
    diamonds.addImage(diamondsImg)

    diamonds.scale=0.3
    diamondsGroup.add(diamonds)

  }
  if(diamondsGroup.isTouching(girl)){
    diamondsGroup.destroyEach()
    score=score+5
  }
  if(cautionGroup.isTouching(girl)){
    cautionGroup.destroyEach();
    score=score-1
  }

  if(frameCount%500===0){
    caution=createSprite(Math.round(random(100,800)),Math.round(random(100,400)),10,10)
    caution.addImage(cautionImg)

    caution.scale=0.6
    cautionGroup.add(caution)

  }
  if(keyDown("UP_ARROW")){
    girl.y=girl.y-5
  
  }

  if(keyDown("DOWN_ARROW")){
    girl.y=girl.y+5
  }

  if(keyDown("LEFT_ARROW")){
    girl.x=girl.x-5}

    if(keyDown("RIGHT_ARROW")){
      girl.x=girl.x+5}
  drawSprites();
  textSize(20);
  fill(255);
  text("score:"+score,100,50)
  }