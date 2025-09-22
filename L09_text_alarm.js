let xpos;
function setup() {
    createCanvas(600,400);
    background(220);
    xpos = width/2;
}
function draw() {
    translate(width/2,ypos);
    textSize(32);
    fill("black");
    textAlign(CENTER,CENTER);
    text("Bounce!", width/2, height/2);
}