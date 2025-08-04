function setup() {
    createCanvas(600,400);
    background(220);
}
let shapeColor = "dark brown"
function draw() {
    // let r = 0;
    // let g = 0;
    // let b = 0;
    // let xpos = 50;
    // let ypos = 50;
    // for (let i = 0; i < 5; i++) {
    //     fill(r,g,b);
    //     g = g + 50;
    //     circle(xpos,ypos,50);
    //     xpos = xpos + 50;
    //     ypos = ypos + 50;
    // noStroke();
    // fill(5,50);
    // circle(mouseX, mouseY, 50);
    fill(shapeColor);
    //circle(width/2, height/2, 100);
    noStroke();
}

// function mousePressed() {
//     shapeColor = color(random(255), random(255), random(255));
// }

// function mouseReleased() {
//     shapeColor = "white"
// }

function mouseDragged() {
    circle(mouseX,mouseY,5,5)
}