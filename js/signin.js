fastfood.service('account')


fastfood.controller('signInModal', function ($scope, $uibModal, $log) {

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'signIn.html',
      controller: 'signInInstance',
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

fastfood.controller('signInInstance', function ($scope, $http, $uibModalInstance) {

  $scope.ok = function (email, password) {

    $scope.user = {};
    $scope.user.email = email;
    $scope.user.password = password;

    $http.get('http://127.0.0.1/fastfood/json/database.json')
      .success(function(data) {
        console.log(data);
    })
    //$uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});