
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var wall1, wall2, wall3, wall4;
var paper,ground;
var trashcan;

function preload(){

	//nothing yet :p
}

function setup() {
	createCanvas(800, 400);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	
	ground = new Ground(600,height,1200,20);

	paper = new Paper(200,300,40);

	wall1 = new Trash(600, 390, 200,10);
	wall2 = new Trash(500, 350, 10,70);
	wall3 = new Trash(700, 315, 10,150);
	wall4 = new Trash(685,245,40,10);

	trashcan = new TrashIMG();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine);
  
  keyDown(paper);

  ground.display();
  paper.display();
  wall1.display();
  wall2.display();
  wall3.display();
  //wall4.display();
  trashcan.display();
}

function keyDown(object1){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(object1.body,object1.body.position,{x:15,y:-15});
		
		Engine.run(engine);

		Engine.update(engine);
	  }

}


