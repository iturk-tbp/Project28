
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, m1, tree

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(800,700,1600,50);
	
	tree = new Tree(200,350,375,700);

	m1 = new Mango(200,250,60);
	m2 = new Mango(50,300,60);
	m3 = new Mango(100,175,60);
	m4 = new Mango(150,260,60);
	m5 = new Mango(200,300,60);
	m6 = new Mango(250,115,60);
	m7 = new Mango(300,220,60);

	boy = new Boy(900,600,250,400);

	stone = new Stone(1080,550,75,75);

	launcher = new Launcher(stone.body, {x: 830, y: 525} )

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground.display();
  
  tree.display();

  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();

  boy.display();
 
  stone.display();
  launcher.display();
  
  detectCollision(stone,m1);
  detectCollision(stone,m2);
  detectCollision(stone,m3);
  detectCollision(stone,m4);
  detectCollision(stone,m5);
  detectCollision(stone,m6);
  detectCollision(stone,m7);


  drawSprites();
  
   
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY})
}
function mouseReleased(){
    launcher.fly()
	Body.setStatic(stone.body,false)
	
}
function keyPressed(){
	if(keyCode == 32){
		Body.setPosition(stone.body,{x : 1080,y :550});
		launcher.attach(stone.body);
	}
}


function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if (distance <=lmango.radius+ lstone.radius){
		Matter.Body.setStatic(lmango.body,false)
	}

}

