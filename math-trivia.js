if (Meteor.isClient) {
    var app = angular.module('math-trivia', ['angular-meteor']);
    app.controller('questionCtrl', ['$scope', '$http', function($scope, $http){

        $http.get("http://numbersapi.com/random/trivia?json=true").then(function(res){
            $scope.question = res.data.text.replace(res.data.number, '____________');
            $scope.answer = res.data.number;
        });

        $scope.submit = function(){

            if(+$scope.guess === $scope.answer){
                $scope.correct = true;
            } else {
                $scope.incorrect = true;
            }

        };

        $scope.nextQuestion = function(){
            $scope.correct = false;
            $scope.incorrect = false;
            $http.get("http://numbersapi.com/random/trivia?json=true").then(function(res){
                $scope.question = res.data.text.replace(res.data.number, '____________');
                $scope.answer = res.data.number;
            });
            $scope.guess = '';
        }
    }]);
}

