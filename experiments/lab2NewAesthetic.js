//Defining the color palette and notes for the squares//
let colors;
let notes;
let squares;
let synth;
//Canvas Setup//
function setup() {
  createCanvas(500, 500);
  colors = [
    color(152, 0, 0),
    color(152, 69, 0),
    color(167, 127, 3),
    color(12, 137, 0),
    color(0, 75, 131),
  ];
  squares = [];
  notes = ["D2", "E2", "F2", "G2", "A2"];
  synth = new Tone.Synth().toDestination();
  synth.oscillator.type = "triangle";
}

function draw() {
  background(40);
  squares.forEach((square) => {
    square.draw();
    square.update();
  });
}

//Generating new squares when the mouse is pressed//
function mousePressed() {
  let square = new Square(mouseX, mouseY, random(20, 100));
  squares.push(square);
}

function squareSound(squareColor) {
  if (squareColor == colors[0]) {
    synth.triggerAttackRelease(notes[0], "4n");
  }
  if (squareColor == colors[1]) {
    synth.triggerAttackRelease(notes[1], "4n");
  }
  if (squareColor == colors[2]) {
    synth.triggerAttackRelease(notes[2], "4n");
  }
  if (squareColor == colors[3]) {
    synth.triggerAttackRelease(notes[3], "4n");
  }
  if (squareColor == colors[4]) {
    synth.triggerAttackRelease(notes[4], "4n");
  }
}

class Square {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.speedX = random(-3, 3);
    this.speedY = random(-3, 3);
    if (this.speedX == 0) {
      this.speedX += 3;
    }
    if (this.speedY == 0) {
      this.speedY += 3;
    }
    this.squareColor = random(colors);
    squareSound(this.squareColor);
  }
  draw() {
    fill(this.squareColor);
    rect(this.x, this.y, this.width);
  }
  update() {
    if (this.x > width || this.x < 0) {
      this.speedX *= -1;
      this.squareColor = random(colors);
    }
    if (this.y > height || this.y < 0) {
      this.speedY *= -1;
      this.squareColor = random(colors);
    }

    //Square-speed
    this.x += this.speedX;
    this.y += this.speedY;
  }
}
