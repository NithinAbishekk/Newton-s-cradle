
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1,rope2,rope3,rope4,rope5;
var backgroundImg;

function preload(){
	backgroundImg = loadImage("scenery.jpg");
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

  rope1 = new Rope(bob1.body, roof.body,-120,0);
  rope2 = new Rope(bob2.body, roof.body,-60,0);
  rope3 = new Rope(bob3.body, roof.body,0,0);
  rope4 = new Rope(bob4.body, roof.body,60,0);
  rope5 = new Rope(bob5.body, roof.body,120,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
 
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  drawSprites();
 
}

function keyPressed(){

    if(keyCode === UP_ARROW){
      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:50});
    }

}



