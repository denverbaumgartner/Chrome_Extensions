var contextMenuItem = {
    "id": "selectedText", 
    "title": "Save section to Aspin", 
    "contexts": ["selection"]
}; 
chrome.contextMenus.create(contextMenuItem);

// function to save highlighted section 
chrome.contextMenus.onClicked.addListener(function(clickData){
    // checks if context menu item is selected and something is highlighted
    if (clickData.menuItemId == "selectedText" && clickData.selectionText){
        // prompt user to input a key (label) for the selected text
        

    };
});

// function to save highlighted section using hotkey 
chrome.commands.onCommand.addListener( function(command){
    // check to see if text is highlighted and if the hotkey has been selected
    if (command === "save_function" && clickData.selectionText){
        // load the user menu
        
    };
});