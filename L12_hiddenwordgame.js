let hiddenwords = ["craft", "stone", "grass"];
let guessButton;
let guessInput;
function setup() {
    createCanvas(600,600);
    background("lightblue");
    guessButton = createButton("Guess");
    guessButton.position(400,250);
    guessInput = createInput();
    guessInput.position(150,250);
}
function draw() {
    textAlign(CENTER,CENTER);
    textSize(30);
    text("Guess the hidden 5-letter word!", width/2, 80);
    text("Attempts: 0", width/2, 120);
    text("Hints: S _ _ _ _", width/2, 160);
}