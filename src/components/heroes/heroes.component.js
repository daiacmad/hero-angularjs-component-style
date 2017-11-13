var heroes = {
	bindings:{
		onModifyUpdateHero : "&",
		onDeleteHero : "&",
		heroes: "<"
	},
	templateUrl: "src/components/heroes/heroes.view.html",
	controller : "heroes"
};

angular
	.module("angular-app")
	.component("heroes", heroes);