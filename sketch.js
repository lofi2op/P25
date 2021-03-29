
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900, 500);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(450,490,1000,20)

	world = engine.world;
	dustbinSprite = new Dustbin(700,490);
	trashSprite = new Trash(100,300,40);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("grey");
  trashSprite.display();
  ground.display();
  dustbinSprite.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(trashSprite.body,trashSprite.body.position,{x:40,y:-50})
	}
}



