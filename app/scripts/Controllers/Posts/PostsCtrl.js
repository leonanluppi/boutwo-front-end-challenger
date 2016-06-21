var app = angular.module('PostsApp', ['infinite-scroll']);
angular.module('infinite-scroll').value('THROTTLE_MILLISECONDS', 250) // Processa os dados gerados em uma só vez em 250 milliseconds


app.controller('PostsCtrl', function($scope, $http) {

    $scope.posts = [];
    $scope.count = 400; // Contagem de posts na pagina
    
    while ($scope.count){

    $scope.posts[$scope.count] = $scope.count --;
   	}
    $scope.loadMore = function(){
 		$scope.posts = $scope.posts; 
    }
});
// CONTROLE DOS NOMES GERADOS
app.controller('showNames', function($scope,$http){
	 $http.get('http://uinames.com/api/?region=brazil')
    .then(function(response) {
        $scope.myNames = response.data;
    });
});

//CONTROLE DOS POSTS GERADOS
app.controller('showPosts', function($scope,$http){
    $http.get('http://api.icndb.com/jokes/random')
    .then(function(response) {
        $scope.myPosts = response.data;
    });
    $scope.like = function(count){
    	$scope.like += 1;
    }
});



