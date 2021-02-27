
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here
	
	roof = new Roof(380, 200, 330, 12);

  bob1 = new Bob(256, 460);
  bob2 = new Bob(316, 460);
  bob3 = new Bob(376, 460);
  bob4 = new Bob(436, 460);
  bob5 = new Bob(496, 460);

  rope1 = new Rope( bob1.body, roof.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
 
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  
  drawSprites();
 
}



