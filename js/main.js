/**
 * Created with JetBrains WebStorm.
 * User: georgesanchez
 * Date: 6/22/13
 * Time: 9:49 AM
 * To change this template use File | Settings | File Templates.
 */
//File name main.js
'use.strict';
require.config({
    paths: {
        jquery: 'libs/jquery/jquery',
        underscore: 'libs/underscore/underscore',
        backbone: 'libs/backbone/backbone',
        backboneLocalstorage: 'libs/backbone/backbone.localStorage',
        templates: '../templates'
    },
    shim: {
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        backboneLocalstorage: {
            deps: ['backbone'],
            exports: 'Store'
        }
    }
});

require([
    'backbone',
    'views/app',
    'routers/router'
], function (Backbone, AppView, Workspace) {
    // Initialize routing and start Backbone.history()
    new Workspace();
    Backbone.history.start();

    // Initialize the application view
    new AppView();
});
