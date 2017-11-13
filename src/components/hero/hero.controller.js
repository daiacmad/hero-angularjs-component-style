function hero(mainService){
	var ctrl = this;

	ctrl.updateHero = function(hero){
		ctrl.onModifyUpdateHero({
			$event:{
				hero : angular.copy(hero)
			}
		});
	};

	ctrl.deleteHero = function(hero){
		ctrl.onDeleteHero({
			$event:{
				hero : hero
			}
		});
	};
	
};

angular
  .module('angular-app')
  .controller('hero', hero);