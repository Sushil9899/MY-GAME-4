//writing variables.
var bearImg,dogwalking,girlwalking,lionImg,snakeImg
,wolfImg,backgroundImg
var bg,girl,dog,lion,snake,wolf, ipath,bear
var bgMusic,bite,gameOver,jump;
var bearG,lionG,wolfG,startImg,start
var gameState = "serve"
var score = 0 
var lives = 3


function preload() {

  // loading animations,images and sound.
  bearImg = loadAnimation("bear.png","bear2.png","bear3.png")
  dogwalking= loadAnimation("d1.png","d1.png","d2.png","d2.png","d2.png","d3.png","d3.png","d3.png","d4.png","d4.png")
  girlwalking= loadAnimation("run.png","run2.png","run3.png","run4.png","run5.png")
  lionImg = loadAnimation("lion.png","lion2.png","lion3.png",)
  wolfImg = loadAnimation("wolf.png","wolf2.png","wolf3.png","wolf4.png")
  startImg = loadImage("start.png")

  
  backgroundImg= loadImage("background.png")

  bgMusic = loadSound("bg.mp3")
  bite= loadSound("bite.wav")
  gameOver= loadSound("gameOver.mp3")
  jump= loadSound("jump.wav")

  girlwalking.loop = true
  dogwalking.loop =  true
  bearImg.loop = true
  lionImg.loop = true
  wolfImg.loop = true
  bgMusic.loop = true
}

function setup() {
  // creating canvas, creating Sprites and more.
  createCanvas(810,600)

  bg = createSprite(490,200)
  bg.addImage(backgroundImg)

  bg.scale = 3
  bgMusic.play()

    start = createImg("start.png")
    start.position(400,200)
    start.size(60,40)
    start.mouseClicked(begin)

  girl = createSprite(250,450)
  girl.addAnimation("walk",girlwalking)
  girl.scale = 0.7

  dog = createSprite(100,480)
  dog.addAnimation("dogwalk",dogwalking)
  dog.scale = 0.8

ipath = createSprite(440,550,850,5)
ipath.visible = false

bearG = new Group()
lionG = new Group()
wolfG = new Group()
  

}

function draw() {
  // adding background,gameStates and more.
background("grey")


  if(gameState =="serve"){


    girl.velocityX = 0
    girl.velocityY =0
    girl.x = 250
    girl.y = 450
    if(bg.x < 0){
      bg.x = bg.width/2
    }
    bg.velocityX = -2


girl.collide(ipath)
dog.collide(ipath)
  }

  

  else if(gameState === "play"){
 
    if(bg.x < 0){
      bg.x = bg.width/2
    }
  if(keyDown("space") && girl.y > 445 && dog.y >450){
    girl.velocityY = -20
    //dog.velocityY = -15
    jump.play()

  }
  girl.velocityY = girl.velocityY+0.8
  dog.velocityY = dog.velocityY+0.8

  girl.collide(ipath)
  dog.collide(ipath)

if(girl.collide(lionG) || girl.collide(wolfG) || girl.collide(bearG)){
gameState = "end"
gameOver.play()


girl.x = 250

}

score = score+Math.round(frameCount/60)



  var rand = Math.round(random(1,3))
  if(rand === 1){
    spawnLions()
  }
  else if(rand === 2){
    spawnBear()
  }
  else{
    spawnwWolf()

  }
}
else{
  girl.velocityX = 0 
  lionG.setVelocityEach(0)
  bearG.setVelocityEach(0)
  wolfG.setVelocityEach(0)
  reset()
  girl.destroy()
  dog.destroy()
  bgMusic.stop()
  //lionG.setlifetimeEach(-1)
 // wolfG.setlifetimeEach(-1)
 // bearG.setlifetimeEach(-1)
  bg.velocityX = 0

 
  //bite.play()
 
}
if(score>=500){
  win()
  gameState = "end"
}

drawSprites()
fill ("white")
textSize(40)
text("Score:"+score,600,100)

}

// spawning lions
function spawnLions(){
  if(frameCount % 200 == 0 ){
   lion = createSprite(800,500,20,20)
   lion.addAnimation("lion",lionImg)
   lion.frameDelay = 10
   lion.scale = 1.2
   lion.velocityX = -6
   lionG.add(lion)
   lion.setCollider("rectangle",-40,0,60,60)
   lion.lifetime = 150
  // bite.play()
  // lion.debug = true
}
}

// spawning bears
function spawnBear(){
  if(frameCount % 100 == 0 ){
   bear = createSprite(800,500,20,20)
   bear.addAnimation("bear",bearImg)
   bear.frameDelay = 10
   bear.scale = 1.2
   bear.velocityX = -6
   bearG.add(bear)
   bear.lifetime = 150
   //bite.play()
   bear.setCollider("rectangle",-40,0,60,60)
  // bear.debug = true
}
}

// spawning wolfs
function spawnwWolf(){
  if(frameCount % 300 == 0 ){
   wolf = createSprite(800,500,20,20)
   wolf.addAnimation("wolf",wolfImg)
   wolf.frameDelay = 10
   wolf.scale = 2
   wolf.velocityX = -6
   wolfG.add(wolf)
   wolf.lifetime = 150
   ///bite.play()
   wolf.setCollider("rectangle",-10,0,60,60)
   //wolf.debug = true
}
}
// creating begin function to start the game.
function begin() {

  gameState = "play"
  
  start.remove()
  
}

// creating reset function with the help of sweet alert.
function reset() {
  swal(
    {
      title: `GAME OVER`,
      text: "Thanks for playing!!",
      imageUrl:
        "https://raw.githubusercontent.com/whitehatjr/PiratesInvasion/main/blink_1.png",
      imageSize: "150x150",
      confirmButtonText: "Play Again"
    },
    function(isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );
}
function win() {
  swal(
    {
      title: `YOU WIN`,
      text: "Thanks for playing!!",
      imageUrl:
        "https://raw.githubusercontent.com/whitehatjr/PiratesInvasion/main/blink_1.png",
      imageSize: "150x150",
      confirmButtonText: "Play Again"
    },
    function(isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );
}


// THANK YOU I HOPE YOU LIKED MY PROJECT.
