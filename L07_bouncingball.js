let x = 50;
let y = 150;
let ballSize = 50;
let speedX = 2;
let speedY = 2;
function setup() {
    createCanvas(400,400);
    background(80);
    fill("yellow")

}
    
function draw() {
    //background(80);
    //noStroke()
    circle(x, y, ballSize);
    
    x = x + speedX;
    y = y + speedY;

    if (x > 400-25) {
        speedX = speedX * (-1.1);
        fill(random(0,255), random(0,255), random(0,255));
    }
    if (x < 0+25) {speedX = speedX * (-1.01);
        fill(random(0,255), random(0,255), random(0,255));
    }
    if (y > 400-25) {
        speedY = speedY * (-1.01);
        fill(random(0,255), random(0,255), random(0,255));
    }
    if (y < 0+25) {
        speedY = speedY * (-1.01);
        fill(random(0,255), random(0,255), random(0,255));
    }

    // if (keyIsDown(LEFT_ARROW)) {
    //     x = x-5
    // }
    // if (x < 25) {
    //     x = 25;
    // }
    // if (keyIsDown(RIGHT_ARROW)) {
    //     x = x +5;
    // }
    // if (x > 400-25) {
    //     x = 400-25;
    // }
}