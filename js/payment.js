fastfood.controller('paymentController', function($scope, $log, restaurantService, orderService, accountService) {

	$scope.account = accountService.account;
	$scope.order = orderService.order;

	$scope.status = {
	    isFirstOpen: true,
	    isFirstDisabled: false
  	};
});

fastfood.controller('receiptModal', function ($scope, $uibModal, $log, orderService, accountService) {

  $scope.open = function () {

    $scope.account = accountService.account;
    $scope.order = orderService.order;

    $scope.order.name = $scope.account.list[0].info.firstname + " " + $scope.account.list[0].info.lastname;
    $scope.order.email = $scope.account.list[0].info.email;
    $scope.order.receiptCode = "54FA56W4AZ5";
    $scope.order.date = "11:30 Mar 15, 2012";
    $scope.order.tax = "3%";

    $scope.order.cardName = "VISE";
    $scope.order.cardNumber = 123145;
    $scope.order.cardType = "ATMN";
    $scope.order.cardExp = "xxxx-xx";

    $scope.$watch('order', function () {
      orderService.order = $scope.order;
      console.log($scope.account);
      $scope.account.list[0].order_history.push(orderService.order);
      console.log($scope.account);
    });

    console.log(orderService.order);

    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'receipt.html',
      controller: 'receiptInstance'
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
});

fastfood.controller('receiptInstance', function ($scope, $uibModalInstance, orderService, accountService, accountService) {

	$scope.account = accountService.account;
  $scope.order = orderService.order;

    $scope.ok = function () {

      orderService.order = {
        list: [],

        total: 0,
        subtotal: 0,
        voucher: 0,

        deliveryAdd: "Pili Drive, UPLB, Los Banos, Laguna, 45218",
        deliveryTime: "",
        deliveryPrice: 0,

        payment_Type: ""
      };

      console.log(orderService.order);
      $uibModalInstance.dismiss('cancel');

    	//$uibModalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
});

fastfood.controller('reviewModal', function ($scope, $uibModal, $log, orderService, accountService) {

  $scope.open = function () {

    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'reviewModal.html',
      controller: 'reviewInstance'
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
});

fastfood.controller('reviewInstance', function ($scope, $uibModalInstance, orderService, accountService, accountService) {

  $scope.ok = function (review) {
    $scope.reviews = {};
    $scope.reviews.text = review;
    $scope.reviews.rest = "Chowking";
    $scope.reviews.date = new Date();
    $scope.reviews.rating = 5;

    accountService.account.list[0].reviews.push($scope.reviews);

    $uibModalInstance.dismiss('cancel');
    //$uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});