var myApp=angular.module("module1",['ngRoute']);

myApp.config(['$routeProvider' , function($routeProvider){

	$routeProvider
	.when('/Menu' , {
	
	templateUrl:'Menu.html'
	
	})
	.when('/About' , {
	templateUrl:'About.html'
	})
	.otherwise({
	redirectTo:'/Menu'
	});
}]);