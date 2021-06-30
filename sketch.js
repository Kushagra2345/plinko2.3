var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
  var divisions=[]
var particles = [];
var plinkos = [];
var countLeft=20;
var divisionHeight=300;
var score =0;

var gameState="START"
function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  ground1=new Ground(5,height/2,10,height)
  ground2=new Ground(width-5,height/2,10,height)

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 25; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 25; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {

  if(countLeft<20 && countLeft>0){
    gameState="STARTED"
   
  }
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   push()
   stroke("yellow")
   strokeWeight(2)
   line(0,500,width,500)
   pop()
   stroke("red")
   strokeWeight(1)
   text("100",17,600)
   text("200",97,600)
    text("100",414,600)
    text("300",177,600)
    text("300",257,600)
   text("200",337,600)
   text("300",489,600)
   push()
   
   if (gameState==="START"){
    textSize(25)
   text("PRESS MOUSE TO LAUNCH",70,50)
   }
   pop()
   ground.display()
   ground1.display()
   ground2.display()

   console.log(countLeft)

   if (countLeft===0){
     gameState="END"
   }

  
}

function mousePressed(){
  if (gameState!=="END"){
    if (mouseX>0 && mouseX<width){

  countLeft=countLeft-1
    particles.push(new Particle(mouseX,10,10));
  }
}
  }
  