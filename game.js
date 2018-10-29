var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 1000
      },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var player;
var platforms;
var cursors;

var game = new Phaser.Game(config);

function preload() {
  this.load.spritesheet('tiles', 'tiles.png', {
    frameWidth: 10,
    frameHeight: 10
  });
}

function create() {

  this.cameras.main.setBackgroundColor('#0000ff');

  platforms = this.physics.add.staticGroup();

  for (var i = 0; i < 80; i += 1) {
    platforms.create(i * 10 + 5, 545, 'tiles', 1);
    platforms.create(i * 10 + 5, 555, 'tiles', 2);
    platforms.create(i * 10 + 5, 565, 'tiles', 2);
    platforms.create(i * 10 + 5, 575, 'tiles', 2);
    platforms.create(i * 10 + 5, 585, 'tiles', 3);
    platforms.create(i * 10 + 5, 595, 'tiles', 3);
  }

  platforms.create(415, 405, 'tiles', 1);
  platforms.create(425, 405, 'tiles', 1);
  platforms.create(435, 405, 'tiles', 1);
  platforms.create(415, 415, 'tiles', 2);
  platforms.create(425, 415, 'tiles', 2);
  platforms.create(435, 415, 'tiles', 2);
  platforms.create(425, 425, 'tiles', 3);

  platforms.create(515, 505, 'tiles', 1);
  platforms.create(525, 505, 'tiles', 1);
  platforms.create(535, 505, 'tiles', 1);
  platforms.create(515, 515, 'tiles', 2);
  platforms.create(525, 515, 'tiles', 2);
  platforms.create(535, 515, 'tiles', 2);
  platforms.create(525, 525, 'tiles', 3);
  
  platforms.create(465, 535, 'tiles', 3);
  platforms.create(475, 535, 'tiles', 3);
  platforms.create(475, 525, 'tiles', 3);

  player = this.physics.add.sprite(425, 355, 'tiles', 0);

  player.setBounce(0.2);
  player.setCollideWorldBounds(true);

  this.physics.add.collider(player, platforms);
  
  cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  if (cursors.left.isDown) {
    player.setVelocityX(-100);
  }
  else if (cursors.right.isDown) {
    player.setVelocityX(100);
  }
  else {
    player.setVelocityX(0);
  }
  if (cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(-200);
  }
}