//Defining my variables
let ballColor;
let balls = [];

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
}
//

function draw() {
  background(240);
  balls.forEach((ball) => {
    ball.draw();
    ball.update();
  });
}

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
    //
    //Ball-speed
    this.x += this.speedX;
    this.y += this.speedY;
  }
}
