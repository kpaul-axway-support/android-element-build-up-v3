function reloadPageButtonClickHandler( clickEvent ) {
    Alloy.createController( 'index' );

    $.getView().close();
}

function closeCurrentPageButtonClickHandler( clickEvent ) {
	$.getView().close();
}

function clickMeButtonClickHandler( clickEvent ) {
	var dialogOptions = {
        title: "Welcome",
        message: "Hello!!",
        buttonNames: [ "OK" ]
    };

    var alertDialog = Ti.UI.createAlertDialog( dialogOptions );
    alertDialog.show();    
}

function closeHandler( closeEvent ) {
	// cleanup event listeners
    $.reload_page_button.removeEventListener( 'click', reloadPageButtonClickHandler );
    $.close_current_page_button.removeEventListener( 'click', closeCurrentPageButtonClickHandler );
    $.click_me_button.removeEventListener( 'click', clickMeButtonClickHandler );
    $.getView().removeEventListener( 'close', closeHandler );
    $.getView().removeEventListener( 'postlayout', loadCollection );

	// cleanup collection
    $.bookCollection.reset( null, {silent:true, sort:false} );
    $.bookCollection.comparator = undefined;
    $.bookCollection.remove();
    $.bookCollection = null;    
    
    // cleanup controller
    $.args = null;  
    $.removeListener(); 
    $.destroy();
    $.off();
    $ = null; 

}

function loadCollection() {
	$.bookCollection.reset( [
	{ tittle: 'Ironman', year: '1911' },
	{ title: 'Superman', year: '1911' },
	{ title: 'Thor', year: '1911' },
	{ title: 'Captain America', year: '1911' },
	{ title: 'Hulk', year: '1911' },
	{ title: 'Green Lantern', year: '1911' },
	{ title: 'Punisher', year: '1911' },
	{ title: 'Spiderman', year: '1911' },
	{ title: 'Wolverine', year: '1911' },
	{ title: 'Cyclops', year: '1911' }
	], 
	{ silent:true } );
	
	$.bookCollection.trigger(  'change' );
}

$.reload_page_button.addEventListener( 'click', reloadPageButtonClickHandler );
$.close_current_page_button.addEventListener( 'click', closeCurrentPageButtonClickHandler );
$.click_me_button.addEventListener( 'click', clickMeButtonClickHandler );

$.getView().addEventListener( 'close', closeHandler );
$.getView().addEventListener( 'postlayout', loadCollection );

$.getView().open();

