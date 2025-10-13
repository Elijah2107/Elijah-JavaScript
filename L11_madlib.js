let button1;
let button2;
let story;
let sometextInput;
function setup() {
    createCanvas(600,600);
    background("black");
    button1 = createButton(" Click on Me! ")
    button1.position(250, 50);
    button1.size(100,80);
    button1.mousePressed( changeText );
   // story = 0;
    sometextInput = createInput();
    sometextInput.position(50,60);
    sometextInput = createInput();
    sometextInput.position(50,120);
    sometextInput = createInput();
    sometextInput.position(50,180);
}
function changeText() {
    story = sometextInput.value();
}
function draw() {
    fill("white");
    noStroke();
    rect(100,200,400,300,25);
    fill("red");
    // story = "MINECRAFT";
    textSize(18);
    textAlign(RIGHT, CENTER);
    text("Enter noun:", 180,60)
}