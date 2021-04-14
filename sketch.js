
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperOb, bucketOb, groundOb;

var bbase, bleft, bright;

var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

    //creating the bucket
	bbase = new bucket(1100,650,200,20);
	bleft = new bucket(1000,605,10,100);
	bright = new bucket(1200,605,10,100);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paperOb = new paper(200,450,40);
	groundOb = new ground(width/2,670,width,20);
    


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
 

  
  
  paperOb.display();
  groundOb.display();

  bbase.display();
  bleft.display();
  bright.display();

  drawSprites();
 
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperOb.body,paperOb.body.position,{x:85,y:-85});
	}
}



