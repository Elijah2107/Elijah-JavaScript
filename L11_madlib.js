let button1;
let story;
function setup() {
    createCanvas(600,600);
    background("black");
    button1 = createButton(" Click on Me! ")
    button1.position(50, 50);
    button1.size(100,80);
    button1.mousePressed( changeText )
}
function draw() {
    fill("white");
    noStroke();
    rect(100,200,400,300,25);
    fill("red");
    // story = "MINECRAFT";
    textSize(48);
    textAlign(CENTER, CENTER);
    text(story, 300,300);
}