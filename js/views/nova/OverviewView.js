var NovaOverviewView = Backbone.View.extend({
    
    _template: _.itemplate($('#novaOverviewTemplate').html()),
    
    initialize: function() {
    },
    
    render: function () {
        UTILS.Render.animateRender(this.el, this._template, this.model);
        return this;
    },
});