class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)

        //add object to existing scene
        scene.add.existing(this)
        this.setInteractive()
        this.on('pointerdown', this.fire, this)
        this.on('pointermove', function (pointer) {
            this.x = pointer.x;
            this.moveSpeed = 20;
        }, this)
        this.isFiring = false
        this.moveSpeed = 2 
        this.fireText = scene.add.text(x+20, y - 20, 'fire', {color : "#000000"})
        this.sfxShot = scene.sound.add('sfx-shot')
    }
    
    update() {
        //left/right movement
        this.moveSpeed = 2
        if(!this.isFiring){
            this.fireText.setColor('#000000')
            this.fireText.setBackgroundColor('#000000')
            
            if(keyLEFT.isDown && this.x >= borderUISize + this.width){
                this.x -= this.moveSpeed
            } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width){
                this.x += this.moveSpeed
            }
        }
    

        //fire button
        if(Phaser.Input.Keyboard.JustDown(keyFIRE)){
            this.fireText.setColor('#FF0000')
            this.fireText.setBackgroundColor('#ef8888')
            this.isFiring = true
            this.sfxShot.play()
        }
        //if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding){
            this.y -= this.moveSpeed
        }
        //reset on miss
        if(this.y <= borderUISize * 3 + borderPadding){
            this.isFiring = false
            this.y = game.config.height - borderUISize - borderPadding

        }
        
    }
    fire(){
        this.fireText.setColor('#FF0000')
        this.fireText.setBackgroundColor('#ef8888')
        this.isFiring = true
        this.sfxShot.play()
    }
    reset() {
        this.isFiring = false
        this.y = game.config.height - borderUISize - borderPadding
    }
}