let x = 
function setup() {
    createcanvas(800,600);
    background("steelblue")
    noLoop();
}





function draw() {
    fill("red")
    //triangle(350,300,450,300,400,200);
    for (let count=0; count<4; count++) {
        rect(x, y, w, h);
    }
    
}