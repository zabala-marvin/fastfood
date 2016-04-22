fastfood.controller('accountController', function($scope, $state, accountService, orderService) {

	$scope.account = accountService.account;
	$scope.order = orderService.order;

	console.log($scope.account);

	$scope.$watch('account', function () {
		accountService.account = $scope.account;
	});

	$scope.update_info =  function (user) {
		$scope.account.list[0].info = angular.copy(user);
		console.log($scope.account.list[0].info);
	};

	$scope.update_add = function (add) {
		$scope.account.list[0].add.push(add);
	};

	$scope.update_card = function (card) {
		$scope.account.list[0].card.push(card);
	};
});

fastfood.service('accountService', function () {

	this.index;

	this.account = {
		list: [
			{ 
				id: 0,

				info: {
					firstname: "Jaden Drift",
					lastname: "Narisma",
					email: "dummy@email.com",
					password: "******",
					pic: ""
				},

				add: [
					{
						address1: "Pili Drive",
						address2: "UPLB",
						address3: "",
						city: "Los Banos",
						state: "Laguna",
						zip: "45218"
					}
				],

				card: [ 
					{
						number: "45-564-455-89",
						exp_month: 10,
						exp_year: 2020,
						cvv: 4541,
						zip: 7845
					}
				],
				
				order_history: [],

				reviews: []
			}
		]
	}
});

fastfood.controller('accountModal', function ($scope, $uibModal, $log, orderService, accountService) {

	$scope.account = accountService.account;
	$scope.index = 0;

  $scope.open = function (index) {

  	accountService.index = index;
  	console.log($scope.index);
  	console.log($scope.account);

    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'account.html',
      controller: 'accountInstance'
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    	}, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
});

fastfood.controller('accountInstance', function ($scope, $uibModalInstance, orderService, accountService, accountService) {

	$scope.account = accountService.account;
	$scope.index = accountService.index;

    $scope.ok = function () {
      $uibModalInstance.dismiss('cancel');
    	//$uibModalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
});