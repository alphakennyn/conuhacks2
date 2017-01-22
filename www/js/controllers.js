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
  $scope.donatetoOrg = function(placename)
  {
    alert(placename);

  }
$scope.namearr = [2,3,4];
  $http({
  method: 'GET',
  url: 'http://api.sandbox.yellowapi.com/FindBusiness/?what=hospital&where=montreal&UID=127.0.0.1&apikey=87twrs7xb2eaetj5fbtm3hx6&fmt=json'
}).then(function successCallback(response) {
                $scope.json_file = response.data.listings
                console.log($scope.json_file);

  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  })


})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats,$http) {
  $scope.dataname = ($stateParams.dataname);
})
//Bearer 021-f9c092b2-1be9-430c-8b05-aef5ce1f31b9
.controller('donateCtrl', function($scope,$http) {
   $scope.saveCustomer = function(status, response) {
     console.log(response.id);
     var msg = {
       "currency":"US",
        "amount":10.0,
        "siteCode":"test_site",
        "customAttributes":{
          "token":response.id

        }


     }

     $http({
  method: 'POST', 
  url: 'https://api.beta.yaas.io/hybris/payment-stripe/v1/feelsafe/payments', 
  headers: {'Authorization': 'Bearer 021-d48f3391-2921-4581-83eb-bb7169cc2ac5'},
  data:msg 
}).success(function(data){

       console.log(data);

     });
    //  $http.post('https://api.beta.yaas.io/hybris/payment-stripe/v1/feelsafe/payments',msg).success(function(data){

    //    console.log(data);

    //  })


  };
});
