let button1;
function setup() {
    createCanvas(600,400);
    background("black");
    button1 = createButton(" Click on Me! ")
    button1.position(50, 50);
    button1.size(100,80);
}
function draw() {
    fill("white");
    noStroke();
    rect(100,200)
}