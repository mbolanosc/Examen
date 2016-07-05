angular.module('EditModule', [])
.controller('editController', function($routeParams, $products){
	var edit = this;
	var id = $routeParams.id;

	edit.product = $products.get(id);

	edit.save = function(){
		$products.edit(edit.product).then(function(){
			alert('Success!');
		}, function(error){
			alert('Error');
			console.log(error);
		});
	};
});
