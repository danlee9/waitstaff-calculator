angular.module('myApp', ['ngRoute', 'ngAnimate'])
	.config(['$locationProvider', '$routeProvider', function($locationProvider,$routeProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider.when('/', {
			templateUrl: '/waitstaff-calculator/views/description.html'
		})
		.when('/calculator', {
			templateUrl: '/waitstaff-calculator/views/calculator.html',
			controller: 'CalcCtrl'
		})
		.when('/error', {
			template: '<main class="error"><p>Error - Page Not Found!</p></main>'
		})
		.otherwise('/error');
	}])
	.run(function($rootScope, $location, $timeout) {
	    $rootScope.$on('$routeChangeError', function() {
	        $location.path("/error");
	    });
	    $rootScope.$on('$routeChangeStart', function() {
	        $rootScope.isLoading = true;
	    });
	    $rootScope.$on('$routeChangeSuccess', function() {
	      $timeout(function() {
	        $rootScope.isLoading = false;
	      }, 1000);
	    });
	});
	