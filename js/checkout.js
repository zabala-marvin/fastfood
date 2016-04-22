fastfood.controller('checkoutController', function($scope, $log, accountService, restaurantService, orderService) {

	$scope.account = accountService.account;
	$scope.order = orderService.order;
	$scope.payment_type;
	$scope.deliveryTime;

	$scope.$watch('payment_type', function () {
		$scope.order.payment_type = $scope.payment_type;
		console.log(orderService.order);
	});

	$scope.$watch('deliveryTime', function () {
		$scope.order.deliveryTime = $scope.deliveryTime;
		console.log(orderService.order);
	});

	$scope.$watch('order', function () {
		orderService.order = $scope.order;
	});


	$scope.sample = function () {
		var root = document.getElementsByClassName( this )[0];
		root.setAttribute( 'class', 'danger' );
	}
});