var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 var w1 = createSprite(190,120,250,3);
 var w2 = createSprite(190,260,250,3);
 var w3 = createSprite(67,145,3,50);
 var w4 = createSprite(67,235,3,50);
 var w5 = createSprite(313,235,3,50);
 var w6 = createSprite(313,145,3,50);
 var w7 = createSprite(41,170,50,3);
 var w8 = createSprite(41,210,50,3);
 var w9 = createSprite(337,210,50,3);
 var w10 = createSprite(337,170,50,3);
 var w11 = createSprite(18,190,3,40);
 var w12 = createSprite(361,190,3,40);


 var ding = createSprite(40,190,13,13);
 ding.shapeColor="yellow";
var d1 = createSprite(100,130,10,10);
d1.shapeColor= "lightblue";
var d2 = createSprite(215,130,10,10);
d2.shapeColor= "lightblue";
var d3 = createSprite(165,250,10,10);
d3.shapeColor= "lightblue";
var d4 = createSprite(270,250,10,10);
d4.shapeColor= "lightblue";
d1.velocityY = -6;
d2.velocityY = 6;
d3.velocityY = -6;
d4.velocityY = 6;
var count = 0;
function draw() {
 background("white");
 textSize(20);
 text ("Deaths:"+count,200,100);
 strokeWeight(0);
 fill("red");
 rect(70,120,240,140);
 
 fill("blue")
 rect (18,170,52,40);
 rect(308,170,52,40);
 
 d1.bounceOff(w1);
 d1.bounceOff(w2);
 d2.bounceOff(w1);
 d2.bounceOff(w2);
  d3.bounceOff(w1);
  d3.bounceOff(w2);
  d4.bounceOff(w1);
  d4.bounceOff(w2);
  
  
  if (keyDown("right")){
    ding.x= ding.x+2
  }
  if (keyDown("LEFT")){
    ding.x= ding.x-2
  }
  if (ding.isTouching(w1)||
  ding.isTouching(w2)||
  ding.isTouching(d1)||
  ding.isTouching(d2)||
  ding.isTouching(d3)||
  ding.isTouching(d4)){
 ding.x = 40
 ding.y = 190
 count=count+1;
}
  
  drawSprites();
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
