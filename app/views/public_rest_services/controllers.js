'use strict';
/* Controllers */
var blogControllers =
angular.module('blogControllers', []);
blogControllers.controller('BlogCtrl',
['$scope', 'BlogList',
function BlogCtrl($scope, BlogList) {
BlogList.get({},
function success(response) {
console.log("Success:" + JSON.stringify(response));
$scope.blogList = response;
},
function error(errorResponse) {
console.log("Error:" + JSON.stringify(errorResponse));
});
}]);
blogControllers.controller('BlogViewCtrl',
['$scope', '$routeParams', 'BlogPost',
function BlogViewCtrl($scope, $routeParams, BlogPost) {
var blogId = $routeParams.id;
BlogPost.get({id: blogId},
function success(response) {
console.log("Success:" + JSON.stringify(response));
$scope.blogEntry = response;
},
function error(errorResponse) {
console.log("Error:" + JSON.stringify(errorResponse));
});
}]);
