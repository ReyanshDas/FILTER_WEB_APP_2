let img;
let mustacheImg;

function applyMustache(img) {
  const x = img.width / 2;
  const y = img.height / 2;
  const w = img.width / 2;
  const h = img.height / 4;

  image(mustacheImg, x, y, w, h);
}

function preload() {
  mustacheImg = loadImage('mustache.png');
}

function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent('canvas');
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
  }

function draw() {
    background(220);
    image(video, 0, 0, 300, 300)
}

function modelLoaded() {
  console.log('Posenet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    console.log("mustache x = " + results[0].pose.mestache.x);
    console.log("mustache y = " + results[0].pose.mestache.y);
  }
}