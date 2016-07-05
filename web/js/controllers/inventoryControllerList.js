angular.module('InventoryModule', [])
/**
 * [Toma la lista de productos y la imprime en la vista list.html]
 */
.controller('listCtrl', function($location, $products){
  var list = this;

  $products.list().then(function(products){
    list.products = products;
  }, function(error){
    console.log(error);
    alert(error.message);
  }); 
})
