var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;




function __processArg(obj, key) {
	var arg = null;
	if (obj) {
		arg = obj[key] || null;
	}
	return arg;
}

function Controller() {

	require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
	this.__controllerPath = 'index';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};




	$.bookCollection = Alloy.createCollection('book');


	$.__views.index = Ti.UI.createWindow(
	{ backgroundColor: "white", layout: "vertical", id: "index" });

	$.__views.index && $.addTopLevelView($.__views.index);
	$.__views.reload_page_button = Ti.UI.createButton(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", id: "reload_page_button", title: "Reload Page" });

	$.__views.index.add($.__views.reload_page_button);
	$.__views.close_current_page_button = Ti.UI.createButton(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", id: "close_current_page_button", title: "Close Current Page" });

	$.__views.index.add($.__views.close_current_page_button);
	$.__views.click_me_button = Ti.UI.createButton(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", id: "click_me_button", title: "Click me" });

	$.__views.index.add($.__views.click_me_button);
	$.__views.parent_view = Ti.UI.createView(
	{ id: "parent_view" });

	$.__views.index.add($.__views.parent_view);
	$.__views.label_one = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", layout: "horizontal", left: 150, font: { fontSize: 15 }, top: 50, id: "label_one", text: "A Label" });

	$.__views.parent_view.add($.__views.label_one);
	$.__views.label_two = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", layout: "horizontal", left: 150, textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT, font: { fontSize: 25 }, top: 52, id: "label_two", text: "A Label" });

	$.__views.parent_view.add($.__views.label_two);
	$.__views.label_three = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", layout: "horizontal", left: 150, textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT, font: { fontSize: 30 }, top: 54, id: "label_three", text: "A Label" });

	$.__views.parent_view.add($.__views.label_three);
	$.__views.label_four = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", layout: "horizontal", left: 150, font: { fontSize: 35 }, top: 56, id: "label_four", text: "A Label" });

	$.__views.parent_view.add($.__views.label_four);
	$.__views.label_five = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", layout: "horizontal", left: 150, id: "label_five", text: "A Label" });

	$.__views.parent_view.add($.__views.label_five);
	$.__views.label_six = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", layout: "horizontal", left: 150, id: "label_six", text: "A Label" });

	$.__views.parent_view.add($.__views.label_six);
	$.__views.label_seven = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", layout: "horizontal", left: 150, id: "label_seven", text: "A Label" });

	$.__views.parent_view.add($.__views.label_seven);
	$.__views.label_eight = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", layout: "horizontal", left: 150, id: "label_eight", text: "A Label" });

	$.__views.parent_view.add($.__views.label_eight);
	$.__views.label_nine = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", layout: "horizontal", left: 150, id: "label_nine", text: "A Label" });

	$.__views.parent_view.add($.__views.label_nine);
	$.__views.label_ten = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", layout: "horizontal", left: 150, id: "label_ten", text: "A Label" });

	$.__views.parent_view.add($.__views.label_ten);
	$.__views.child_parent_view_one = Ti.UI.createView(
	{ top: 70, id: "child_parent_view_one" });

	$.__views.parent_view.add($.__views.child_parent_view_one);
	$.__views.label_eleven = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", layout: "horizontal", left: 150, id: "label_eleven", text: "A Child Label" });

	$.__views.child_parent_view_one.add($.__views.label_eleven);
	$.__views.label_twelve = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", layout: "horizontal", left: 150, id: "label_twelve", text: "A Child Label" });

	$.__views.child_parent_view_one.add($.__views.label_twelve);
	$.__views.label_thirteen = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", layout: "horizontal", left: 150, id: "label_thirteen", text: "A Child Label" });

	$.__views.child_parent_view_one.add($.__views.label_thirteen);
	$.__views.label_fourteen = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", layout: "horizontal", left: 150, id: "label_fourteen", text: "A Child Label" });

	$.__views.child_parent_view_one.add($.__views.label_fourteen);
	$.__views.label_fifteen = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", layout: "horizontal", left: 150, id: "label_fifteen", text: "A Child Label" });

	$.__views.child_parent_view_one.add($.__views.label_fifteen);
	$.__views.label_sixteen = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", layout: "horizontal", left: 150, id: "label_sixteen", text: "A Child Label" });

	$.__views.child_parent_view_one.add($.__views.label_sixteen);
	$.__views.label_seventeen = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", layout: "horizontal", left: 150, id: "label_seventeen", text: "A Child Label" });

	$.__views.child_parent_view_one.add($.__views.label_seventeen);
	$.__views.label_eighteen = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", layout: "horizontal", left: 150, id: "label_eighteen", text: "A Child Label" });

	$.__views.child_parent_view_one.add($.__views.label_eighteen);
	$.__views.label_nineteen = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", layout: "horizontal", left: 150, id: "label_nineteen", text: "A Child Label" });

	$.__views.child_parent_view_one.add($.__views.label_nineteen);
	$.__views.label_twenty = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", layout: "horizontal", left: 150, id: "label_twenty", text: "A Child Label" });

	$.__views.child_parent_view_one.add($.__views.label_twenty);
	$.__views.child_parent_view_two = Ti.UI.createView(
	{ id: "child_parent_view_two" });

	$.__views.parent_view.add($.__views.child_parent_view_two);
	$.__views.search_bar = Ti.UI.createSearchBar(
	{ id: "search_bar", showCancel: true });

	$.__views.child_parent_view_two.add($.__views.search_bar);
	$.__views.table_view = Ti.UI.createTableView(
	{ layout: "horizontal", width: Ti.UI.FILL, height: 100, top: 200, right: 300, id: "table_view" });

	$.__views.child_parent_view_two.add($.__views.table_view);
	var __alloyId7 = Alloy.Collections['$.bookCollection'] || $.bookCollection;function __alloyId8(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId8.opts || {};var models = __alloyId7.models;var len = models.length;var rows = [];for (var i = 0; i < len; i++) {var __alloyId0 = models[i];__alloyId0.__transform = _.isFunction(__alloyId0.transform) ? __alloyId0.transform() : __alloyId0.toJSON();var __alloyId2 = Ti.UI.createTableViewRow(
			{});

			rows.push(__alloyId2);
			var __alloyId4 = Ti.UI.createLabel(
			{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", layout: "horizontal", left: 150, text: __alloyId0.__transform.title });

			__alloyId2.add(__alloyId4);
			var __alloyId6 = Ti.UI.createLabel(
			{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", layout: "horizontal", left: 150, text: __alloyId0.__transform.year });

			__alloyId2.add(__alloyId6);
		}$.__views.table_view.setData(rows);};__alloyId7.on('fetch destroy change add remove reset', __alloyId8);exports.destroy = function () {__alloyId7 && __alloyId7.off('fetch destroy change add remove reset', __alloyId8);};




	_.extend($, $.__views);




	function reloadPageButtonClickHandler(clickEvent) {
		Alloy.createController('index');

		$.getView().close();
	}

	function closeCurrentPageButtonClickHandler(clickEvent) {
		$.getView().close();
	}

	function clickMeButtonClickHandler(clickEvent) {
		var dialogOptions = {
			title: "Welcome",
			message: "Hello!!",
			buttonNames: ["OK"] };


		var alertDialog = Ti.UI.createAlertDialog(dialogOptions);
		alertDialog.show();
	}

	function closeHandler(closeEvent) {
		$.reload_page_button.removeEventListener('click', reloadPageButtonClickHandler);
		$.close_current_page_button.removeEventListener('click', closeCurrentPageButtonClickHandler);
		$.click_me_button.removeEventListener('click', clickMeButtonClickHandler);
		$.getView().removeEventListener('close', closeHandler);
		$.getView().removeEventListener('postlayout', loadCollection);








		$.bookCollection.reset(null, { silent: true, sort: false });
		$.bookCollection.comparator = undefined;
		$.bookCollection.remove();
		$.bookCollection = null;

		$.args = null;
		$.removeListener();
		$.destroy();
		$.off();
		$ = null;
	}

	function loadCollection() {
		$.bookCollection.reset([{ tittle: 'Ironman', year: '1911' }, { title: 'Superman', year: '1911' }, { title: 'Thor', year: '1911' }, { title: 'Captain America', year: '1911' }, { title: 'Hulk', year: '1911' }, { title: 'Green Lantern', year: '1911' }, { title: 'Punisher', year: '1911' }, { title: 'Spiderman', year: '1911' }, { title: 'Wolverine', year: '1911' }, { title: 'Cyclops', year: '1911' }], { silent: true });
		$.bookCollection.trigger('change');
	}

	$.reload_page_button.addEventListener('click', reloadPageButtonClickHandler);
	$.close_current_page_button.addEventListener('click', closeCurrentPageButtonClickHandler);
	$.click_me_button.addEventListener('click', clickMeButtonClickHandler);

	$.getView().addEventListener('close', closeHandler);
	$.getView().addEventListener('postlayout', loadCollection);

	$.getView().open();









	_.extend($, exports);
}

module.exports = Controller;