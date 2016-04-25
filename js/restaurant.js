fastfood.controller('restaurantController', function ($scope, $log, $state, $http, restaurantService, orderService, searchService) {
	
	$http.get('http://fastfood.local/json/database.json').success(function(data) {
  		$scope.data = data;
  		console.log(data);
    });

	$state.transitionTo('restaurant.order');

	$scope.search = searchService.search;
	$scope.restaurant = restaurantService.restaurant;
	$scope.order = orderService.order;
	console.log(searchService.search);
	console.log($scope.search);
})