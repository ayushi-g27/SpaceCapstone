var bg;
var asteroid, laser, spaceship;
var asteroids, asteroidImg;
var spaceshipImage;
var laserImg;
var spawnLasers;
var spawnAsteroids;
var asteroidGroup;
var laserGroup;

function preload(){
bg = loadImage("sprites/Backgroun.png") 
asteroidImg = loadImage("sprites/asteroid.png")
laserImg = loadImage("sprites/laser.png")
spaceshipImage = loadImage("sprites/spaceship.png")



}


function setup() {
createCanvas(displayWidth - 250,displayHeight - 250);

spaceship = createSprite(500, 587);
spaceship.addImage(spaceshipImage);
spaceship.scale = 0.2;

asteroidGroup = new Group();
laserGroup = new Group();



}

function draw() {
  background(bg);

  //laser.x = spaceship.x
  //laser.y = 575
  /*console.log(spaceship.depth)
  console.log(laser.depth)*/

 // laser.depth = spaceship.depth
  //spaceship.depth += 1;

  
spawnAsteroids();

  if(keyDown("RIGHT_ARROW")){
  
    spaceship.x += 11;

  }
  
  if(keyDown("LEFT_ARROW")){
  
    spaceship.x -= 11;

  }


  if(keyDown("SPACE")){
    spawnLasers();
  }

  if(asteroidGroup.isTouching(laserGroup)){

    asteroidGroup.destroyEach()
    //asteroid.visible = false;
    laserGroup.destroyEach()
    console.log("hola como estas")

  }


  if(asteroidGroup.isTouching(spaceship)){
    textSize(60)
    fill("white")
    text("GAME OVER!", 500,300)
    

    asteroidGroup.velocityXEach(0)
    laserGroup.velocityXEach(0)

  }


  drawSprites();
}

function spawnLasers(){
  if(frameCount % 20 === 0){

    laser = createSprite(300, displayHeight + 200);
    laser.addImage(laserImg);
    laser.scale = 0.2;
    laser.velocityY = -40;
    laser.x = Math.round(random(spaceship.x+3,spaceship.x+3))
    laser.depth = spaceship.depth
    spaceship.depth += 1;
    laserGroup.add(laser);
  }

}

function spawnAsteroids(){

    if(frameCount % 70 === 0){

      asteroid = createSprite(300, 0)
      asteroid.addImage(asteroidImg);
      asteroid.scale = 0.08;
      asteroid.y = -43;
      asteroid.velocityY = 4;
      asteroid.x = Math.round(random(200,displayWidth-250));
     asteroidGroup.add(asteroid)

    }


}


