var angularApp = angular.module("angular-app");

angularApp.directive("heroName", function(){
	var objectDirective = {
		scope:{
			heroName :"@value"
		},
		link : function(scope , element , attr){
		},
		template:"<h1>{{heroName}}</h1>"
	}
	return objectDirective;
});

angularApp.directive("listHero", function(){
	var objectDirective ={
		scope:false,
		link : function(scope , element , attr){
			console.log(scope);
		},
		template:'	<table class="table" >\
        				<tbody>\
        					<tr ng-repeat="hero in heroes track by $index">\
				                <td>{{hero.name}}</td>\
				                <td>{{hero.description}}</td>\
				                <td>{{hero.age}}</td>\
				                <td>{{hero.corp_name}}</td>\
				                <td><button class="btn btn-primary" ng-click="updateHero(hero)">Update</button></td>\
				                <td><button class="btn btn-danger" ng-click="deleteHero(hero)">delete</button></td>\
				                <td><a href="hero-detail.html?id={{hero.id}}">view</a></td>\
        					</tr>\
        				</tbody>\
        			</table>\
        		'
	}
	return objectDirective;
});