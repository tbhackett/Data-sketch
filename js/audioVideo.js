let canvas

let audioPlayButton
let modemSound
let pug
let videoPlaying = false
let videoPlayButton
let candycane

async function setup(){
  canvas = createCanvas(windowWidth,windowHeight)
  canvas.position(0,0)
  canvas.style('z-index', '-1')

  modemSound = await loadSound('media/modemSound.m4a')
  pug = await createVideo(['media/pug.mp4'])
  //pug.hide()

  candycane = await loadFont('media/candycane.ttf')

  audioPlayButton = createButton('Play Audio')
  audioPlayButton.position (150, 200)
  audioPlayButton.mousePressed(playModem)

  videoPlayButton = createButton('Play Video')
  videoPlayButton.position (150, 300)
  videoPlayButton.mousePressed(playVideo)
}


function playModem(){
if(!modemSound.isPlaying()){
  modemSound.play()
  audioPlayButton.html('Stop Audio')
}else{
modemSound.stop()
audioPlayButton.html('Play Audio')
  }
}

function playVideo() {
  if (videoPlaying) {
    pug.pause()
    videoPlayButton.html('Play Video')
  } else {
    pug.loop()
    videoPlayButton.html('Pause Video')
  }

  videoPlaying = !videoPlaying
}


function draw(){
background(255)

textFont(candycane)
textSize(60)
fill(255,0,0)
text('Song and Video', windowWidth/3, windowHeight/5)
}