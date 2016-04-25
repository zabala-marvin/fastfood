fastfood.controller('accountController', function($scope, $state, $http, accountService, orderService) {
    
    $scope.card = {};
    $scope.card.button = "Add New Card";
    $scope.add = {};
    $scope.add.button = "Add New Address";
    $scope.data = {};
    $scope.update;


    $http.get('http://fastfood.local/json/database.json').success(function(data) {
  		$scope.data = data;
  		console.log($scope.data);
  		console.log($scope.data.account[0].info.firstname);
    });

    //console.log($scope.data);
    //console.log($scope.data.account.info.firstname);

	$scope.account = accountService.account;
	$scope.order = orderService.order;

	//console.log($scope.account);

	$scope.$watch('account', function () {
		accountService.account = $scope.account;
	});
	$scope.update_info =  function (user) {
		$scope.account.list[0].info = angular.copy(user);
		//console.log($scope.account.list[0].info);
	};
	$scope.update_add = function (add) {
		$scope.account.list[0].add.push(add);
	};
	$scope.update_card = function (card, index) {
		if (index)
			console.log("true");
		else
			console.log("false");
		//$scope.account.list[0].card.push(card);
	};
	$scope.display_card = function (index) {
		$scope.card.number = $scope.data.account[0].card[index].number;
		$scope.card.cvv = $scope.data.account[0].card[index].cvv;
		$scope.card.zip = $scope.data.account[0].card[index].zip;
		$scope.card.button = "Save";
		$scope.update = index;
	}
	$scope.display_add = function (index) {
		$scope.add.address1 = $scope.data.account[0].add[index].address1;
		$scope.add.address2 = $scope.data.account[0].add[index].address2;
		$scope.add.city = $scope.data.account[0].add[index].city;
		$scope.add.state = $scope.data.account[0].add[index].state;
		$scope.add.zip = $scope.data.account[0].add[index].zip;
		$scope.add.button = "Save";
		$scope.update = index;
	}
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