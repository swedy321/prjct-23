var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopter,packages,ground;
var base1,baseright;

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

  //creating helicopter
	var helicopteroption ={
        isStatic: true
    }
  

    helicopter = Bodies.rectangle(width/2,300,10,10,helicopteroption);
    image1=loadImage("helicopter.png");
	World.add(world,helicopter);


  //creating ground
	var ground_options ={
        isStatic: true
    }
  
	//fill("brown")
    ground = Bodies.rectangle(width/2,680,800,80,ground_options);
	World.add(world,ground);
  
  //give same y position for helicopter and package . so that it hides behind it 

//creating package
	//fill("green");
	var op=
	{restitution:1,isStatic:true}
  packages = Bodies.rectangle(width/2,300,10,10,op);
  image2=loadImage("package.png")

  World.add(world,packages);
  

  //creating the red zone base
 base1=new base(width/2,650,200,20);
baseright=new base(506,610,20,100);
baseleft=new base(309,610,20,100);
  

}


function draw() {
  //rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  //displaying ground
  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x,ground.position.y,800,50);

//displaying package
  imageMode(CENTER);
 // fill("blue")
  image(image2,packages.position.x,packages.position.y,30,30);
 

//displaying helicopter
  imageMode(CENTER)
  image(image1,helicopter.position.x,helicopter.position.y,90,60);
  fill("red");


  base1.display();
  fill("red")
  baseright.display();
  fill("red")
  baseleft.display();
  //rect(base1.position.x,base1.position.y,200,20);
  //fill("red");
  //rect(base2.position.x,base2.position.y,20,100);

  //to give keypress
  if(keyDown("down"))
  {
    Matter.Body.setStatic(packages,false);
  
    }
 
}




