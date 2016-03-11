angular.module('phoneChai',[])
   .controller('PhoneChaiCtrl', ['$scope','$http', function ($scope,$http) {
   	    $http.get('data/mobileData.json').then(function(response){
   	    	$scope.mobiles = response.data;
   	    	console.log($scope.mobiles);
   	    });

   	    $http.get('data/selectMobileData.json').then(function(response){
   	    	$scope.selectMobiles = response.data;
   	    	console.log($scope.selectMobiles);
   	    });
   }])