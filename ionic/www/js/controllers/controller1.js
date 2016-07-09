/*angular.module('starter.controllers', [])

.controller('MediaCtrl', function ($firebaseArray) {
	var list = this;
	list.images = [];
	var ref = firebase.database().ref().child('products');

	$firebaseArray(ref).$loaded().then(function (results){
      list.images = results;
    },function(error){
      console.error(error);
      alert(error);
    });

})*/
angular.module('starter.controllers', [])

.controller('ProductsCtrl', function($firebaseArray){
  var products = this;
  products.catalog = [];
  var ref = firebase.database().ref().child('products');

  $firebaseArray(ref).$loaded().then(
    function(results){
      products.catalog = results;
    }, function(error){
      console.error(error);
      alert(error);
    }
  );

})