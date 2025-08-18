let soundEffect, bgMusic, staticImage;
let x =0;
let y = 0;
function preload() {
    soundEffect = loadSound("assets/pop.mp3");
    bgMusic = loadSound("assets/bossaNova.mp3");
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
    if (keyCode === LEFT_ARROW) {
        x = x-1;
    }
    if (keyCode === RIGHT_ARROW) {
        x = x+1;
    }
    x = constrain(x, 0, width-110);
    if (keyCode === UP_ARROW) {
        y = y-1;
    }
    if (keyCode === DOWN_ARROW) {
        y = y+1;
    }
    y = constrain(y, 0, height-133);
    
}

function keyPressed() {
    if (keyCode === 32) {
        soundEffect.play();    
    }
}
