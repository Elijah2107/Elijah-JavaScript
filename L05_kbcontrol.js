let circleSize = 5;
let shapeColor = "blue";
function setup() {
    createCanvas(600,400)
    background(220)
}
function draw() {
    noStroke();
}

function mousePressed() {
    shapeColor = color(random(255), random(255) , random(255));
    fill(shapeColor);
    circleSize = 5;
}
function mouseDragged() {
    circle(mouseX, mouseY, circleSize);
    circleSize = cir
}