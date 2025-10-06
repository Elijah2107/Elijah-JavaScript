let bgcolor = "blue";
let colorPicker;
let username = "Elijah"
let userInput;
function setup() {
    createCanvas(600,600);
    background(bgcolor);
    colorPicker = createColorPicker(bgcolor);
    colorPicker.position(width/2, height/2);
    userInput = createInput(username);
    userInput.position(width/2,height/2 + 50);
    userInput.input(updateName);
}
function updateName() {
    
}
function draw() {
    background (colorPicker.value());
    fill("white");
    rect(100,50,400,200,25);
    fill("black");
    textSize(25);
    text(username, 150, 120);
}
