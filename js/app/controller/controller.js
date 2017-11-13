/**
 * Created by TUNGUYENDO on 5/26/2017.
 */

angularApp.controller('main-controller', maincontroller);

function maincontroller ($scope, mainService) {

    $scope.isSendingRequest = false;

    $scope.message = "this is my name";
    function getCorpModel(){
        mainService.getCorporation(function (data) {
            $scope.corporations = data;
        });
    };
    getCorpModel();

    // function getHeroes() {
    //     mainService.getHeroes(function (data) {
    //         mainService.getCorporation(function(corp){
    //             data.forEach(function(value , key){
    //                 var corpOfHero = _.find(corp, function(num){ return num.id == value.id_corp; });
    //                 value.corp_name = corpOfHero.name;
    //             });
    //             $scope.heroes = data;
    //         });
            
    //     });
    // };
    // getHeroes();

    $scope.addHero = function(){
        $scope.isSendingRequest = true;
        mainService.addHero($scope.newHero, function () {
            getHeroes();
            $scope.newHero={};
            $scope.isSendingRequest = false;
        });
    };

    $scope.updateHeroData= {};

    $scope.updateHero = function (hero) {
        $scope.updateHeroData = angular.copy(hero) ;
        $scope.updateHeroData.id_corp = String(angular.copy(hero.id_corp));
    };

    $scope.updateHeroModel = function(hero){
        mainService.updateHero(hero,function(data){
            // $scope.heroes = data;
            getHeroes();
        });
    };

    $scope.deleteHero = function (hero) {
        mainService.deleteHero(hero, function(){
            $scope.heroes.forEach(function(value , key){
                if(value.id == hero.id){
                    $scope.heroes.splice(key,1);
                }
            })
        });
    };

    $scope.addCorp = function(){
        mainService.addCorp($scope.newCorp, function(){
            getCorpModel();
        });
    };

    $scope.deleteCorp = function(corp){
        mainService.deleteCorp(corp, function(){
            $scope.corporations.forEach(function(value , key){
                if(value.id == corp.id){
                    $scope.corporations.splice(key,1);
                }
            })
        });
    };

    $scope.updateCorp = function (corp) {
        $scope.updateCorpData = angular.copy(corp) ;
    };

    $scope.updateCorpModel = function(corp){
        mainService.updateCorp(corp,function(data){
            getCorpModel();
        });
    };
}

