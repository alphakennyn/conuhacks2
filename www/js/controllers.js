angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats,$http) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $http({
  method: 'GET',
  url: 'http://api.sandbox.yellowapi.com/FindBusiness/?what=hospital&where=montreal&UID=127.0.0.1&apikey=87twrs7xb2eaetj5fbtm3hx6&fmt=json'
}).then(function successCallback(response) {
                $scope.json_file = JSON.stringify(response.data);
                console.log(response.data);
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  })


})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
