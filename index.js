var rocket;
var population;
var count = 0;
var target;

var magnitude = 4;
var lifespan = 150;
var decisionRate = 1;

var r1x, r1y, r2x, r2y, r3x, r3y, rw, rh;


function setup() {
	createCanvas(900,600);
	rocket = new Rocket();
	population = new Population();

	target=createVector(width/2, 50);

	r1x = width/2-150;
	r1y = height*0.60;
	r2x = width*0.25-150;
	r2y = height*0.30
	r3x = width*0.75-150;
	r3y = height*0.30
	rw = 300;
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

	fill(255);
	rect(r1x, r1y, rw, rh);
	rect(r2x, r2y, rw, rh);
	rect(r3x, r3y, rw, rh);

	ellipse(target.x, target.y, 16,16);
}