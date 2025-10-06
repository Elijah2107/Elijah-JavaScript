let bgcolor = "purple";
let colorPicker;
function setup() {
    createCanvas(600,400);
    background(bgcolor);
    colorPicker = createColorPicker();
    colorPicker.position(width/2, height/2);
}
function draw() {
    background (colorPicker.value());
    fill("white");
    rect(100,50,400,100,25);
}
