function Rocket(dna){
	this.pos=createVector(width/2, height);
	this.vel=createVector();
	this.acc=createVector();

	if (dna){
		this.dna=dna;
	} else {
		this.dna = new DNA();	
	}
	this.fitness;

	this.calcFitness = function(){
		var d = dist(this.pos.x, this.pos.y, target.x, target.y);
		this.fitness = map(d,0,width, width,0);
	}

	this.applyForce = function(force){
		this.acc.add(force);
	}

	this.update = function(){
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
		this.applyForce(this.dna.genes[count]);
	}

	this.show = function(){
		push();
		noStroke();
		fill(255,150);
		translate(this.pos.x, this.pos.y);
		rotate(this.vel.heading());
		rectMode(CENTER);
		rect(0,0,25,5);
		pop();
	}
}