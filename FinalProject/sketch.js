function setup() {
  createCanvas(100, 100);

  describe('A pink flower on a gray background.');
}

function draw() {
  background(200);

  // Call the drawFlower() function.
  drawFlower();
}

// Declare a function that draws a flower at the
// center of the canvas.
function drawFlower() {
  // Style the text.
  textAlign(CENTER, CENTER);
  textSize(20);

  // Draw a flower emoji.
  text('🌸', 50, 50);
}