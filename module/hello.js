define(['jquery','backbone'],function($,Backbone){
		var helloV=Backbone.View.extend({
			el:'#app',
			render:function(){
				this.$el.append('hello ');
			}
		});
		return new helloV();
});