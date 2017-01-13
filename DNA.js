function DNA(genes){
	if (genes){
		this.genes = genes;
	} else {
		this.genes = [];
		for (var i = 0 ; i < lifespan; i++) {
			this.genes[i] = p5.Vector.random2D();
			this.genes[i].setMag(0.1);
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
}