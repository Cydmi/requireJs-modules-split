define(['jquery','backbone'],function($,Backbone){
	var router=Backbone.Router.extend({
		routes:{
			'':'hello',
			'world':'world'	
		},
		hello:function(){
			require(['./module/hello'],function(hello){
					hello.render();
			});
		},
		world:function(){
			require(['./module/world'],function(world){
					world.render();
			});
		}
	});


	function init(){
		new router();
	}

	return {init:init}
});