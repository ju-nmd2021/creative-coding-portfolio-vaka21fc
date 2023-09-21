//Defining the color palette and notes for the bubbles//
let colors;
let notes;
let bubbles;
let synth;
//Canvas Setup//
function setup() {
  createCanvas(500, 500);
  noStroke();
  colors = [
    color(196, 180, 246, 150),
    color(176, 212, 234, 150),
    color(191, 238, 207, 150),
    color(247, 249, 210, 150),
    color(253, 250, 247, 150),
  ];
  bubbles = [];
  notes = ["C3", "G3", "F3", "A3", "B3"];
  synth = new Tone.Synth().toDestination();
  synth.oscillator.type = "triangle";
}

function draw() {
  background(240);
  bubbles.forEach((bubble) => {
    bubble.draw();
    bubble.update();
  });
}

//Generating new bubbles when the mouse is pressed//
function mousePressed() {
  let bubble = new Bubble(mouseX, mouseY, random(20, 100));
  bubbles.push(bubble);
}

function bubbleSound(bubbleColor) {
  if (bubbleColor == colors[0]) {
    synth.triggerAttackRelease(notes[0], "4n");
  }
  if (bubbleColor == colors[1]) {
    synth.triggerAttackRelease(notes[1], "4n");
  }
  if (bubbleColor == colors[2]) {
    synth.triggerAttackRelease(notes[2], "4n");
  }
  if (bubbleColor == colors[3]) {
    synth.triggerAttackRelease(notes[3], "4n");
  }
  if (bubbleColor == colors[4]) {
    synth.triggerAttackRelease(notes[4], "4n");
  }
}

class Bubble {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.speedX = random(-2, 2);
    this.speedY = random(-2, 2);
    if (this.speedX == 0) {
      this.speedX += 3;
    }
    if (this.speedY == 0) {
      this.speedY += 3;
    }
    this.bubbleColor = random(colors);
    bubbleSound(this.bubbleColor);
  }
  draw() {
    fill(this.bubbleColor);
    ellipse(this.x, this.y, this.width);
  }
  update() {
    if (this.x > width || this.x < 0) {
      this.speedX *= -1;
      this.bubbleColor = random(colors);
    }
    if (this.y > height || this.y < 0) {
      this.speedY *= -1;
      this.bubbleColor = random(colors);
    }

    //Bubble-speed
    this.x += this.speedX;
    this.y += this.speedY;
  }
}
