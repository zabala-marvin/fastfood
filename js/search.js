fastfood.controller('searchController', function($scope, $log, $state, $http, restaurantService, searchService) {

	$http.get('http://fastfood.local/json/database.json')
	.success(function(data) {
  		$scope.data = data;
  		//console.log(data.restaurant[0].name);
    });

  $scope.filter_location = searchService.search;
  console.log("Location query :" + $scope.filter_location);
  $scope.restaurant = restaurantService.restaurant;

	$scope.order = function (search) {

		searchService.search = search;
		console.log(searchService.search);
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
	}
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
	}
});