angular.module('myApp')
	.controller('MainCtrl', ['$location', function($location) {
		var self = this;
		self.click = function() {
			setTimeout(urlCheck, 100);
		};
		function urlCheck() {
			var url = $location.url();
			if (url == '/') {
				document.getElementById('desc').className = 'active';
				document.getElementById('calc').className = '';
			} else if (url == '/calculator') {
				document.getElementById('desc').className = '';
				document.getElementById('calc').className = 'active';
			} else {
				document.getElementById('desc').className = '';
				document.getElementById('calc').className = '';
			}
		}
		
		setTimeout(urlCheck, 200);
	}]);