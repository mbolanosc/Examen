angular.module('inventory.factories', [])
/**
 * [Toma los datos de firebase para utilizarlos en el contolador]
 * @return {[obj]}                        [obj from firebase]
 */
.factory('$products', function($firebaseArray, $firebaseObject){
	var products = {};
	var ref = firebase.database().ref().child('Products');
	var list = $firebaseArray(ref);
	var cache = [];
	

	products.list = function(){				
		return list.$loaded().then(function(products){
			return cache = products;
		});
	};

	products.add = function(product){
		return list.$add(product);
	};

	products.get = function(id){
		return cache.$getRecord(id);
	};

	products.edit = function(product){
		return list.$save(product);
	};

	return products;
})