/*global define*/
define([
    'jquery',
    'backbone',
    'collections/todosCollection',
    'common'
], function ($, Backbone, Todos, Common) {
    'use strict';

    var Workspace = Backbone.Router.extend({
        routes: {
            '*filter': 'setFilter'
        },

        setFilter: function (param) {
            // Set the current filter to be used
            if(param){
                Common.TodoFilter = param.trim();
            } else{
                Common.TodoFilter = '';
            }


            // Trigger a collection filter event, causing hiding/unhiding
            // of the Todo view items
            Todos.trigger('filter');
        }
    });

    return Workspace;
});
