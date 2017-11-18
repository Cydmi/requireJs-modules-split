define(['jquery','backbone'],function($,Backbone){
		var helloV=Backbone.View.extend({
			el:'#app',
			render:function(){
				this.$el.html('hello ');
			}
		});
		return new helloV();
});