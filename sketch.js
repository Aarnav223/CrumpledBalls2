
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;//namespacing
const Body = Matter.Body;
const Render=Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	d1=new Dustbin(1300,665,170,20);
	d2=new Dustbin(1205,615,20,120);
	d3=new Dustbin(1395,615,20,120);

   /* var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });
  
	  
	  Render.run(render);
	*/
  






	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightskyblue");
  Engine.update(engine);
 d1.display();
 d2.display();
  d3.display();
  
  drawSprites();
 
}



