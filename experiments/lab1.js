//Setup Canvas//

function setup() {
    createCanvas(500,500);
}

function draw() {
    background(246, 239, 214);

// Color Palette//
    let colors = [
        color(178, 93, 166),
        color(102, 136, 195),
        color(72, 165, 106),
        color(234, 175, 65),
        color(206, 74, 74)
      ];

let numCircles = 5;
let spacing = 100;

// Half-circles//
for (let i = 0; i < numCircles; i++) {
  let centerX = 50;
  let centerY = 50+i * spacing;
  let radius = 45;
  
  let startAngle = HALF_PI;
  let endAngle = -HALF_PI;
  
  let fillColor = colors[i];
  
  fill(fillColor);
  arc(centerX, centerY, radius * 2, radius * 2, startAngle, endAngle, PIE);
}

//Full Circles
for (let i = 0; i < numCircles; i++) {
    let centerX = 100;
    let centerY = 50+i * spacing;
    let width = 90;
 
    let fillColor = colors[i];
    
    fill(fillColor);
    ellipse(centerX,centerY,90,90);
  }
}