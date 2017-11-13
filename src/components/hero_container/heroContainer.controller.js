function heroContainer(mainService){
	var ctrl = this;

	ctrl.loading = {
		update: false,
		delete: false,
		add: false
	};

	//get data
    ctrl.getHeroes = function(){
	    mainService.getHeroes(function (data) {
	       	ctrl.heroes = data;
	    });
    };
    ctrl.getHeroes();

	mainService.getCorporation(function(res){
		ctrl.corporations = res;
	});

	//modify data
	ctrl.modifyUpdateHero = function($event){
		ctrl.dataModifyUpdateHero = $event.hero;
	};
	
    //action
	ctrl.addHeroModel = function($event){
		ctrl.loading.add = true;
		mainService.addHero($event.hero , function(res){
			ctrl.getHeroes();
			ctrl.loading.add = false;
		});
	};

	ctrl.deleteHeroModel = function($event){
		ctrl.loading.delete = true;
		mainService.deleteHero($event.hero , function(){
			ctrl.removeHeroAfterDelete($event.hero);
			ctrl.loading.delete = false;
		})
	};

	ctrl.updateHeroModel = function($event){
		ctrl.loading.update = true;
		mainService.updateHero($event , function(data){
			ctrl.updateListHeroAfterUpdate($event);
			ctrl.loading.update = false;
        });
	};

	//update List
	ctrl.updateListHeroAfterUpdate = function($event){
		ctrl.heroes.forEach(function(value , key){
			if(value.id == $event.id){
				ctrl.heroes[key] = $event;
			}
		});
	};

	ctrl.removeHeroAfterDelete = function(hero){
		ctrl.heroes.forEach(function(value , key){
            if(value.id == hero.id){
                ctrl.heroes.splice(key,1);
            }
        });
	};
};

angular
  .module('angular-app')
  .controller('heroContainer', heroContainer);