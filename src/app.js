var angularApp = angular.module("angular-app",["ui.router"]);

angularApp.config(function($stateProvider, $urlRouterProvider ,$locationProvider ){
	$urlRouterProvider.otherwise("/heroes");
	$stateProvider.state('heroes',{
		url: "/heroes",
		component: 'heroContainer'
	});
	// $stateProvider.state('corporations',{
	// 	url: "/corporations",
	// 	templateUrl: 'views/corp.html',
	// 	controller:"controllerCorp"
	// });
	$stateProvider.state('heroDetail',{
		url: "/hero-detail/:id",
		component: 'heroDetail'
	});

	$stateProvider.state('heroDetail.update',{
		url: "/update",
		component: "updateHeroDetail"
	});

	// $stateProvider.state('heroDetails.delete',{
	// 	url: "/delete",
	// 	templateUrl: 'views/hero-detail-delete.html'
	// });
});
