/**
 * Created by TUNGUYENDO on 6/2/2017.
 */
var angularApp = angular.module("angular-app");
angularApp.service('mainService', mainService);
function mainService($http , $q) {
    var serviceIntance = {
        getHeroes:function (callback) {
            $http({
                url:"http://trainning.acc-svrs.com/api/listhero",
                method: "GET"
            }).then(
                function successCallback(res){
                    serviceIntance.getCorporation(function(corp){
                        res.data.forEach(function(value , key){
                            var corpOfHero = _.find(corp, function(num){ return num.id == value.id_corp; });
                            value.corp_name = corpOfHero.name;
                        });
                        callback(res.data);
                    });
                },
                function errorCallback(err){
                    console.log(err);
                }

            );
        },
        getCorporation:function (callback) {
            $http({
                url:"http://trainning.acc-svrs.com/api/listcorporation",
                method: "GET"
            }).then(
                function successCallback(res){
                    callback(res.data);
                },
                function errorCallback(err){
                    console.log(err);
                }

            );
        },
        addHero:function (data , callback) {
            $http({
                url:"http://trainning.acc-svrs.com/api/add",
                method: "POST",
                data:{
                    name:data.name,
                    description:data.description,
                    age:data.age,
                    id_corp:data.corp,
                }
            }).then(
                function successCallback(res){
                    callback(res.data);
                },
                function errorCallback(err){
                    console.log(err);
                }

            );
        },
        updateHero:function (data , callback){
            $http({
                url:"http://trainning.acc-svrs.com/api/edit/"+data.id,
                method: "POST",
                data:{
                    name:data.name,
                    description:data.description,
                    age:data.age,
                    id_corp:data.id_corp,
                }
            }).then(
                function successCallback(res){
                    callback(res.data);
                },
                function errorCallback(err){
                    console.log(err);
                }

            );
        },
        deleteHero:function (data , callback){
            $http({
                url:"http://trainning.acc-svrs.com/api/delete/"+data.id,
                method: "GET"
            }).then(
                function successCallback(res){
                    callback(res);
                },
                function errorCallback(err){
                    console.log(err);
                }

            );
        },
        addCorp: function(data , callback){
            $http({
                url:"http://trainning.acc-svrs.com/api/addcorp",
                method: "POST",
                data : data
            }).then(
                function successCallback(res){
                    callback(res.data);
                },
                function errorCallback(err){
                    console.log(err);
                }

            );
        },
        deleteCorp: function(data ,callback){
            $http({
                url:"http://trainning.acc-svrs.com/api/deletecorp/"+data.id,
                method: "GET"
            }).then(
                function successCallback(res){
                    callback(res.data);
                },
                function errorCallback(err){
                    console.log(err);
                }

            );
        },
        updateCorp:function (data , callback){
            $http({
                url:"http://trainning.acc-svrs.com/api/editcorp/"+data.id,
                method: "POST",
                data:{
                    name:data.name,
                    description:data.description
                }
            }).then(
                function successCallback(res){
                    callback(res.data);
                },
                function errorCallback(err){
                    console.log(err);
                }

            );
        },

        ///-------------hero detail
        getHeroDetail: function(heroId){
            var defer = $q.defer();
            $http({
                url:"http://trainning.acc-svrs.com/api/herodetail/"+heroId,
                method: "GET"
            }).then(
                function successCallback(res){
                    defer.resolve(res.data);
                },
                function errorCallback(err){
                    defer.reject(err);
                }

            );
            return defer.promise;
        },
        getHeroCorp: function(heroId){
            var defer = $q.defer();
            $http({
                url:"http://trainning.acc-svrs.com/api/herodetailcorp/"+heroId,
                method: "GET"
            }).then(
                function successCallback(res){
                    defer.resolve(res.data);
                },
                function errorCallback(err){
                    defer.reject(err);
                }

            );
             return defer.promise;
        },
        getHeroPower: function(heroId){
            var defer = $q.defer();
            $http({
                url:"http://trainning.acc-svrs.com/api/herodetailpower/"+heroId,
                method: "GET"
            }).then(
                function successCallback(res){
                    defer.resolve(res.data);
                },
                function errorCallback(err){
                    defer.reject(err);
                }

            );
            return defer.promise;
        },
        getFullHeroDetail: function(heroId , callback){

            $q.all([serviceIntance.getHeroDetail(heroId) , serviceIntance.getHeroPower(heroId) , serviceIntance.getHeroCorp(heroId)]).then(
                function successCallback(res){
                    callback(res);
                },
                function errorCallback(err){
                    console.log(err);
                }
            );
        }
    };
    return serviceIntance;
}