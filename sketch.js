var f1,m1;
var G1,G2,G3,G4;


function setup() {
  createCanvas(1200,800);
  m1 = createSprite(700,400,70,70);
  m1.shapeColor = "red";
  f1 = createSprite(600,400,70,70);
  f1.shapeColor = "blue";

  G1=createSprite(200,100,50,50)
  G1.shapeColor="green"

  G2=createSprite(400,100,50,50)
  G2.shapeColor="orange"

  G3=createSprite(600,100,50,50)
  G3.shapeColor="purple"

  G4=createSprite(800,100,50,50)
  G4.shapeColor="cyan"
  //m1.velocityY=-5;
  //f1.velocityY=5;
}

function draw() {
  background("black");  
  m1.x=World.mouseX;
  m1.y=World.mouseY;

if(isTouching(m1,G3)){
  m1.shapeColor="yellow";
  G3.shapeColor="white";
   }
  else{
    m1.shapeColor="red"
    G3.shapeColor="blue"
  }
  bounceOff(m1,f1);
  drawSprites();
}

