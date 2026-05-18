var socket;

function setup() {
 createCanvas(600, 600);
 background(51);

 socket = io.connect('http://localhost:3000')
}

function draw() {
    noStroke()
    ellipse(mouseX, mouseY, 30, 30);
 
}