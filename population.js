function Population(){
	this.rockets=[];
	this.popsize = 25;
	this.matingPool = [];

	for (var i = 0; i <this.popsize; i++){
		this.rockets[i] = new Rocket();
	}

	this.evaluate = function(){
		var maxfit = 0;
		var avgfit = 0;
		for (var i = 0; i < this.popsize; i++){
			this.rockets[i].calcFitness();
			if (this.rockets[i].fitness > maxfit){
				maxfit = this.rockets[i].fitness;
			}
			avgfit += this.rockets[i].fitness;
		}
		// console.log(maxfit);
		console.log(avgfit/this.rockets.length);

		for (var i = 0; i < this.popsize; i++){
			this.rockets[i].fitness /= maxfit;
		}

		this.matingPool = [];
		for (var i = 0; i < this.popsize; i++){
			var n = this.rockets[i].fitness*100;
			for (var j = 0; j<n; j++){
				this.matingPool.push(this.rockets[i]);
			}
		}
	}

	this.selection = function(){
		var newRockets = [];
		for (var i = 0; i < this.rockets.length; i++){
			var momDNA = random(this.matingPool).dna;
			var dadDNA = random(this.matingPool).dna;
			var childDNA = momDNA.crossover(dadDNA);
			childDNA.mutation();
			newRockets[i] = new Rocket(childDNA);
		}
		this.rockets = newRockets;
	}

	this.run = function(){
		for (var i = 0 ; i < this.popsize; i++){
			this.rockets[i].update();
			this.rockets[i].show();	
		}
	}
}