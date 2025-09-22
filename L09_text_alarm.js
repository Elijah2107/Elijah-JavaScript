let xpos;
let velocityX = 4;
function setup() {
    createCanvas(600,400);
    background(220);
    xpos = width/2;
}
function draw() {
    background(220);
    let aHour = hour() -12;
    aHour = nf
    let aMinute = minute();
    let aSecond = second();
    textSize(32);
    textAlign(CENTER,CENTER);
    fill("red");
    text("time now " + aHour + ":" + aMinute + ":" + aSecond, width/2, height/2);
    //text("minute is " + nowMinute, width/2, height/2);
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