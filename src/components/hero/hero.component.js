var angularApp = angular.module("angular-app");

var hero = {
	bindings:{
		heroes: "<",
		onModifyUpdateHero : "&",
		onDeleteHero : "&"
	},
	templateUrl: "src/components/hero/hero.view.html",
	controller:"hero"
};

angular
	.module("angular-app")
	.component("hero", hero);