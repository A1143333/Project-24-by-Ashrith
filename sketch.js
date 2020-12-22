const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin, ball, ground;

function setup(){
	createCanvas(1600,700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	dustbin = new Dustbin(1200,650);
	ball = new Paper(200,450,40);
	ground = new Ground(width/2,670,width,20);
	//Create a Ground

	Engine.run(engine);
}

function draw(){

	rectMode(CENTER);
	background("blue");

	dustbin.display();
	ball.display();
	ground.display();

	fill("yellow")
    stroke("green")
	strokeWeight(12)
	textSize(35)
	text("CRUMPLED BALLS - 1 BY ASHRITH", 200,50)
   

}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
		
	}
	

}