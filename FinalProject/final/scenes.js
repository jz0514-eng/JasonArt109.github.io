// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================


////////////////////////////// 1 /////////////////
function sceneMain()  {
    var textX;
    var textY;
    var loy= 0;  // exists as data saved when in the splash scene
    let btnevent1 =false;
    let btnevent2 =false;
    let vol = 0.1


    // scene1.setup
    this.setup = function() 
{
        console.log("We are at setup for closed");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
        outputVolume(vol); // turn down the volume.
        disk.visible = false;
        turntable.visible = true;
        book.visible = true;
        shelf.visible = true;
        
    }

    // enter() will be called each time SceneManager switches
    // to this scene
        this.enter = function() 
{
        console.log("Closed turntable");
        textAlign(CENTER);
        textSize(30);
        noStroke();
        
        // reset or disable the other scenes and their stuff
        // turn off the other scene stuff
    
        // make sure ghost is gone from this scene
    turntable.position.x = width/2;
    turntable.position.y = height/2;
    book.position.x = width/2;
    book.position.y = height/2 - 50;
    shelf.position.x = width/2;
    shelf.position.y = height/2 - 20;
    disk.position.x = width/2 +55;
    disk.position.y = height/2 -55;
        disk.visible = false;
        turntable.visible = true;
        book.visible = true;
        shelf.visible = true;

    }


    this.draw = function() 
{
      let overPlayer =
  mouseX > 50 && mouseX < 430 &&
  mouseY > 100 && mouseY < 500;
  let overShelf =
  mouseX > 500 && mouseX < 700 &&
  mouseY > 5 && mouseY < 230;
  let overBook =
  mouseX > 520 && mouseX < 720 &&
  mouseY > 250 && mouseY < 500;
  let clicked = false;
      // this is the draw function for all p5.play commands
        background(119, 69, 19); // warm brown
        image(wood, 0, 0, width, height);
      // this is the draw function for all p5.play commands
       

        

//book
if (overBook) {
  book.changeAnimation("playing");
} else {
  book.changeAnimation("stopped");
}

    if (mouseIsPressed && overBook && !clicked) {
        this.sceneManager.showScene(sceneHelp);
        clicked = true; // prevent multiple triggers
    }

    if (!mouseIsPressed) {
        clicked = false; // reset when mouse released
    }

// shelf
if (overShelf) {
  shelf.changeAnimation("playing");
} else {
  shelf.changeAnimation("stopped");
}

    if (mouseIsPressed && overShelf && !clicked) {
        currentSong = (currentSong + 1) % songs.length;
        clicked = true; // prevent multiple triggers
    }

    if (!mouseIsPressed) {
        clicked = false; // reset when mouse released
    }
//player
if (overPlayer) {
  turntable.changeAnimation("playing");
} else {
  turntable.changeAnimation("stopped");
}

    if (mouseIsPressed && overPlayer && !clicked) {
        this.sceneManager.showScene(scenePlay);
        clicked = true; // prevent multiple triggers
    }

    if (!mouseIsPressed) {
        clicked = false; // reset when mouse released
    }



    
   
                             // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
            // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor

    }

    this.keyPressed = function() {
        fill(0,255,0);
        text(keyCode, textX, textY += 10);

        if ( textY > height )  {
            textX += 20;
            textY = 0;
        }
    }

    this.mousePressed = function() {

     
    }
}

///////////////////////  2  ////////////////////////

