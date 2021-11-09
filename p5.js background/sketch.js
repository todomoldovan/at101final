var star = [];//star array
var offset=8;//offset of the Y position of each shot

function setup() {
  //createCanvas(800, 600)
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
    
  for (var i = 0; i < 800; i++) {
    //make a star array, and the array is a star function.
    star[i] = new Star();
  }
}


function draw() {
  //background color change
  var blue = map(mouseY, 0, height, 54, 14);
  background(26, 28, blue);

  //call the star function
  push();
  translate(width / 2, height / 2);
  for (var i = 0; i < star.length; i++) {
    star[i].show();
  }
  pop();


}

//this funtion draws the stars and makes them move
function Star() {
  
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  
  this.show = function() {
    //make the speed change based on mouseX
    this.speed = map(mouseY, 0, height, 30, 5);
    this.z = this.z - this.speed;

    //draw more stars when they come to the front
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
    }

    //display stars and movement
    fill(255);
    noStroke();
    this.sx = map(this.x / this.z, 0, 1, 0, width);
    this.sy = map(this.y / this.z, 0, 1, 0, height);
    this.r = map(this.z, 0, width, 8, 0);
    ellipse(this.sx, this.sy, this.r, this.r);
  }
}