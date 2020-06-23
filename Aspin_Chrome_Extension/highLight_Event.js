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