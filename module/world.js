define(['jquery','backbone'],function($,Backbone){
		var worldV=Backbone.View.extend({
			el:'#app',
			render:function(){
				this.$el.append('world ');
			}
		});
		return new worldV();
});