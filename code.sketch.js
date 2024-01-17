function setup() {
  createCanvas(400, 600);
}

function draw() {
  // Define colors for the gradient
  const color1 = color(138, 43, 226); // Purple color
  const color2 = color(0, 0, 255); // Blue color

  // Draw gradient background
  setGradient(0, 0, width, height, color1, color2);
  
  // Draw lantern body
  fill(255, 0, 0); // Red color
  stroke(0);
  rectMode(CENTER);
  rect(width / 2, height / 2, 150, 180);
  
  // Draw wrinkles inside the lantern body
  stroke(0);
  strokeWeight(2);
  
  const startY = height / 2 - 80 + 10; // Starting y-coordinate of the wrinkles
  const endY = height / 2 + 80 - 10; // Ending y-coordinate of the wrinkles
  const numWrinkles = 9; // Number of wrinkles
  
  const step = (endY - startY) / (numWrinkles - 1); // Distance between each wrinkle
  
  for (let i = 0; i < numWrinkles; i++) {
    const y = startY + i * step;
    line(width / 2 - 70, y, width / 2 + 70, y);
  }
  
  // Draw lantern top
  fill(255, 255, 0); // Yellow color
  stroke(0);
  beginShape();
  vertex(width / 2 - 75, height / 2 - 90);
  vertex(width / 2 + 75, height / 2 - 90);
  vertex(width / 2 + 45, height / 2 - 140);
  vertex(width / 2 - 45, height / 2 - 140);
  endShape(CLOSE);
  
  // Draw lantern bottom
  fill(255, 255, 0); // Yellow color
  stroke(0);
  beginShape();
  vertex(width / 2 - 75, height / 2 + 90);
  vertex(width / 2 + 75, height / 2 + 90);
  vertex(width / 2 + 45, height / 2 + 140);
  vertex(width / 2 - 45, height / 2 + 140);
  endShape(CLOSE);
  
  // Draw hanging string
  stroke(0);
  strokeWeight(2);
  line(width / 2, 440, width / 2, height);
  
  // Draw tassel
  fill(0, 0, 255); // Blue color
  noStroke();
  const tasselX = width / 2;
  const tasselY = height;
  const tasselRadius = 20;
  const tasselLength = 80;
  
  fill(255, 0, 0); // Red color
  ellipse(tasselX, tasselY, tasselRadius, tasselRadius);
  
  stroke(0);
  strokeWeight(2);
  line(tasselX, tasselY, tasselX, tasselY + tasselLength);
}

// Function to draw a gradient
function setGradient(x, y, w, h, color1, color2) {
  noFill();
  for (let i = y; i <= y + h; i++) {
    const inter = map(i, y, y + h, 0, 1.5);
    const c = lerpColor(color2, color1, inter);
    stroke(c);
    line(x, i, x + w, i);
  }
}
