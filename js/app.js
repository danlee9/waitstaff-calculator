angular.module('myApp', [])
	.controller('MyCtrl', function($scope) {
		$scope.clicked = false;
		$scope.validated = false;
		$scope.mealSubTotal = 0;
		$scope.mealTip = 0;
		$scope.mealTotal = 0;
		$scope.tipTotal = 0;
		$scope.mealCount = 0;
		$scope.avgTipPerMeal = 0;
		var tax, tip, price;

		$scope.submit = function() {
			$scope.clicked = true;
			

			//myForm.meal.$error.required || myForm.meal.$error.pattern
			if ($scope.myForm.$valid) {
				$scope.validated = true;
			}

			if ($scope.validated) {
				tax = $scope.tax / 100;
				tip = $scope.tip / 100;
				price = $scope.price/1;
				$scope.mealSubTotal = price + price * tax;
				$scope.mealTip = $scope.mealSubTotal * tip;
				$scope.mealTotal = $scope.mealSubTotal + $scope.mealTip;
				$scope.tipTotal += $scope.mealTip
				$scope.mealCount++;
				$scope.avgTipPerMeal = $scope.tipTotal / $scope.mealCount;

				$scope.price = "";
				$scope.tax = "";
				$scope.tip = "";
				$scope.clicked = false;
				$scope.validated = false;
			}
		}

		$scope.cancel = function() {
			$scope.price = "";
			$scope.tax = "";
			$scope.tip = "";
		}

		$scope.reset = function() {
			$scope.mealSubTotal = 0;
			$scope.mealTip = 0;
			$scope.mealTotal = 0;
			$scope.tipTotal = 0;
			$scope.mealCount = 0;
			$scope.avgTipPerMeal = 0;
			$scope.price = "";
			$scope.tax = "";
			$scope.tip = "";
		}
	})