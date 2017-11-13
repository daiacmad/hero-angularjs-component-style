var angularApp = angular.module("angular-app");

var heroContainer = {
	templateUrl: "src/components/hero_container/heroContainer.view.html",
	controller: "heroContainer"
};

angular
	.module("angular-app")
	.component("heroContainer", heroContainer);