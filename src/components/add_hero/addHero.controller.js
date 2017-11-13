function addHero(mainService){
	var ctrl = this;

	ctrl.addHeroModel = function(){
		ctrl.onAddHero({
			$event:{
				hero :  ctrl.hero 
			}
		});
	};
};

angular
  .module('angular-app')
  .controller('addHero', addHero);