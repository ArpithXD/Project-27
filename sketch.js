
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//roof
	roof = new Roof(375, 100, 400, 35);
	
	//bobs
	bob1 = new Bob(215,475,40);
	bob2 = new Bob(295,475,40);
	bob3 = new Bob(375,475,40);
	bob4 = new Bob(455,475,40);
	bob5 = new Bob(535,475,40);

	//constrained rope

	rope1 = new Rope(bob1.body,roof.body);


	Engine.run(engine);
  
}


function draw() {
  background(200);
  rectMode(CENTER);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
 
}



