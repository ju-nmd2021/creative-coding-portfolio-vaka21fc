function setup() {
  createCanvas(500, 500);
  noFill();
}

function draw() {
  background(0);

  for (let i = 0; i < width; i += 20) {
    for (let j = 0; j < height; j += 20) {
      let r = random(255);
      let g = random(255);
      let b = random(255);
      stroke(r, g, b);
      strokeWeight(2);
ellipse(i,j,8,8);
    }
  }
}
