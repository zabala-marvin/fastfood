fastfood.controller('logInModal', function ($scope, $uibModal, $log) {

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'logIn.html',
      controller: 'logInInstance',
      size: size
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
});

fastfood.controller('logInInstance', function ($scope, $state, $uibModalInstance, authenticationService) {

    $scope.authenticationService = authenticationService;

    $scope.ok = function (username, password) {

        $scope.authenticationService.logIn(username, password, function (response) {
            if (response)
              console.log("Log In success");
            else
              console.log("log In failed");
        });

        //$uibModalInstance.close($scope.selected.item);
        $uibModalInstance.dismiss('cancel');
        $state.transitionTo('account');
    };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});