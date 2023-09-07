let x = 100;
let y = 100;
let speedX = 5;
let speedY = 8;

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(255, 255, 255);

  fill(0, 0, 0);
  ellipse(x, y, 80);

  // Check for the walls
  if (x > width || x < 0) {
    speedX *= -1;
  }
  if (y > height || y < 0) {
    speedY *= -1;
  }

  // Add the speed to the ball
  x += speedX;
  y += speedY;
}