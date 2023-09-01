//Setup Canvas//

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(246, 239, 214);
  rainbowFrame();
  circleParty();
  noLoop();
}

function rainbowFrame() {
  let colors = [
    color(178, 93, 166),
    color(102, 136, 195),
    color(72, 165, 106),
    color(234, 175, 65),
    color(206, 74, 74),
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

function circleParty() {
  let colors = [
    color(178, 93, 166),
    color(102, 136, 195),
    color(72, 165, 106),
    color(234, 175, 65),
    color(206, 74, 74),
  ];
  push();
  noFill();
  strokeWeight(8);
  for (let i = 0; i < 15; i += 1) {
    // The following 2 lines of code was created with the help of Emil Karlsson
    stroke(colors[floor(random(0, 5))]);
    ellipse(random(100, 400), random(150, 350), random(20, 50), random(20, 50));
  }
  pop();
}

function mousePressed() {
  loop();
}
