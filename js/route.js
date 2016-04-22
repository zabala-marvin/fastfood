fastfood.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise("home")
  
  $stateProvider
	  .state('home', {
	  	url: 'home',
	    templateUrl: 'views/home.html',
	    controller: 'mainController',
	    authenticate: false
  		})
	  
	  .state('account', {
	  	url: '/account',
	    templateUrl: 'views/account.html',
	    controller: 'accountController',
	    authenticate: true
		})	  

	  .state('search', {
	  	url: '/search',
	  	templateUrl: 'views/search.html',
	  	controller: 'searchController'
	  })

	  .state('restaurant', {
	  	url: '/restaurant/order',
	    templateUrl: 'views/restaurant.html',
	    controller: 'restaurantController',
	    authenticate: false
		})

		  .state('restaurant.order', {
		  	url: '/restaurant/order',
		    templateUrl: 'views/order.html',
		    controller: 'orderController',
		    authenticate: false
			})

		  .state('restaurant.review', {
		  	url: '/review',
		  	templateUrl: 'views/review.html',
		  	controller: '',
		  	authenticate: true
		  })

		  .state('restaurant.checkout', {
		  	url: '/checkout',
		  	templateUrl: 'views/checkout.html',
		  	controller: 'checkoutController',
		  	authenticate: true
		  })

		  .state('restaurant.payment', {
		  	url: '/payment',
		  	templateUrl: 'views/payment.html',
		  	controller: 'paymentController',
		  	authenticate: true
		  });

});