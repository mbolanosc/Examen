/*HTML LISTAR!!*/
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

    list.save = function(){
		$products.add(list.product).then(function(){
			alert('Success!');
			}, function(error){
			alert('Error');
			console.log(error);
		});
    };

	list.delete = function(product){
		$products.remove(product).then(function(data){
			return;
		},function(error){
			console.log(error);
			console.log('algo paso mal al eliminar');
		});
	};
})
