angularApp.controller('heroDetailController', heroDetailController);

function heroDetailController ($scope, mainService) {
    function getHeroId() {
        var heroId = location.search.split('id=')[1];
        return heroId;
    };
    $scope.heroId = getHeroId();
    $scope.fullHeroDetail = {
    	hero :{},
    	power : {},
    	corp: {}
    }
    mainService.getFullHeroDetail($scope.heroId,function(fullHeroDetail){
    	$scope.fullHeroDetail.hero = fullHeroDetail[0];
    	$scope.fullHeroDetail.power = fullHeroDetail[1];
    	$scope.fullHeroDetail.corp = fullHeroDetail[2];
    	console.log($scope.fullHeroDetail);
    });
}

