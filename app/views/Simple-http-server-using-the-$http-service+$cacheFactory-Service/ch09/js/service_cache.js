var app = angular.module('myApp', []);
app.factory('MyCache', function($cacheFactory) {
	return $cacheFactory('MyCache', {capacity:3});
		
	
});

app.controller('myController', ['$scope', 'MyCache' function ($scope, cache){
	
	cache.put('myValue', 55);

	
}]);

app.controller('myController2', ['$scope', 'MyCache' function ($scope, cache){
	
	$scope.value = cache.get('myValue');

	
}]);

