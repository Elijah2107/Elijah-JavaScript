let bgcolor = "purple";
let colorPicker;
function setup() {
    createCanvas(600,600);
    background(bgcolor);
    colorPicker = createColorPicker();
    colorPicker
}
function draw() {
    fill("white");
    rect(100,50,400,100,25);
}