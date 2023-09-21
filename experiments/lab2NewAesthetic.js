//Defining the color palette and notes for the balls//
let colors;
let notes;
let balls;
let synth;
//Canvas Setup//
function setup() {
  createCanvas(500, 500);
  colors = [
    color(152,0,0),
    color(152,69,0),
    color(167,127,3),
    color(12,137,0),
    color(0,75,131),
  ];
  balls = [];
  notes = ["D2", "E2", "F2", "G2", "A2"];
  synth = new Tone.Synth().toDestination();
  synth.oscillator.type = 'triangle';
}

function draw() {
  background(40);
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

function ballSound(ballColor) {
  if (ballColor == colors[0]) {
    synth.triggerAttackRelease(notes[0], "4n");
  }
  if (ballColor == colors[1]) {
    synth.triggerAttackRelease(notes[1], "4n");
  }
  if (ballColor == colors[2]) {
    synth.triggerAttackRelease(notes[2], "4n");
  }
  if (ballColor == colors[3]) {
    synth.triggerAttackRelease(notes[3], "4n");
  }
  if (ballColor == colors[4]) {
    synth.triggerAttackRelease(notes[4], "4n");
  }
}

class Ball {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.speedX = random(-12, 12);
    this.speedY = random(-12, 12);
    if (this.speedX == 0) {
      this.speedX += 3;
    }
    if (this.speedY == 0) {
      this.speedY += 3;
    }
    this.ballColor = random(colors);
    ballSound(this.ballColor);
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
