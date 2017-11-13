function updateHero(mainService){
	var ctrl = this;

	ctrl.updateHeroModel = function(){
		ctrl.onUpdateHero({
			$event : ctrl.hero
		})
	};
};

angular
  .module('angular-app')
  .controller('updateHero', updateHero);