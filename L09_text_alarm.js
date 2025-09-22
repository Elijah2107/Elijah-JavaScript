let xpos;
let velocityX = 0.6;
function setup() {
    createCanvas(600,400);
    background(220);
    xpos = width/2;
}
function draw() {
    textSize(32);
    textAlign(CENTER,CENTER);
    text("Bounce!", xpos, height/2);
    xpos = xpos + velocityX;
    if(xpos > width) {
        velocityX = velocityX *-1;
    }
}