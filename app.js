var app = angular.module('formApp',[]);

app.directive('optIn', function(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'form.html',
		replace: false
	}
})