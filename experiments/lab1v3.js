//Setup Canvas//

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(0);
  frame();
  circleParty();
  noLoop();
}

function frame() {
  let colors = [
    color(51, 51, 51),
    color(102, 102, 102),
    color(153, 153, 153),
    color(204, 204, 204),
    color(238, 238, 238),
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
    color(51, 51, 51),
    color(102, 102, 102),
    color(153, 153, 153),
    color(204, 204, 204),
    color(238, 238, 238),
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
