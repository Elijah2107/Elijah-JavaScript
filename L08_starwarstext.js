let soundsfx;
let ypos;
function preload() {
    soundsfx = loadSound('assets/star_wars_theme_8_bit.mp3');
}
function setup() {
    createCanvas(600,1000);
    background(0);
    ypos = height;
}
function draw() {
    background(0);
    if( keyIsDown(32) ) {
        soundsfx.play();
    }
    if( keyIsDown(DOWN_ARROW) ) {
        soundsfx.stop();
    }
    translate(width/2,ypos);
    fill("yellow");
    textSize(75);
    textAlign(CENTER,CENTER);
    let starwars = [
        "Turmoil has enulfed the Galactic",
        "Republic. The taxation of trade",
        "routes to outlying star systems",
        "dispute.",
        "Hoping to resolve the matter with a",
        "blockade of deadly battleships, the",
        "greedy Trade Federation has",
        "stopped all shipping to the small",
        "planet of Naboo.",
        "While the congress of the republic",
        "endlessly debates this alarming",
        "chain of events, the Supreme",
        "Chancellor has secretly dispatched",
        "two Jedi Knights, the guardians of",
        "peace and justice in the galaxy, to",
        "to settle the conflict..."
    ]
    text("STAR WARS", 0,0);
    textSize(40);
    text("EPISODE 1", 0,45);
    text("THE PHANTOM MENACE",0,90);
    textSize(20)
    let textY = 120;
    for(let index=0; index < starwars.length; index++) {
        text(starwars[index], 0, textY);
        textY = textY + 40;
    }
    ypos = ypos - 1;
    if(ypos < 0) {
        ypos = height;
    }
}
    
   