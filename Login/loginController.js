loginApp.controller('loginController',['$rootScope', '$scope', '$location', function($rootScope, $scope, $location){

$scope.myName="";
$scope.myPass="";
$scope.login=function(){
 if($scope.myName=='ravi' && $scope.myPass=='ravi'){
 $location.path("/profile");
 }
 
}
}]);