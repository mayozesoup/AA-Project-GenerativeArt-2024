
let x
function setup() {
  createCanvas(400, 600);
  for (let i = 0; i < 200; i++) {
        particles.push(new Particle());
      }
}

let particles = [];
function draw() {
  //vibrato
  let x_offset = random(-15,15);
  let y_offset = random(-15,15);
  
  // Define colors for the gradient
  const color1 = color(138, 43, 226); // Purple color
  const color2 = color(0, 0, 255); // Blue color

  // Draw gradient background
  setGradient(0, 0, width, height, color1, color2);
  
  // Draw lantern body
  fill(255, 0, 0); // Red color
  stroke(0);
  rectMode(CENTER);
  rect(width / 2 + x_offset, height / 2 + y_offset, 150, 180, 40);
  
  // Draw wrinkles inside the lantern body
  stroke(0);
  strokeWeight(2);
  
  const startY = height / 2 - 80 + 10; // Starting y-coordinate of the wrinkles
  const endY = height / 2 + 80 - 10; // Ending y-coordinate of the wrinkles
  const numWrinkles = 9; // Number of wrinkles
  
  const step = (endY - startY) / (numWrinkles - 1); // Distance between each wrinkle
  
  for (let i = 0; i < numWrinkles; i++) {
    const y = startY + i * step;
    line(width / 2 - 70 + x_offset, y + y_offset, width / 2 + 70 + x_offset, y + y_offset);
  }
  
  // Draw lantern top
  fill(255, 255, 0); // Yellow color
  stroke(0);
  rect(width/2 + x_offset, height/2-97 + y_offset, 60, 20, 3)
  
  //Draw lantern high string
  fill('black');
  line(width / 2 + x_offset, 0 , width / 2 + y_offset, height/2-108);
  
  
  // Draw lantern bottom
  fill(255, 255, 0); // Yellow color
  stroke(0);
  rect(width/2 + x_offset, height/2+97 + y_offset, 60, 20, 3)
  rect(width/2-25 + x_offset, height/2+124.5 + y_offset, 5, 35)
  rect(width/2-15 + x_offset, height/2+124.5 + y_offset, 5, 35)
  rect(width/2-5 + x_offset, height/2+124.5 + y_offset, 5, 35)
  rect(width/2+5 + x_offset, height/2+124.5 + y_offset, 5, 35)
  rect(width/2+15 + x_offset, height/2+124.5 + y_offset, 5, 35)
  rect(width/2+25 + x_offset, height/2+124.5 + y_offset, 5, 35)



  
  // Draw hanging string
  stroke(0);
  strokeWeight(2);
  line(width / 2 + x_offset, 405 + y_offset, width / 2, height);
  
  // Draw tassel
  fill(0, 0, 255); // Blue color
  noStroke();
  const tasselX = width / 2 + x_offset;
  const tasselY = height + y_offset;
  const tasselRadius = 20;
  const tasselLength = 80;
  
  fill(255, 0, 0); // Red color
  ellipse(tasselX, tasselY, tasselRadius, tasselRadius);
  
  stroke(0);
  strokeWeight(2);
  line(tasselX, tasselY, tasselX, tasselY + tasselLength);
  
  //particles for background
  
  for (let particle of particles) {
        particle.update();
        particle.display();
      }
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




class Particle {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.color = color(random(255, 204), random(100, 200), random(150, 255), 150);
    this.size = random(15, 30);
    this.numPoints = 5; // Number of points in the star
    this.innerRadius = 5; // Inner radius of the star
  }

  update() {
    this.position.add(this.velocity);

    if (this.position.x > width || this.position.x < 0) {
      this.velocity.x *= -1;
    }

    if (this.position.y > height || this.position.y < 0) {
      this.velocity.y *= -1;
    }
  }

  display() {
    noStroke();
    fill(this.color);

    beginShape();
    for (let i = 0; i < this.numPoints * 2; i++) {
      const angle = map(i, 0, this.numPoints * 2, 0, TWO_PI);
      const radius = i % 2 === 0 ? this.size / 2 : this.innerRadius;
      const x = this.position.x + radius * cos(angle);
      const y = this.position.y + radius * sin(angle);
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}
