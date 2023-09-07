let particles = [];

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(220);
  
  // Add new particles on mouse click
  if (mouseIsPressed) {
    let particle = new Particle(mouseX, mouseY);
    particles.push(particle);
  }
  
  // Update and display particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();
    
    // Remove particles when they go off-screen
    if (particles[i].isOffscreen()) {
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocityX = random(-2, 2);
    this.velocityY = random(-2, 2);
    this.size = random(5, 50);
    this.color = color(random(255), random(255), random(255), random(200));
  }
  
  update() {
    this.x += this.velocityX;
    this.y += this.velocityY;
  }
  
  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }
  
  isOffscreen() {
    return (this.x < 0 || this.x > width || this.y < 0 || this.y > height);
  }
}
