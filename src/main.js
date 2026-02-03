//Name: William McCabe
//Modification Title: Rockets Patrol Mods
//Approximate time: 15.5 hours
//Mods:
//  1Pt:
//      Fire UI Text: word fire appears after you fire the rocket
//  3Pt:
//     Created 4 new explosion sound effects and randomized them to play on impact
//     Displayed time remaining in seconds on the top of the screen
//     Created a new title screen by creating a new background, new text config and also added update to controller settings
//  5Pt:    
//      Created a new enemy spaceship type that is smaller, moves faster, and is worth more points, not an artist but created a fourth spaceship
//      Implemented mouse controls where when the mouse is on the rocket, you can move it along and when you press on it, it fires a rocket. 


let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene : [ Menu, Play ]
}
let game = new Phaser.Game(config)
//reserve keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

