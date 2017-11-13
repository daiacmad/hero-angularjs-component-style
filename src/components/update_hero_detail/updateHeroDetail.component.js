var updateHeroDetail = {
	bindings:{
		updateHero: "<"
	},
	templateUrl: "src/components/update_hero_detail/updateHeroDetail.view.html",
	controller : "updateHeroDetail"
};

angular
	.module("angular-app")
	.component("updateHeroDetail", updateHeroDetail);