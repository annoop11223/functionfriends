var fixedrect,movingrect
var ram,ansh,parth,krish
function setup() {
  createCanvas(800,400);
 movingrect= createSprite(400, 200, 80, 30);
 movingrect.shapeColor="red"
 fixedrect=createSprite(200,200,50,50)
 fixedrect.shapeColor= "red"
 ram = createSprite(200,100,80,30)
ram.shapeColor="green"
ansh = createSprite(150,240,80,30)
ansh.shapeColor="green"
parth = createSprite(90,150,80,30)
parth.shapeColor="green"
krish = createSprite(350,250,80,30)
krish.shapeColor="green"
}

function draw() {
  background(0);  
movingrect.x= mouseX
movingrect.y=  mouseY
if(istouching(ansh,movingrect)){
 ansh.shapeColor="blue"
movingrect.shapeColor = "blue"
}
else{
 ansh.shapeColor="red"
movingrect.shapeColor = "red"
}
  drawSprites();
}
