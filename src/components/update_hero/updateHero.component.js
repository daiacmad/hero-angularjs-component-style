var angularApp = angular.module("angular-app");

var updateHero = {
	bindings:{
		hero : "<",
		corporations : "<",
		loading : "<",
		onUpdateHero : "&",
	},
	templateUrl: "src/components/update_hero/updateHero.view.html",
	controller: "updateHero"
};

angular
	.module("angular-app")
	.component("updateHero", updateHero);