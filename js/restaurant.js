fastfood.controller('restaurantController', function ($scope, $log, $state, search, restaurantService, orderService) {
	
	$state.transitionTo('restaurant.order');

	$scope.search = search;
	$scope.restaurant = restaurantService.restaurant;
	$scope.order = orderService.order;
	console.log($scope.search);
})