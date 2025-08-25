let soundEffect, bgMusic, staticImage;
let x =0;
let y = 0;
function preload() {
    soundEffect = loadSound("assets/pop.mp3");
    bgMusic = loadSound("assets/star");
    staticImage = loadImage("assets/pico-a.png");
}

function setup() {
    createCanvas(600, 400);
    bgMusic.loop();
}

function draw() {
    background("lightblue");
    
    
    let w = 110;
    let h = 123;
    image(staticImage, x,y,w,h);
    if (keyIsDown( LEFT_ARROW)) {
        x = x-5;
    }
    if (keyIsDown (RIGHT_ARROW)) {
        x = x+5;
    }
    x = constrain(x, 0, width-110);
    if (keyIsDown(UP_ARROW)) {
        y = y-5;
    }
    if (keyIsDown(DOWN_ARROW)) {
        y = y+5;
    }
    y = constrain(y, 0, height-133);
    
}

function keyPressed() {
    if (keyCode === 32) {
        soundEffect.play();    
    }
}
