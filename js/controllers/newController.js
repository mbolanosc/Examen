angular.module('NewModule', [])
.controller('newController', function($products){
	var add = this;

	add.save = function(){
		$products.add(add.product).then(function(){
			alert('Success!');
		}, function(error){
			alert('Error');
			console.log(error);
		});
	};
});

