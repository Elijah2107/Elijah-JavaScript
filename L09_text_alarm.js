let xpos;
let velocityX = 4;
let sfx;
let bgcolor = "pink";
let objectID;
let counter = 157680000000;
function preload() {
    sfx = loadSound("assets/Win.mp3");
}
function setup() {
    createCanvas(600,400);
    background(bgcolor);
    xpos = width/2;
    
}
function countdown() {
    counter--;
    counter = constrain(counter, 0, 157680000000);
    if (counter === 0) {
        sfx.play();
        clearInterval(objectID);
    }
}

function draw() {
    background(bgcolor);
    let aHour = hour() -12;
    aHour = nf(aHour,2);
    let aMinute = minute();
    aMinute = nf(aMinute, 2);
    let aSecond = second();
    aSecond = nf(aSecond, 2)
    textSize(32);
    textAlign(CENTER,CENTER);
    fill("red");
    text("time now " + aHour + ":" + aMinute + ":" + aSecond, width/2, 100);
    text("Countdown Timer:", width/2, 130);
    text(counter, width/2, 225);
    text("Click me to start the timer", width/2, 200);
    //pi = 3.14159265358979;
    //console.log(nf(pi,1,3));

}
function mousePressed() {
    //sfx.play();
    if(counter === 1000) {
        objectID = setInterval(countdown, 1000);
    }
    
}
function keyPressed() {
    if (keyCode === 32) {
        bgcolor = color(random(255), random(255), random(255));
    }
}
// function draw() {
//     background(220);
//     textSize(32);
//     textAlign(CENTER,CENTER);
//     text("Bounce!", xpos, height/2);
//     xpos = xpos + velocityX;
//     if (xpos > width) {
//         velocityX = velocityX *-1;
//     }
//     else if (xpos < 0) {
//         velocityX = velocityX *-1;
//     }
// }