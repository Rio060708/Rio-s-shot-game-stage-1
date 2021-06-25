const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameLevel = 6;
var gameScore = 0;
function preload() {
    backgroundImg = loadImage("sprites/BG.jpg");
}

function setup(){
    var canvas = createCanvas(1200,450);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    Monster1 = new Monster(400,10,50,50,1);
    Monster2 = new Monster(500,30,50,50,2);
    Monster3 = new Monster(600,50,50,50,1);
    Monster4 = new Monster(700,5,50,50,2);
    Monster5 = new Monster(800,0,50,50,1);
    Monster6 = new Monster(950,100,149,150,6);
    player = new Player(50,400,250,250,1);
    }

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    switch (gameLevel){
    case 1: 
        Monster1.display();
    break;
    case 2: 
        Monster1.display();
        Monster2.display();
    break;
    case 3: 
        Monster1.display();
        Monster2.display();
        Monster3.display();
    break;
    case 4: 
        Monster1.display();
        Monster2.display();
        Monster3.display();
        Monster4.display();
    break;
    case 5: 
    
    Monster1.display();
        Monster2.display();
        Monster3.display();
        Monster4.display();
        Monster5.display();
    break;
    case 6: 
        Monster1.display();
        Monster2.display();
        Monster3.display();
        Monster4.display();
        Monster5.display();
        Monster6.display();
    break;
    }
 player.display();
//  player.scale = 5;
}

// function mouseDragged(){
//     Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
// }


// function mouseReleased(){
//     slingshot.fly();
// }

// function keyPressed(){
// if (keyCode===32){
// slingshot.attach(bird.body);
// }
// }

