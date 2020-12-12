const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var myengine, myworld;
var ball, ball2;
var ground;
function setup() {
  createCanvas(800,400); 
  myengine = Engine.create();
  myworld = myengine.world;
  var ball_options = {
    restitution:2
  }
  ball = Bodies.circle(200, 200, 20,ball_options);
  World.add(myworld, ball);
  var ground_options = {
    isStatic : true
  }
  ground =Bodies.rectangle(400, 390, 800, 10, ground_options);
  World.add(myworld, ground);
  ball2 = Bodies.circle(300, 300, 20,ball_options);
  World.add(myworld, ball2);
}

function draw() {
  background("black");
  Engine.update(myengine);
  rectMode(CENTER);
  ellipse(ball.position.x, ball.position.y, 40, 40); 
  rect(ground.position.x,ground.position.y,800, 10); 
  ellipse(ball2.position.x, ball2.position.y, 40, 40); 
  drawSprites();
}