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

function mouseDragged() {

}