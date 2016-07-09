// Ionic Starter App

angular.module('hola', ['ionic','firebase', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider,$urlRouterProvider){
   $stateProvider

   .state('products', {
      url: '/products',
      views: {
        'products': {
          templateUrl: 'views/list.html',
          controller: 'ProductsCtrl as products'
        }
      }
    })

})

  var config = {
    apiKey: "AIzaSyChqjTB8yd5Cjtmzmc4mtUObhei-EEbX2M",
    authDomain: "practica-firebase-c98eb.firebaseapp.com",
    databaseURL: "https://practica-firebase-c98eb.firebaseio.com",
    storageBucket: "practica-firebase-c98eb.appspot.com",
  };
  firebase.initializeApp(config);