var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxPart1,boxPart2,boxPart3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	var options = {
		isStatic : true
	}
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxPart1 = createSprite(400,650,200,20 );
	boxPart1.shapeColor = color(255,0,0)

	 boxPart2 = createSprite(500,610,20,100);
	 boxPart2.shapeColor = color(255,0,0)

	 boxPart3 = createSprite(300,610,20,100);
     boxPart3.shapeColor = color(255,0,0)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , options);
	 World.add(world, ground);
	 
	 boxPart1 = Bodies.rectangle(400,650,200,20,options);
	 World.add(world,boxPart1);

	 boxPart2 = Bodies.rectangle(500,610,20,100,options);
	 World.add(world,boxPart2);

	 boxPart3 = Bodies.rectangle(300,610,20,100,options);
	 World.add(world,boxPart3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  rectMode(CENTER);
  rect(400,650,200,20);
  boxPart1.shapeColor = color(255,0,0);

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Body.setStatic(packageBody,false);
  }
}



