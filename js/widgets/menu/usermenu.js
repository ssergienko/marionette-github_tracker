window.widgets = window.widgets || {};
window.widgets.userMenu = (function () {

	// hash change listener
	$(window).on('hashchange', function (hash) {
		$(document).trigger("hashChanged", location.hash);
	});

	// data
	var Option = Backbone.Model.extend({
		defaults: function () {
			var _this = this;
			return {
				text: "Default value", link: _this.defaultBehaviour, linkIsFunction: false, // in order to avoid passing code of function into href of an "a" tag
				action: {}
			}
		}, defaultBehaviour: function () {
			alert("Default alert. Wanna change? Go to UserMenu widget' initialization");
		}
	});
	var Options = Backbone.Collection.extend({
		model: Option
	});
	// views
	var OptionView = Backbone.Marionette.ItemView.extend({
		tagName: "li", template: _.template('<a href="<%=link%>"><%=text%></a>'), events: {
			"click": "click"
		}, initialize: function () {
			if (typeof this.model.get("link") == 'function') {
				this.model.set("linkIsFunction", true);
				this.model.set("action", this.model.get("link"));
				this.model.set("link", "#");
			}
			if (this.model.get("link") == location.hash) {
				this.$el.addClass("active");
			} else {
				this.$el.removeClass("active");
			}
			if (!location.hash) {
				if (this.model.get("active")) {
					this.$el.addClass("active");
				}
			}
		}, click: function (e) {
			if (this.model.get("linkIsFunction")) {
				e.preventDefault();
				this.model.get("action")();
			}
		}
	});
	var OptionsView = Backbone.Marionette.CollectionView.extend({
		el: "#options", childView: OptionView, initialize: function () {
			$(document).on("hashChanged", $.proxy(this.setActive, this));
		}, setActive: function (e, hash) {
			// set active element
			_.each(this.children._views, function (view) {
				if (view.model.get("link") == hash) {
					view.$el.addClass("active");
				} else {
					view.$el.removeClass("active");
				}
			});
		}
	});

	return {
		init: function (options) {
			// we have to add options here. 
			// for example "template", in order to plug different templates for different use cases.
			new OptionsView({
				el: options.el, collection: new Options(options.options || [new Option()])
			}).render();
		}
	};
})();