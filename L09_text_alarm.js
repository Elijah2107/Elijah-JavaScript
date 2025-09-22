let xpos;
let velocityX = 4;
function setup() {
    createCanvas(600,400);
    background(220);
    xpos = width/2;
}
function draw() {
    let hour24 = hour();
    let nowMinute
    textSize(32);
    textAlign(CENTER,CENTER);
    fill("red");
    text("hour is " + hour24, width/2, height/2);
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