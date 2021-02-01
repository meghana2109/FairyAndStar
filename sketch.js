const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var fairy,fairyImage,star,starImage,skyImage,sky,sound;
var engine,world,starBody;

function preload()
{
   //preload the images here
   fairyImage = loadAnimation("fairy1.png","fairy2.png");
   starImage = loadImage("star.png");
   skyImage = loadImage("starnight.png");
   sound = loadSound("JoyMusic.mp3");

}

function setup() {
  createCanvas(800, 750);

  sound.play();

  fairy = createSprite(120,500);
  fairy.addAnimation("fairyflying",fairyImage);
  fairy.scale = 0.28 ;

  star = createSprite(600,40);
  star.addImage(starImage);
  star.scale = 0.15;

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true,
    restitution:0.6
  }
  starBody = Bodies.circle(600,40,20,options);

  Engine.run(engine);

  World.add(world,starBody);



  
}


function draw() {
  background(skyImage);

  


  star.x = starBody.position.x;
  star.y = starBody.position.y;

if(keyDown("RIGHT_ARROW")){
  fairy.x = fairy.x + 5;
}
if(keyDown("LEFT_ARROW")){
  fairy.x = fairy.x - 5;
}

if(star.y > 470 && starBody.position.y > 470 ){
  Matter.Body.setStatic(starBody,true);
}
  drawSprites();
}



function keyPressed() {

	if(keyCode === RIGHT_ARROW){
           fairy.x = fairy.x + 20;
	}
	
        if(keyCode === LEFT_ARROW){
           fairy.x = fairy.x - 20;
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
}
