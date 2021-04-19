
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var bob1, roof1, rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });


	roof1= new roof(400, 100, 600, 20);

	bob1= new bob(400, 500, 10);
	rope1= new rope(bob1.body, roof1.body, -0*2, -300);

	bob2= new bob(330, 500, 10);
	rope2= new rope(bob2.body, roof1.body, -35*2, -300);

	bob3= new bob(260, 500, 10);
	rope3= new rope(bob3.body, roof1.body, -70*2, -300);

	bob4= new bob(470, 500, 10);
	rope4= new rope(bob4.body, roof1.body, 35*2, -300);

	bob5= new bob(540, 500, 10);
	rope5= new rope(bob5.body, roof1.body, 70*2, -300);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



function keyPressed(){
	if(keyCode == UP_ARROW) {
    Matter.Body.applyForce(bob3.body,bob3.body.position,{x: -50, y:-50})
	}
  
}