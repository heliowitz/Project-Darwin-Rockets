function DNA(genes){
	if (genes){
		this.genes = genes;
	} else {
		this.genes = [];
		for (var i = 0 ; i < lifespan/decisionRate; i++) {
			this.genes[i] = random(-0.2745, 0.2745);
		}
	}
	this.crossover = function(partnerDNA){
		var newGenes = [];
		var mid = floor(random(this.genes.length));
		for (var i = 0; i < this.genes.length; i++){
			if (i>mid){
				newGenes[i] = this.genes[i];
			} else{
				newGenes[i] = partnerDNA.genes[i];
			}
		}
		return new DNA(newGenes);
	}

	this.mutation = function(){
		for (var i = 0; i < this.genes.length; i++){
			if (random(100) < 1){
				this.genes[i] = random(-0.1745, 0.1745);
			}
		}
	}
}