function scenePlay()  {
   this.y = 0;
    // var y = 0;
    this.lox = 50;
    // var lox = 50;

   this.loy = 120;
    // var loy = 120;

   let btnevent1 = false;
   

    this.setup = function() {
        console.log("We setting up to open the turntable");
        disk.visible = true;
        turntable.visible = false;
        book.visible = false;
        shelf.visible = false;

    }

  this.enter = function()
  {
    console.log("We opened the turntable");
    disk.position.x = width/2 +55;
    disk.position.y = height/2 -5;
        disk.visible = true;
        turntable.visible = false;
        book.visible = false;
        shelf.visible = false;

    
  


  }




    this.draw = function() {
      background(119, 69, 19); // warm brown
      image(wood, 0, 0, width, height);
      // this is the draw function for all p5.play commands
     

      // ghost events defined
// Area to turn ON the song

if (mouseIsPressed && mouseX > 550 && mouseX < 770 && mouseY > 460 && mouseY < 480) {
outputVolume(0);
    }
if (mouseIsPressed && mouseX > 550 && mouseX < 770 && mouseY > 440 && mouseY < 460) {
  outputVolume(0.05);
    }
if (mouseIsPressed && mouseX > 550 && mouseX < 770 && mouseY > 420 && mouseY < 440) {
  outputVolume(0.1);
}
if (mouseIsPressed && mouseX > 550 && mouseX < 770 && mouseY > 400 && mouseY < 420) {
  outputVolume(0.15);
}
if (mouseIsPressed && mouseX > 550 && mouseX < 770 && mouseY > 380 && mouseY < 400) {
  outputVolume(0.2);
}
if (mouseIsPressed && mouseX > 550 && mouseX < 770 && mouseY > 360 && mouseY < 380) {
  outputVolume(0.25);
}
if (mouseIsPressed && mouseX > 550 && mouseX < 770 && mouseY > 340 && mouseY < 360) {
  outputVolume(0.3);
}
if (mouseIsPressed && mouseX > 550 && mouseX < 770 && mouseY > 320 && mouseY < 340) {
  outputVolume(0.35);
}
if (mouseIsPressed && mouseX > 550 && mouseX < 770 && mouseY > 300 && mouseY < 320) {
  outputVolume(0.4);
}


  if (mouseIsPressed && mouseX > 550 && mouseX < 600 && mouseY > 450 && mouseY < 550) {
    if (!songs[currentSong].isPlaying()) {
        songs[currentSong].play();
        disk.changeAnimation("playing");
    }
}

// Area to turn OFF the song (can be the same area or another one)
if (mouseIsPressed && mouseX > 420 && mouseX < 470 && mouseY > 340 && mouseY < 450) {
    if (songs[currentSong].isPlaying()) {
        songs[currentSong].stop();
        disk.changeAnimation("stopped");
    }
}



    // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
      btnevent2 = checkButtonPress("return",width-460, height-50, 120, 40, color(250), color(100), color(250));
      if (btnevent2) {   // main or next scene
        if (songs[currentSong].isPlaying()) {
        songs[currentSong].stop();
        disk.changeAnimation("stopped");
    }
        btnevent2 = false;
      //   playshortsound();
         this.sceneManager.showScene( sceneMain );
         
      }

    }  //end

    this.mousePressed = function()
    {

    }


}
////////////////////////////// 3/////////////////

function sceneHelp() {

    this.setup = function()  {
        console.log("We are at setup for help");
        // access a different scene using the SceneManager

    }

    this.enter = function()
    {
     console.log("We are at entering for help");
        disk.visible = false;
        turntable.visible = false;
        book.visible = false;
        shelf.visible = false;



    }

    this.draw = function() {
      background(119, 69, 19); // warm brown
      image(wood, 0, 0, width, height);
      // this is the draw function for all p5.play commands
     

      textAlign(LEFT);
      textSize(25);
   
      text( "Click On the turntable to enter the music player\nClick On the blue shelf to change song", 30, 150);
      text( "Click On the blue shelf to change song\nClick on the needle to play/stop \nClick/drag on the slider to change volume ", 30, 350);

      

  /*    if ( disk.mouse.hovering() ) {
        console.log("over");
        disk.changeAnimation("stopped");
        // ghosty.position.x += random(-4,4);
        // ghosty.position.y += random(-2,2);
      
     }  else {

      disk.changeAnimation("playing");


     }
      

     if (disk.mouse.pressing()) {
           if ( !song.isPlaying() ) {
              song.play();
          } else {
              song.pause();

          }

       this.sceneManager.showScene( closed );

     }  



        
    }

  */
             btnevent2 = checkButtonPress("return",width-460, height-50, 120, 40, color(250), color(100), color(250));
      if (btnevent2) {   // main or next scene
        if (songs[currentSong].isPlaying()) {
        songs[currentSong].stop();
        disk.changeAnimation("stopped");
    }
        btnevent2 = false;
      //   playshortsound();
         this.sceneManager.showScene( sceneMain );
         
      }

        
    } 

}


function checkButtonPress(str,bx,by,boxW,boxH,upcolor,ovcolor,dncolor) {

  let btnc = "";
  let btnstate =false;

  // Test if the cursor is over the box
  if ( mouseX > bx - boxW &&
       mouseX < bx + boxW &&
       mouseY > by - boxH &&
       mouseY < by + boxH ) {
       overBox = true;

    if (!mouseIsPressed) {
      stroke(255);
      btnc = ovcolor;
      btnstate = false;
    } else {
      console.log(str + " pressed");
      stroke(255);
      btnc = dncolor;
      btnstate = true;
    }

  } else {
    stroke(255);
    btnc = upcolor;
    overBox = false;
  }

  push();
  translate(bx,by);
  fill(btnc);
  rect(0, 0, boxW, boxH,10); // draw the box

  fill(20);
  noStroke();
  textSize(20);
  textAlign(CENTER);
  text (str,boxW/2,28);

    pop();

    return btnstate;

}



/* function playshortsound() {
  if ( !click.isPlaying() ) {
    click.play();
  } else {
     click.stop();
 }


}
  */