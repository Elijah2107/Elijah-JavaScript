// let circleSize = 5;
let xpos = 100;
let ypos = 100;
// let rectSize = 50;
function setup() {
    createCanvas(600,400);
    background(220);
}
function draw() {
    // background(220);
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
    background(220);
    if (keyIsDown(RIGHT_ARROW)) {
        xpos = xpos + 5;
    }
    if (keyIsDown(LEFT_ARROW)) {
        xpos = xpos - 5;
    }
    xpos = constrain(xpos, 0, width)
    if (keyIsDown(UP_ARROW)) {
        ypos = ypos - 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
        ypos = ypos + 5;
    }
    xpos = constrain(ypos,0,height);
    fill("yellow")
    circle(xpos,ypos, 50);
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
    // if (keyCode === 38) {
    //     background(220);
    //     fill("red");
    //     circle(50,100,100,);
    // }
    // if (keyCode === 40) {
    //     background(220);
    //     fill("black");
    //     circle(50,100,100,);
    // }    
    
}
function keyReleased() {
    
}