angular.module('myApp', ['ngRoute', 'ngAnimate'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: './views/description.html'
		})
		.when('/calculator', {
			templateUrl: './views/calculator.html',
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
	