var rocket;
var population;
var count = 0;
var target;

var magnitude = 0.5;
var lifespan = 350;
var decisionRate = 1;

var rw = 100;
var rh = 10;
var rows = [3,2,3,2];
var rects = [];

function setup() {
	createCanvas(900,700);
	rocket = new Rocket();
	population = new Population();

	target=createVector(width/2, 50);

	for (var i = 0; i < rows.length; i++){
		rowYPos = height * ((100/(rows.length+1) * (i+1))/100.00);
		for (var j = 0; j<rows[i] ; j++){
			blockXPos = (width * ((100/(rows[i]+1) * (j+1))/100.00)) - rw/2;
			rects.push({xpos: blockXPos, ypos: rowYPos, w: rw, h: rh});	
		}
	}
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
	for (var i=0; i<rects.length; i++){
		rect(rects[i].xpos, rects[i].ypos, rects[i].w, rects[i].h);
	}

	ellipse(target.x, target.y, 16,16, 150);
}