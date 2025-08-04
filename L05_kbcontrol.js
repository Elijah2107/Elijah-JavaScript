// let circleSize = 5;
// let shapeColor = "blue";
let rectSize = 50;
function setup() {
    createCanvas(200,200);
    background(220);
}
function draw() {
    background(220);
    noStroke();
    xpos = 50;
    ypos = 50;
    rect(xpos, ypos, rectSize, rectSize);
}

function mousePressed() {
//     shapeColor = color(random(255), random(255) , random(255));
//     fill(shapeColor);
//     circleSize = 5;
}
function mouseDragged() {
//     circle(mouseX, mouseY, circleSize);
//     circleSize = circleSize + 0.5
}
function keyPressed() {
    // rectSize = 100;
    // if (key === 'r') {
    //     fill("red");
    // }
    // else if (key === 'b') {
    //     fill("blue");
    // }
    // else if (key === 'g') {
    //     fill("green");
    // }
    // else if (key === 'y') {
    //     fill("yellow");
    // }
    // else if (key === 'o') {
    //     fill("orange");
    // }
    // else {
    //     fill("white");
    // }
    if (key === 'c') {
        circle(100,100,100)
    }
    else if (key === 's') {
        
    }

}
function keyReleased() {
    // rectSize = 50;
}