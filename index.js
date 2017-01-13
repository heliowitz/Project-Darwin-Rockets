var rocket;
var population;
var count = 0;
var target;

var magnitude = 4;
var lifespan = 100;
var decisionRate = 1;

var rx, ry, rw, rh;


function setup() {
	createCanvas(900,600);
	rocket = new Rocket();
	population = new Population();

	target=createVector(width/2, 50);

	rx = width/2-150;
	ry = height*0.50;
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
	rect(rx, ry, rw, rh);

	// rect(width*0.25-100, height*0.40, 200, 10);
	// rect(width*0.75-100, height*0.40, 200, 10);

	ellipse(target.x, target.y, 16,16);
}