var app = angular.module('loja', []);

app.controller('testeController', ['$scope', function($scope){
	$scope.user = {meuNome :'Douglasproglima'};
	
	$scope.contador =0;
	$scope.addContador = function() {
		$scope.contador++;
	};
	
	$scope.pessoas = ['Douglas', 'Augusto', 'Pedro', 'Chico', 'Leandro'];
}]);
