//Setup Canvas//

function setup() {
    createCanvas(500, 445);
    noStroke();
  }
  
  function draw() {
    background(246, 239, 214);
    rainbowFrame();
    rectangleParty();
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
    let numCircles = 3;
    let spacing = 145;
  
for   (let p=0; p<7; p+=1) { 
    for (let i = 0; i < numCircles; i += 1) {
      let startAngle = HALF_PI;
      let endAngle = -HALF_PI;
  
      let fillColor = (colors[floor(random(0, 5))]);
  
      fill(fillColor);
      arc(2 * p * 35 + 40, 40 + i * spacing, 70, 70, startAngle, endAngle, PIE);
    }
  
    for (let i = 0; i < numCircles; i += 1) {
      push();
      let startAngle = -HALF_PI;
      let endAngle = HALF_PI;
  
      let fillColor = (colors[floor(random(0, 5))]);
  
      fill(fillColor);
      arc(2 * p * 35 + 40, 112.5 + i * spacing, 70, 70, startAngle, endAngle, PIE);
      pop();
    }
}
  }

  
  function rectangleParty() {
    let colors = [
      color(178, 93, 166),
      color(102, 136, 195),
      color(72, 165, 106),
      color(234, 175, 65),
      color(206, 74, 74),
    ];
    push();
    // noFill();
    // strokeWeight(8);
    // for (let i = 0; i < 15; i += 1) {
    //   // The following 2 lines of code was created with the help of Emil Karlsson
    //   stroke(colors[floor(random(0, 5))]);
    //   rect(random(100, 400), random(150, 350), random(20, 50), random(20, 50));
    // }
    pop();
  }
  
  function mousePressed() {
    loop();
  }
  