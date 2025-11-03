let hiddenwords = ["craft", "stone", "grass"];
let guessButton;
let guessInput;
function setup() {
    createCanvas(600,600);
    background("lightblue");
    guessButton = createButton("Guess");
    guessButton.position(400,180);
    guessInput = createInput();
    guessInput.position(150,180);
}
function draw() {
    textAlign(CENTER,CENTER);
    textSize(30);
    text("Guess the hidden 5-letter word!", width/2)
}