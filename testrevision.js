let x = 100;
let y = 100;
let w = 30;
let h = 30;
let gray = 0;
function setup() {
    createCanvas(800,600);
    background("steelblue")
    noLoop();
}

function draw() {
    //triangle(350,300,450,300,400,200);
    for (let count=0; count<15; count++) {
        fill(gray);
        rect(x, y, w, h);
        x = x + 40
        gray = gray + 10;
    }
    
}