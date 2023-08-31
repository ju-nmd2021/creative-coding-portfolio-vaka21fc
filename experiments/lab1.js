// Rainbow color Palette//
let colors = [
    color(178, 93, 166),
    color(102, 136, 195),
    color(72, 165, 106),
    color(234, 175, 65),
    color(206, 74, 74),
  ];

//Setup Canvas//

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(246, 239, 214);
  rainbowFrame();
  eye2();
}

function rainbowFrame() {
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
function eye2() {
    fill(0);
    ellipse(200,200,30,50);
    beginShape();
    vertex(300, 200);
    bezierVertex(300, 200, 300, 150, 350, 180);
    endShape();
}

