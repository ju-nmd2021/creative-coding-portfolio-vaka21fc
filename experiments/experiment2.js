//Defining my variables
let x = 250;
let y = 250;
let speedX = 4;
let speedY = 5;
let ballColor;
//

//Defining the color palette for my ball//
let colors = [
  color(112, 214, 255),
  color(255, 112, 166),
  color(255, 151, 112),
  color(255, 214, 112),
  color(233, 255, 112),
];
//

//Canvas Setup//
function setup() {
  createCanvas(500, 500);
  ballColor = random(colors);
}
//

function draw() {
  background(240);
  fill(ballColor);
  ellipse(x, y, 70);

  //Defining the walls as the limit for the balls movement, and adding the color change each time the ball hits a wall
  if (x > width || x < 0) {
    speedX *= -1;
    ballColor = random(colors);
  }
  if (y > height || y < 0) {
    speedY *= -1;
    ballColor = random(colors);
  }
  //
  //Ball-speed
  x += speedX;
  y += speedY;
  //
}
