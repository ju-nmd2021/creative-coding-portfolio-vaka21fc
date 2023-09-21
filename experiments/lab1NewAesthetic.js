//Setup Canvas//

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(246, 239, 214);
  rainbowFrame();
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
  let numCircles = 4;
  let spacing = 120;

  for (let p = 0; p < 9; p += 1) {
    for (let i = 0; i < numCircles; i += 1) {
      let startAngle = HALF_PI;
      let endAngle = -HALF_PI;

      let fillColor = colors[floor(random(0, 5))];

      fill(fillColor);
      arc(
        1.5 * p * 35 + 40,
        40 + i * spacing,
        55,
        55,
        startAngle,
        endAngle,
        PIE
      );
    }

    for (let i = 0; i < numCircles; i += 1) {
      push();
      let startAngle = -HALF_PI;
      let endAngle = HALF_PI;

      let fillColor = colors[floor(random(0, 5))];

      fill(fillColor);
      arc(
        1.5 * p * 35 + 40,
        100 + i * spacing,
        55,
        55,
        startAngle,
        endAngle,
        PIE
      );
      pop();
    }
  }
}
function mousePressed() {
  loop();
}
