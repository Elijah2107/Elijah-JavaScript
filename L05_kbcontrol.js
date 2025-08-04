// let circleSize = 5;
// let shapeColor = "blue";
let rectSize = 50;
function setup() {
    createCanvas(600,400);
    background(220);
}
function draw() {
    noStroke();
    xpos = 50;
    ypos = 50;
}

function mousePressed() {
//     shapeColor = color(random(255), random(255) , random(255));
//     fill(shapeColor);
//     circleSize = 5;
}
function mouseDragged() {
//     circle(mouseX, mouseY, circleSize);
//     circleSize = circleSize + 0.5
}
function keyPressed() {
    rectSize = 100;
}
function keyReleased() {
    rectSize = 50;
}