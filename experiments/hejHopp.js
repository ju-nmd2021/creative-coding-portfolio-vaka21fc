function setup() {
    createCanvas(innerWidth, innerHeight);
    noFill();
  }
  
  function draw() {
    background(220);
    
    for (let i = 0; i < width; i += 20) {
      for (let j = 0; j < height; j += 20) {
        let r = map(mouseX, 0, width, 0, 255);
        let g = map(mouseY, 0, height, 0, 255);
        let b = random(255);
        stroke(r, g, b);
        
        let size = map(sin(frameCount * 0.05), -1, 1, 5, 20);
        ellipse(i, j, size, size);
      }
    }
  }

  function mouseDragged() {
    redraw();
  }