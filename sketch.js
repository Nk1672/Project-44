var  boy, backgroundIMG, ground, boyIMG, back,roof;

function preload() {
    backgroundIMG=loadImage("Background.jpg")
    boyIMG=loadImage("boy.png");
}

function setup(){
    createCanvas(1480,1000)
    back=createSprite(100,500,1000,1000)
    boy=createSprite(200, 800,10,10)
    boy.scale=0.2
    back.addImage(backgroundIMG)
    back.scale=2
    ground= createSprite(750, 900, 1500, 10);
    ground.visible=false;
    roof = createSprite(740,0,1500,10)
}

function draw(){
    //background(backgroundIMG)

        back.velocityX=2
        back.x=back.width/2
        ground.velocityX=3
        ground.x=ground.width/2
        boy.addImage("boy",boyIMG)
        if(keyDown(UP_ARROW)){
            boy.velocityY=-20
        }
        boy.velocityY=boy.velocityY+0.8
        boy.collide(ground);
        boy.bounceOff(roof);
       
        drawSprites();
    }







