let xpos;
let velocityX = 1.1;
function setup() {
    createCanvas(600,400);
    background(220);
    xpos = width/2;
}
function draw() {
    background(220);
    textSize(32);
    textAlign(CENTER,CENTER);
    text("Bounce!", xpos, height/2);
    xpos = xpos + velocityX;
    if (xpos > width) {
        velocityX = velocityX *-1.1;
    }
    else if (xpos < 0) {
        velocityX = velocityX *-1.1;
    }
}