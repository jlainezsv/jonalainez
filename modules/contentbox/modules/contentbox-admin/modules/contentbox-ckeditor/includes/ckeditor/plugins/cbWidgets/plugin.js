﻿/**
 * Copyright (c) 2012 Ortus Solutions, Corp. All rights reserved.
 * getWidgetSelectorURL() is exposed by the dynamic editor being generated.
 * openRemoteModal() is part of contentbox js
 */
( function(){
	const pluginName = "cbWidgets";

	CKEDITOR.plugins.add( pluginName,{
		init : function( editor ){

			// Insert Widget
			editor.addCommand( pluginName, {
				// Enable the button for both 'wysiwyg' and 'source' modes
				modes : { wysiwyg: true, source: false },
				exec  : function( editor ){
					// Open the selector widget dialog.
					openRemoteModal(
						getWidgetSelectorURL(),
						{ editorName: editor.name },
						$( window ).width() - 200,
						$( window ).height() - 300,
						true
					);
				}
			} );
			// Update Widget
			editor.addCommand( "widgetModal", {
				// Enable the button for both 'wysiwyg' and 'source' modes
				modes : { wysiwyg: true, source: false },
				exec  : function( editor ) {
					var element = editor.widgetSelection,
						attributes={};
					// get attributes
					for ( var i in element.$.attributes ) {
						var item = element.$.attributes[ i ];
						if ( item.value != undefined ) {
							attributes[ item.name ] = item.value;
						}
					}
					attributes.editorName = editor.name;
					attributes.modal = true;
					attributes.mode = "Edit";
					openRemoteModal( getWidgetInstanceURL(), attributes, 1000, 650 );
				}
			} );
			// Remove Widget
			editor.addCommand( "widgetRemove", {
				// Enable the button for both 'wysiwyg' and 'source' modes
				modes : { wysiwyg: true, source: false },
				exec  : function( editor ) {
					editor.widgetSelection.remove( false );
				}
			} );

			// Add Button
			editor.ui.addButton( pluginName,{
				label   : "Insert a ContentBox Widget",
				icon    : this.path + "ContentBox-Circle_16.png",
				command : pluginName
			} );

			// context menu
			if ( editor.addMenuItem ) {
				// A group menu is required
				editor.addMenuGroup( "contentbox" );
				// Create a menu item
				editor.addMenuItem( "cbWidget", {
					label   : "Insert Widget",
					command : pluginName,
					icon    : this.path + "ContentBox-Circle_16.png",
					group   : "contentbox",
					order   : 3
				} );
				// Register a new context menu item for editing existing widget.
    			editor.addMenuItem( "widgetEdit", {
    				// Item label.
    				label   : "Edit Widget",
    				// Item icon path using the variable defined above.
    				icon    : this.path + "ContentBox-Circle_16.png",
    				// Reference to the plugin command name.
    				command : "widgetModal",
    				// Context menu group that this entry belongs to.
    				group   : "clipboard"
    			} );
				// Register a new context menu item for removing widget.
    			editor.addMenuItem( "widgetRemove", {
    				// Item label.
    				label   : "Remove Widget",
    				// Item icon path using the variable defined above.
    				icon    : this.path + "cross.png",
    				// Reference to the plugin command name.
    				command : "widgetRemove",
    				// Context menu group that this entry belongs to.
    				group   : "clipboard"
    			} );
			}
			if ( editor.contextMenu ) {
				editor.contextMenu.addListener( function( element, selection ) {
					return { cbWidget: CKEDITOR.TRISTATE_ON };
				} );
				// listener for right-click on <widget> element (and only <widget> element)
    			editor.contextMenu.addListener( function( element ) {
    				// Get to the closest <widget> element that contains the selection.
					if ( element.getAscendant( "widget", true ) ) {
						// make sure selection is this element
						editor.widgetSelection = element.getAscendant( "widget", true );
						return {
							widgetEdit   : CKEDITOR.TRISTATE_OFF,
							widgetRemove : CKEDITOR.TRISTATE_OFF
						};
					}
    			} );
			}
			// add double-click handler
			editor.on( "doubleclick", function( evt ) {
				// get element from event
				var element = evt.data.element.getAscendant( "widget", true );
				// set editor's current element
				editor.widgetSelection = element;
				// if on a pre or code element...
				if ( element ) {
					editor.execCommand( "widgetModal" );
					// stop event so it doesn't keep bubbling
					evt.cancel();
				}
			} );
		}
	} );
} )();
