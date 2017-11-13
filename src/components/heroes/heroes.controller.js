function heroes(mainService){
	var ctrl = this;
		
    ctrl.updateHero = function(event){
      ctrl.onModifyUpdateHero({
          $event:{
              hero : event.hero
          }
      });
    };
    ctrl.deleteHeroModel = function(event){
      ctrl.onDeleteHero({
            $event:{
                hero : event.hero
            }
      });
    };
};

angular
  .module('angular-app')
  .controller('heroes', heroes);