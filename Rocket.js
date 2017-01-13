function Rocket(dna){
	this.pos=createVector(width/2, height);
	this.vel=createVector();
	this.acc=createVector();
	this.reached = false;
	this.crashed = false;

	if (dna){
		this.dna=dna;
	} else {
		this.dna = new DNA();	
	}
	this.fitness;

	this.calcFitness = function(){
		var d = dist(this.pos.x, this.pos.y, target.x, target.y);
		this.fitness = map(d,0,width, width,0);
		if (this.reached){
			this.fitness *= 10;
		}
		if (this.crashed){
			this.fitness = 1;
		}
	}

	this.applyForce = function(force){
		this.acc.add(force);
	}

	this.update = function(){
		var d = dist(this.pos.x, this.pos.y, target.x, target.y);
		if (d < 10){
			this.reached = true;
			this.pos = target.copy();
		}
		// Collision detection
		if (this.pos.x > rx && this.pos.x < rx + rw 
			&& this.pos.y > ry && this.pos.y < ry+rh){
			this.crashed = true;
		}

		if (!this.reached && !this.crashed){
			this.vel.add(this.acc);
			this.pos.add(this.vel);
			this.acc.mult(0);
			this.applyForce(this.dna.genes[count]);		
		}
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