var app = angular.module('alertsApp', []);
app.controller('alertsController', ['$scope', '$window', function ($scope, window){
	window.alert("Your Screen is: \n" +
		window.screen.availWidth + "X" + window.screen.availHeight);
	
}]);


