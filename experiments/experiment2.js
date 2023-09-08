let x = 250;
let y = 250;
let speedX = 4;
let speedY = 5;

function setup() {
    createCanvas(500, 500);
    noStroke();
  }
  
  function draw() {
    background(210);
    ellipse(x,y,70);

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