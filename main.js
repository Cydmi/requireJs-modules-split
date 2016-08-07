require.config({
 shim: {
		underscore: {
		    exports: '_'
		}
    },
    paths: {
		jquery: './libs/jquery-min',
		underscore: './libs/underscore-min',
		backbone: './libs/backbone-min'
    }
});

require([
	'backbone',
	'router'
], function (Backbone, router) {
	router.init();
	Backbone.history.start();
});
