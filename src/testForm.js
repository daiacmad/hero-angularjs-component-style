var app = angular.module("angular-app");

app.controller("testForm", testForm);

function testForm() {
	var ctrl = this;

	ctrl.model={
		names:[{
			name: "asdsda"
		},{
			name: "bbbb"
		}],
	}
	var number = 1;
	ctrl.addInput = function(){
		var newValue = {
			name: number
		}
		number += 1;
		ctrl.model.names.push(newValue);
	}
}