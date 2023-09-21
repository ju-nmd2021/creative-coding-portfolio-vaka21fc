//Setup Canvas//

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(255, 249, 190);
  frame();
  squareParty();
  noLoop();
}

function frame() {
  let colors = [
    color(188, 100, 123),
    color(221, 171, 67),
    color(137, 98, 41),
    color(90, 62, 47),
    color(208, 97, 46),
  ];
  let numRect = 5;
  let spacing = 97;

  for (let i = 0; i < numRect; i += 1) {

    let fillColor = colors[i];

    fill(fillColor);
    rect(10, 10 + i * spacing, 90, 90);
  }

  for (let i = 0; i < numRect; i += 1) {
    push();


    let fillColor = colors[i];

    fill(fillColor);
    rect(10 + i * spacing, 10, 90, 90);
    pop();
  }

  for (let i = 0; i < numRect; i += 1) {
    push();
    let fillColor = colors[4 - i];

    fill(fillColor);
    rect(398, 10 + i * spacing, 90, 90);
    pop();
  }
  for (let i = 0; i < numRect; i += 1) {
    push();
    let fillColor = colors[4 - i];

    fill(fillColor);
    rect(10 + i * spacing, 399, 90, 90);
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
    rect(random(150, 350), random(150, 350), random(20, 40), random(20, 40));
  }
  pop();
}

function mousePressed() {
  loop();
}
