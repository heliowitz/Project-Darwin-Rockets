var rocket;
var population;
var count = 0;
var target;

var magnitude = 0.5;
var lifespan = 350;
var decisionRate = 1;

var r1x, r1y, r2x, r2y, r3x, r3y, rw, rh;


function setup() {
	createCanvas(900,600);
	rocket = new Rocket();
	population = new Population();

	target=createVector(width/2, 50);

	rw = 200;
	r1x = width/2-100;
	r1y = height*0.50;
	r2x = width*0.25-100;
	r2y = height*0.30
	r3x = width*0.75-100;
	r3y = height*0.30
	rh = 10;
}

function draw(){
	background(0);
	population.run();
	count++;

	if (count == lifespan){
		population.evaluate();
		population.selection();
		count=0;
	}

	fill(255, 150);
	rect(r1x, r1y, rw, rh);
	rect(r2x, r2y, rw, rh);
	rect(r3x, r3y, rw, rh);

	ellipse(target.x, target.y, 16,16, 150);
}