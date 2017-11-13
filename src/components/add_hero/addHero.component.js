var addHero = {
	bindings:{
		corporations: "<",
		addHeroSuccessfully : "&",
		onAddHero : "&",
		loading : "<"
	},
	templateUrl: "src/components/add_hero/addHero.view.html",
	controller : "addHero"
};

angular
	.module("angular-app")
	.component("addHero", addHero);