loginApp.config(['$routeProvider',function($routeProvider){

	$routeProvider
	.when('/' , {
	templateUrl:'Main.html'
	})
	.when('/login' , {
	templateUrl:'loginPage.html',
	controller:'loginController'
	})
	.when('/profile', {
	templateUrl:'Profile.html'
	
	})
	
	.otherwise({
	redirectTo:'/'
	
	});
}]);