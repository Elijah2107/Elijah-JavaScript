
function setup() {
    createCanvas(600,400);
    background(220);
}
function draw() {
    translate(width/2,ypos);
    textSize(32);
    fill("black");
    textAlign(CENTER,CENTER);
    text("Bounce!");
}