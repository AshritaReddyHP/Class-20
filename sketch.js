var rect1,rect2;
function setup() { 
  createCanvas(800,800);
  rect1= createSprite(400, 200, 50, 50);
  rect1.shapeColor= "green"; 
  rect2= createSprite(100, 120, 60, 100);
  rect2.shapeColor= "green";
} 

function draw() {  
  background(255,255,255);
  rect2.x=World.mouseX;
  rect2.y=World.mouseY;
  console.log(rect1.x-rect2.x);
  if(rect2.x-rect1.x<rect1.width/2+rect2.width/2 && rect1.x-rect2.x<rect1.width/2+rect2.width/2
    &&rect2.y-rect1.y<rect1.height/2+rect2.height/2 && rect1.y-rect2.y<rect1.height/2+rect2.height/2s){
    rect1.shapeColor= "yellow";
    rect2.shapeColor= "yellow";
  } 
  else{
    rect1.shapeColor= "green";
    rect2.shapeColor= "green";
  } 
  drawSprites();
}













































































































































