function Rocket(dna){
	this.pos=createVector(width/2, height);
	this.vel=createVector();
	this.acc=createVector();
	this.reached = false;
	this.crashed = false;
	this.dir = createVector(0,-1,0);

	if (dna){
		this.dna=dna;
	} else {
		this.dna = new DNA();	
	}
	this.fitness;

	this.calcFitness = function(){
		var d = dist(this.pos.x, this.pos.y, target.x, target.y);
		this.fitness = map(d,0,width, width,0) + count*5;
		if (this.reached){
			this.fitness = this.fitness*10 + count*10;
		}
		if (this.crashed){
			this.fitness /=10;
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

		if (this.collisionDetection()){ 
			this.crashed=true; 
		}

		if (!this.reached && !this.crashed){
			this.vel.add(this.acc);
			this.pos.add(this.vel);
			this.acc.mult(0);

			if (count%decisionRate ==0){
				this.newDir = p5.Vector.fromAngle(this.dir.heading()+this.dna.genes[count/decisionRate]);
			} else {
				this.newDir = this.dir;
			}
			this.newDir.setMag(magnitude);
			this.applyForce(this.newDir);
			this.dir = this.newDir;
			
			this.vel.limit(4);	
		}
	}

	this.collisionDetection = function(){
		collision = false;
		
		// Edges
		if (this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0){
			collision=true;
		}

		if (this.pos.x > r1x && this.pos.x < r1x + rw 
			&& this.pos.y > r1y && this.pos.y < r1y+rh){
			collision = true;
		}

		else if (this.pos.x > r2x && this.pos.x < r2x + rw 
			&& this.pos.y > r2y && this.pos.y < r2y+rh){
			collision = true;
		}

		else if (this.pos.x > r3x && this.pos.x < r3x + rw 
			&& this.pos.y > r3y && this.pos.y < r3y+rh){
			collision = true;
		}

		return collision;
	}

	this.show = function(){
		var theta = this.vel.heading() + radians(90);
		push();
		noStroke();
		fill(255,170,238,150);
		translate(this.pos.x, this.pos.y);
		rotate(theta);
		triangle(0,20,5,0,10,20);
		pop();
	}
}