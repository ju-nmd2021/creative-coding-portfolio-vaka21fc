//Defining the color palette for my balls//
let colors; 
let balls;
//Canvas Setup//
function setup() {
  createCanvas(500, 500);
  colors = [
    color(112, 214, 255),
    color(255, 112, 166),
    color(255, 151, 112),
    color(255, 214, 112),
    color(233, 255, 112),
  ];
  balls = [];
}

function draw() {
  background(240);
  balls.forEach((ball) => {
    ball.draw();
    ball.update();
  });
}

//Generating new balls when the mouse is pressed//
function mousePressed() {
  let ball = new Ball(mouseX, mouseY, random(20, 100));
  balls.push(ball);
}

class Ball {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.speedX = random(-12, 12);
    this.speedY = random(-12, 12);
    if(this.speedX == 0){
      this.speedX += 3;
    }
    if(this.speedY == 0){
      this.speedY += 3;
    }
    this.ballColor = random(colors);
  }
  draw() {
    fill(this.ballColor);
    ellipse(this.x, this.y, this.width);
  }
  update() {
    if (this.x > width || this.x < 0) {
      this.speedX *= -1;
      this.ballColor = random(colors);
    }
    if (this.y > height || this.y < 0) {
      this.speedY *= -1;
      this.ballColor = random(colors);
    }

    //Ball-speed
    this.x += this.speedX;
    this.y += this.speedY;
  }
}
