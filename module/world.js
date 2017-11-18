define(['jquery','backbone'],function($,Backbone){
		var worldV=Backbone.View.extend({
			el:'#app',
			render:function(){
				this.$el.html('world ');
			}
		});
		return new worldV();
});