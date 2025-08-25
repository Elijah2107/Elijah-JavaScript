let soundEffect, bgMusic, staticImage;
let x =0;
let y = 0;
let secondguy;d
let secondguyX, secondguyY;
function preload() {
    soundEffect = loadSound("assets/pop.mp3");
    bgMusic = loadSound("assets/star_wars_theme_8_bit.mp3");
    staticImage = loadImage("assets/pico-a.png");
    secondGuy = loadImage("assets/steve.svg")
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
    secondguyX = 200;
    second
    image(secondGuy,200,200,96,128)
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
