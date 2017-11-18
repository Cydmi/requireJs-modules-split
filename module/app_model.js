
define(['backbone'],function(Backbone){
	var app_model = Backbone.Model.extend({
	  urlRoot:'https://cnodejs.org/api/v1/topics',
	  default: {
	    topics: {}
	  },
	  initialize: function () {
	    this.getCaseList();
	  },
	  getCaseList: function () {
	    var self = this;
	  	this.fetch({success(data){
	  		self.set(data)
	  	}})
	  }
	});
	return new app_model();
})