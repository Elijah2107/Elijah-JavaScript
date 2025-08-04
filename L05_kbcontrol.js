function setup() {
    createCanvas(600,400)
    background(220)
}
let shapeColor = "red"
function draw() {
    noStroke();
}

function mousePressed() {
    shapeColor = color(random(255), random(255) , random(255))
}
let size = 5
function mouseDragged() {
    circle(mouseX, mouseY, size)
    let size = size + 0.5
}