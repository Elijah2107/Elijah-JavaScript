let xpos;
function setup() {
    createCanvas(600,400);
    background(220);
    xpos = width/2;
}
function draw() {
    textSize(32);
    textAlign(CENTER,CENTER);
    text("Bounce!", xpos, height/2);
    xpos = xpos + 0.1;
}