var angularApp = angular.module("angular-app");

angularApp.component("componentListHero",{
	bidings:{
		heroes: '&',
	},
	controller:["mainService","$scope",
		function(mainService){
			ctrl = this;
			
			mainService.getHeroes(function(res){
				ctrl.heroes = res;
			});

			updateHero = function(hero){
				console.log(hero);
			}
		}],
	templateUrl: "./views/list-hero.html",
});