const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var ball,ball2;



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options ={
    isStatic: true
}

  ground = Bodies.rectangle(200,380,400,20,ground_options)
  World.add(world,ground);

  var ball_options ={
  restitution: 1.0
  }

  ball = Bodies.circle(200,50,20,ball_options );
  World.add(world,ball);

  var ball2_option={
    restitution: 1.0
  }

  ball2 = Bodies.circle(100,50,20,ball2_option);
  World.add(world,ball2);


}

function draw() {
  background(0);  
  rectMode(CENTER);
  Engine.update(engine);
 rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  ellipseMode(RADIUS);
  ellipse(ball2.position.x,ball2.position.y,20,20);

}




  