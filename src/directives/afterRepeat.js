function emitLastRepeaterElement() {
  return {
  	 restrict: 'A',
    link: function(scope) {
    	console.log(2);
		if (scope.$last){
			scope.$emit('LastRepeaterElement');
		}
    }
  };
};

angular
  .module('angular-app')
  .directive("emitLastRepeaterElement",emitLastRepeaterElement);