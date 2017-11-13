var angularApp = angular.module("angular-app");

var heroDetail = {
	bindings: {
		onModifyUpdateHero : "&",
	},
	templateUrl: "src/components/hero_detail/heroDetail.view.html",
	controller: "heroDetail"
};

angular
	.module("angular-app")
	.component("heroDetail", heroDetail);