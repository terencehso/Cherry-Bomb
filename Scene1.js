class Scene1 extends Phaser.Scene
{
   constructor()
   {
      // name of scene instance
      super("bootGame");
   }


   preload()
   {
      // load player spritesheet
      this.load.spritesheet("playerIdle", "assets/images/player_spritesheet_idle.png",{
         frameWidth: 13,
         frameHeight: 16
      });

      // load stem images
      this.load.image("stemTop", "assets/images/stem_top.png");
      this.load.image("stemRod", "assets/images/stem_rod.png");

      // load bullet image
      this.load.image("bulletSmall", "assets/images/bullet_small.png");
   }   


   create()
   { 
      // create text object
      this.add.text(20, 20, "Loading game...");

      // load player anim
      this.anims.create({
         key: "player_idle",
         frames: this.anims.generateFrameNumbers("playerIdle"),
         frameRate: 10,
         repeat: -1
      });

      // switch to Scene2
      this.scene.start("playGame");
   }
}