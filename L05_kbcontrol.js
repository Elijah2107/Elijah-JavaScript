// let circleSize = 5;
// let shapeColor = "blue";
let rectSize = 50;
function setup() {
    createCanvas(600,400);
    background(220);
}
function draw() {
    background(220);
    noStroke();
    // fill("blue");
    // if (key === 'c') {
    //     circle(100,100,100);
    // }
    // else if (key === 's') {
    //     rect(100,100,100,100);
    // }
    // else {
    //     triangle(50,350,150,50,350,350);
    // }
    // xpos = 50;
    // ypos = 50;
    // rect(xpos, ypos, rectSize, rectSize);
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
    rectSize = 100;
    if (key === 'r') {
        fill("red");
        CSSNumericValue(width/2, height/2)
    }
    else if (key === 'b') {
        fill("blue");
    }
    else if (key === 'g') {
        fill("green");
    }
    else if (key === 'y') {
        fill("yellow");
    }
    else if (key === 'o') {
        fill("orange");
    }
    else {
        fill("white");
    }


}
function keyReleased() {
    rectSize = 50;
}