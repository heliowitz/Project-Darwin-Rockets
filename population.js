function Population(){
	this.rockets=[];
	this.popsize = 25;
	this.matingPool = [];

	for (var i = 0; i <this.popsize; i++){
		this.rockets[i] = new Rocket();
	}

	this.evaluate = function(){
		var maxfit = 0;
		for (var i = 0; i < this.popsize; i++){
			this.rocket[i].calcFitness();
			if (this.rockets[i].fitness > maxfit){
				maxfit = this.rockets[i].fitness;
			}
		}

		for (var i = 0; i < this.popsize; i++){
			this.rockets[i].fitness /= maxfit;
		}

		this.matingPool = [];
		for (var i = 0; i < this.popsize; i++){
			var n = this.rockets[i].fitness*100;
			for (var j = 0; j<n; j++){
				this.matingpool.add(this.rockets[i]);
			}
		}
	}

	this.selection = function(){
		var newRockets = [];
		for (var i = 0; i < this.rockets.length; i++){
			var momDNA = random(this.matingPool).dna;
			var dadDNA = random(this.matingPool).dna;
			var childDNA = momDNA.crossover(dadDNA);
			newRockets[i] = new Rocket(childDNA);
		}
		this.rockets = newRockets();
	}

	this.run = function(){
		for (var i = 0 ; i < this.popsize; i++){
			this.rockets[i].update();
			this.rockets[i].show();	
		}
	}
}