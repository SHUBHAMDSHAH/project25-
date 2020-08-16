function setup() {
  createCanvas(800,400);
   raindrop1 = createSprite(400, 0, 3,20);
   raindrop2 = createSprite(100, 0, 3,20);
   raindrop3 = createSprite(200, 0, 3,20);
   raindrop4 = createSprite(300, 0, 3,20);
   raindrop5 = createSprite(500, 0, 3,20);
   raindrop6 = createSprite(600, 0, 3,20);
   raindrop7 = createSprite(700, 0, 3,20);
   raindrop8 = createSprite(800, 0, 3,20);
   raindrop9 = createSprite(450, 0, 3,20);
   raindrop10 = createSprite(150,0, 3,20);

   raindrop1.velocityY = 2;
   raindrop2.velocityY = 2;
   raindrop3.velocityY = 2;
   raindrop4.velocityY = 2;
   raindrop5.velocityY = 2;
   raindrop6.velocityY = 2;
   raindrop7.velocityY = 2;
   raindrop8.velocityY = 2;
   raindrop9.velocityY = 2;
   raindrop10.velocityY = 2;

   raindrop1 = random(10,20);
   raindrop2 = random(50,60);
   raindrop3 = random(110,160);
   raindrop4 = random(30,60);
   raindrop5 = random(200,250);
   raindrop6 = random(250,300);
   raindrop7 = random(300,350);
   raindrop8 = random(350,400);
   raindrop9 = random(10,50);
   raindrop10 = random(50,100);

   raindrop1.shapeColor = "red";
   raindrop2.shapeColor = "blue";
   raindrop3.shapeColor = "green";
   raindrop4.shapeColor = "white";
   raindrop5.shapeColor = "orange";
   raindrop6.shapeColor = "pink";
   raindrop7.shapeColor = "purple";
   raindrop8.shapeColor = "blue";
   raindrop9.shapeColor = "red";
   raindrop10.shapeColor = "pink";

}

function draw() {
  background(0);  

  drawSprites();
}