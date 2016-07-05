angular.module('inventory', ['EditModule','InventoryModule','NewModule', 'inventory.factories', 'ngRoute', 'firebase'])

.config(function($routeProvider){
	$routeProvider
	.when('/prducts', {
		templateUrl: "views/list.html"
	})
	/*
	listar info 
	 */
	.when('/products', {
		templateUrl: "views/list.html",
		controller: 'listCtrl as list'
	})
	/*
	edit info y eliminar
	 */
	.when('/product/:id', {
		templateUrl: "views/detail.html",
		controller: 'editController as product'
	})
	/*
	agregar 
	 */
	.when('/new', {
		templateUrl: "views/newform.html",
		controller: 'newController as product'
	})
	.otherwise({
		redirectTo: '/products'
	});

	var config = {
    apiKey: "AIzaSyChqjTB8yd5Cjtmzmc4mtUObhei-EEbX2M",
    authDomain: "practica-firebase-c98eb.firebaseapp.com",
    databaseURL: "https://practica-firebase-c98eb.firebaseio.com",
    storageBucket: "practica-firebase-c98eb.appspot.com",
  };
  firebase.initializeApp(config);
  
});

