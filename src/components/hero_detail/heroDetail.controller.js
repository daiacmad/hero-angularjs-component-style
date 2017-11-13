function heroDetail(mainService , $stateParams ,$scope){
	var ctrl = this;
	ctrl.slides = ["id","asd","dsa"];
	ctrl.dataHeroDetail = {}

	mainService.getFullHeroDetail($stateParams.id, function(fulldata){
		ctrl.dataHeroDetail.hero = fulldata[0];
		ctrl.dataHeroDetail.power = fulldata[1];
		ctrl.dataHeroDetail.corp = fulldata[2];
	});

	ctrl.modifyUpdateHeroDetail = function(){
		ctrl.hero = angular.copy(ctrl.dataHeroDetail);
	};
	
	ctrl.init = function(){
		
	};
	$scope.$on('LastRepeaterElement', function(){
		$(".slick-slider").slick();	
	});
	ctrl.init();
};

angular
  .module('angular-app')
  .controller('heroDetail', heroDetail);