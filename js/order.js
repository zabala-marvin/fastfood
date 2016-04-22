fastfood.controller('orderController', function($scope, $log, $filter, $http, search, restaurantService, orderService) {

	$http.get('http://127.0.0.1/fastfood/json/database.json')
	.success(function() {
		console.log('success');
	})

	$scope.restaurant = restaurantService.restaurant;
	$scope.order = orderService.order;

	$scope.$watch('order', function () {
		orderService.order = $scope.order;
	});

	$scope.add = function (order_name, order_price, order_pic) {
		$scope.order.list.push({ name: order_name, price: order_price, pic: order_pic });
		$scope.order.subtotal += order_price;
		$scope.order.total += order_price;

		console.log($scope.order);
	}

	$scope.delete = function (item) {
		$scope.order.list.splice(item, 1);
		$scope.order.subtotal -= 50;
		$scope.order.total -= 50;

		console.log(item);
	};
	
});

fastfood.controller('addOnModal', function ($scope, $uibModal, $log) {

  $scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'addOn.html',
      controller: 'addOnInstance',
      size: size
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

});

fastfood.controller('addOnInstance', function ($scope, $uibModalInstance) {

  $scope.ok = function () {
    $uibModalInstance.dismiss('cancel');
    //$uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});


fastfood.service('orderService', function () {

	this.order = {
		list: [],

		total: 0,
		subtotal: 0,
		voucher: 0,
		tax: 0,

		deliveryAdd: "Pili Drive, UPLB, Los Banos, Laguna, 45218",
		deliveryTime: "",
		deliveryPrice: 0,

		payment_Type: ""
	};
});

fastfood.service('restaurantService', function() {

});