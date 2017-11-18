define(['jquery','backbone'],function($,Backbone){
	var router=Backbone.Router.extend({
		routes:{
			'':'hello',
			'world':'world',
			'fetch_service':'fetch_service'
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
		},
		fetch_service:function(){
			require(['./module/app_view'],function(app_view){
				var app=new app_view();
				app.render();
			})
		}
	});


	function init(){
		new router();
	}

	return {init:init}
});