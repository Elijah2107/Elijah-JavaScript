let hiddenwords = ["craft", "stone", "grass"];
let guessButton;
let guessInput;
let message;
function setup() {
    createCanvas(600,600);
    background("lightblue");
    guessButton = createButton("Subscribe");
    guessButton.size(150,30);
    guessButton.style("background-color", "red");
    guessButton.style("font-size", "20px");
    guessButton.position(400,250);
    guessButton.mousePressed(checkAnswer);
    guessInput = createInput();
    guessInput.size(150,30);
    guessInput.style("font-size", "20px")
    guessInput.position(150,250);
}
function checkAnswer() {
    message = "You guessed it! The hidden word is 'beach'";
}
function draw() {
    background("lightblue");
    textAlign(CENTER,CENTER);
    textSize(30);
    text("Guess the hidden 5-letter word!", width/2, 80);
    text("Attempts: 0", width/2, 120);
    text("Hints: S _ _ _ _", width/2, 160);
    fill("red");
    textSize(24);
    text(message)
}