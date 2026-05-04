
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


let song1, song2, song3, song4, song5, song6, song7, song8, song9;
let image1_up, image2_over;
let songs = [];
let currentSong = 0;

// var duration;
// var  slideWidth = 500;

// global manager object
var mgr;

// define your p5.play sprites that you want to use in more that 1 scene.
var disk, needle, turntable, shelf, book;

function preload() {

  for (let i = 1; i <= 9; i++) {
    songs.push(loadSound(`assets/${i}.mp3`));
  }
  
    wood     = loadImage("assets/wood.png");
    maintable     = loadImage("assets/player.png");
   // OpenedGone = loadImage("assets/opened_gone.png");
}
function setup() {
    createCanvas(800, 600);
    mgr = new SceneManager();

    disk = createSprite(width/2, height/2);
    disk.addAnimation("playing", "assets/playing0001.png", "assets/playing0003.png");
    disk.addAnimation("stopped", "assets/player0001.png", "assets/player0002.png");
    
    

    disk.visible = false;

    turntable = createSprite(width/2, height/2);
    turntable.addAnimation("playing", "assets/turntable0001.png", "assets/turntable0008.png");
    turntable.addAnimation("stopped", "assets/turntable0005.png", "assets/turntable0005.png");

    turntable.visible = false;

    shelf = createSprite(width/2, height/2);
    shelf.addAnimation("playing", "assets/shelf0001.png", "assets/shelf0008.png");
    shelf.addAnimation("stopped", "assets/shelf0005.png", "assets/shelf0005.png");

    shelf.visible = false;

    book = createSprite(width/2, height/2);
    book.addAnimation("playing", "assets/book0001.png", "assets/book0008.png");
    book.addAnimation("stopped", "assets/book0005.png", "assets/book0005.png");

    book.visible = false;








    mgr.addScene(sceneMain);
    mgr.addScene(scenePlay);
    mgr.addScene(sceneHelp);
    mgr.showNextScene();

}

function draw()
{

    // passthe current draw function into the SceneManager
    mgr.draw();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( sceneMain );
            break;
        case '2':
            mgr.showScene( scenePlay );
            break;
        case '3':
            mgr.showScene( sceneHelp );
            break;
            
        case 'h':
            mgr.showScene( sceneHelp );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
