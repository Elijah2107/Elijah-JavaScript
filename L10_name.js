let bgcolor = "blue";
let colorPicker;
let username = "Elijah"
let userInput;
let age = 12;
let ageInput;
function setup() {
    createCanvas(600,600);
    background(bgcolor);
    colorPicker = createColorPicker(bgcolor);
    colorPicker.position(width/2, height/2);
    userInput = createInput(username);
    userInput.position(width/2,height/2 + 50);
    userInput.input(updateName);
    ageInput = createInput(age);
    ageInput.position(width/2,height/2 + 80)
    userInput.input(update);
}
function updateAge()
function updateName() {
    username = userInput.value();
}
function draw() {
    background (colorPicker.value());
    fill("white");
    rect(100,50,400,200,25);
    fill("black");
    textSize(25);
    textAlign(LEFT,CENTER);
    text(username, 150, 120);
    textAlign(RIGHT,CENTER);
    textSize(18);
    text("Change Color here: ", width/2, height/2+10);
    text("Enter your name: ",  width/2, height/2+62);
    text("Enter your age: ", width/2, height/2+82);
}
