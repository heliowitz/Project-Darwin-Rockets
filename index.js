var rocket;
var population;
var count = 0;
var target;

var magnitude = 0.5;
var lifespan = 300;
var decisionRate = 2;

var rx, ry, rw, rh;


function setup() {
	createCanvas(900,600);
	rocket = new Rocket();
	population = new Population();

	target=createVector(width/2, 50);

	rx = width/2-250;
	ry = height*0.75;
	rw = 500;
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

	// fill(255);
	// rect(width/2-250, height*0.75, 500, 10);

	// rect(width*0.25-100, height*0.40, 200, 10);
	// rect(width*0.75-100, height*0.40, 200, 10);

	ellipse(target.x, target.y, 16,16);
}