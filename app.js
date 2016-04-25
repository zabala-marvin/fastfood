var dependencies = [
  'ui.bootstrap', 
  'ui.bootstrap.modal',
  'ui.router',
  'ui.bootstrap.accordion'
];

var fastfood = angular.module('fastfood', dependencies);

fastfood.controller('mainController', function($scope, $state, searchService) {

	$scope.search = searchService.search;

	$scope.$watch('search', function () {
		searchService.search = $scope.search;
	});
	$state.transitionTo('home');
});

fastfood.service('searchService', function () {
	this.search = '';
})