fastfood.factory('search', function(){
    return { text: '' };
});

fastfood.controller('searchController', function($scope, $log, $state, $http, search, restaurantService, searchService) {

	$http.get('http://127.0.0.1/fastfood.local/json/database.json')
	.success(function() {
		console.log('success');
	})

  $scope.searchLocation = searchService.search;
  console.log("search query :" + $scope.search);
  $scope.restaurant = restaurantService.restaurant;
	$scope.search = search;

	$scope.order = function (search) {
		$scope.search.text = search;
		$state.transitionTo('restaurant');
	}

	$scope.cuisine_click = function (cuisine) {
		$scope.cuisine = cuisine;
	}

	$scope.range = function(count){
  		var ratings = []; 
		
		for (var i = 0; i < count; i++) { 
		  ratings.push(i) 
		} 
		  return ratings;
	};

	$scope.filter_onlinePay = function (onlinePay) {
		if (onlinePay)
			return (true);
		else
			return (''); 
	}
	$scope.filter_preOrder = function (preOrder) {
		if (preOrder)
			return (true);
		else
			return (''); 
	}
	$scope.filter_vouchers = function (vouchers) {
		if (vouchers)
			return (true);
		else
			return (''); 
	}
	$scope.filter_deal = function (deal) {
		if (deal)
			return (true);
		else
			return (''); 
	}

	$scope.location = {
		list: [
			{
				city: "",
				state: "",
				zip: 0000
			}
		]
	};

});