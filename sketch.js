//variables for wall and bullet
var bullet , wall;

var damage;

//variables for weight and speed
var speed , weight,thickness;

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);

  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  speed = random(223,321);
  weight = random(30, 52);

  bullet = createSprite(50, 200, 50, 50);

  wall = createSprite(1200,200,thickness, height/2);
}

function draw() {
  background("yellow");

  bullet.velocityX = speed;
  //bullet.x = mouseX;
  //bullet.y = mouseY;
  if (isTouching(bullet,wall) ) {
    bullet.velocityX = 0;

    if ( 0.5*weight*speed*speed/(thickness*thickness*thickness) < 10) {
      wall.shapeColor = "green";
    }

    if ( 0.5*weight*speed*speed/(thickness*thickness*thickness) > 10) {
      wall.shapeColor = color(255,0,0);
   }

  } else {
    wall.shapeColor = "white";
    bullet.shapeColor = "white";
  }

  bullet.depth = wall.depth + 1;

  drawSprites();

  console.log(bullet.width/2 + wall.width/2 );

  bullet.debug = true;
  wall.debug = true;
}

function isTouching(obj1,obj2) {
  if (obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2 && 
    obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
      return true ;
    } else {
      return false;
    }
}