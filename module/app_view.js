define(['jquery','backbone',"underscore","./app_model"],function($,Backbone,_,app_model){
		var app_view=Backbone.View.extend({
			el:'#app',
			model:app_model,
			template:_.template('<% for(var i=0;i<data.length;i++){%><div><%= data[i].title%></div><%}%>'),
			initialize:function(){
			  this.listenTo(this.model,'change',this.render);
			},
			render:function(){
				console.log(this.model.attributes)
				this.$el.html(this.template(this.model.attributes))
			},
		});
		return app_view;
});