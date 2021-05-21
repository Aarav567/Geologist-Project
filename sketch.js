const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone;
var rubber;
var iron;
var sand1,sand2,sand3,sand4,sand5;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(5,50);
    stone = new Stone(500,400,50,50);
    rubber = new Rubber(300,400,20);
    iron = new Iron(400,300,70,30);
    sand1 = new Sand(500,300,7);
    sand2= new Sand(510,300,7);
    sand3= new Sand(520,300,7);
    sand4= new Sand(530,300,7);
    sand5= new Sand(540,300,7);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);




    plane.display();
    hammer.display();
    stone.display();
    rubber.display();
    iron.display();
    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();

    
 
}