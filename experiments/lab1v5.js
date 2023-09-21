//Setup Canvas//

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(255, 249, 190);
  rainbowFrame();
  squareParty();
  noLoop();
}

function rainbowFrame() {
  let colors = [
    color(188, 100, 123),
    color(221, 171, 67),
    color(137, 98, 41),
    color(90, 62, 47),
    color(208, 97, 46),
  ];
  let numCircles = 5;
  let spacing = 100;

  for (let i = 0; i < numCircles; i += 1) {
    let startAngle = HALF_PI;
    let endAngle = -HALF_PI;

    let fillColor = colors[i];

    fill(fillColor);
    arc(50, 50 + i * spacing, 90, 90, startAngle, endAngle, PIE);
  }

  for (let i = 0; i < numCircles; i += 1) {
    push();
    let startAngle = PI;
    let endAngle = 0;

    let fillColor = colors[i];

    fill(fillColor);
    arc(50 + i * spacing, 50, 90, 90, startAngle, endAngle, PIE);
    pop();
  }

  for (let i = 0; i < numCircles; i += 1) {
    push();
    let startAngle = -HALF_PI;
    let endAngle = HALF_PI;

    let fillColor = colors[4 - i];

    fill(fillColor);
    arc(450, 50 + i * spacing, 90, 90, startAngle, endAngle, PIE);
    pop();
  }
  for (let i = 0; i < numCircles; i += 1) {
    push();
    let startAngle = 0;
    let endAngle = PI;

    let fillColor = colors[4 - i];

    fill(fillColor);
    arc(50 + i * spacing, 450, 90, 90, startAngle, endAngle, PIE);
    pop();
  }
}

function squareParty() {
  let colors = [
    color(188, 100, 123),
    color(221, 171, 67),
    color(137, 98, 41),
    color(90, 62, 47),
    color(208, 97, 46),
  ];
  push();
  noFill();
  strokeWeight(8);
  for (let i = 0; i < 15; i += 1) {
    // The following 2 lines of code was created with the help of Emil Karlsson
    stroke(colors[floor(random(0, 5))]);
    rect(random(100, 400), random(150, 350), random(20, 50), random(20, 50));
  }
  pop();
}

function mousePressed() {
  loop();
}
