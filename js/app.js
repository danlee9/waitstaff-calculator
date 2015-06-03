angular.module('myApp', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: '../views/description.html'
		})
		.when('/calculator', {
			templateUrl: '../views/calculator.html',
			controller: 'CalcCtrl'
		})
		.when('/error', {
			template: '<main class="error"><p>Error - Page Not Found</p></main>'
		})
		.otherwise('/error');
	}]);
	