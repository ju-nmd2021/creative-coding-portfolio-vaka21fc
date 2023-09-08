function setup() {
    createCanvas(500,500);
}

function draw() {
    background(255);

    for (let i = 0; i < width; i += 10) {
        for (let j = 0; j < height; j += 10) {
            let r = random(255);
            let g = random(255);
            let b = random(255);
          fill(r, g, b);
          ellipse(i, j, 8, 8);
        }
      }
}