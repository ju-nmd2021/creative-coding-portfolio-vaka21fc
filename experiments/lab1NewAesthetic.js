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
    color(124, 38, 41),
    color(219, 107, 48),
    color(237, 155, 51),
    color(101, 102, 53),
    color(78, 53, 36),
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
