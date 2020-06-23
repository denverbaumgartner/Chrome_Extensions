$(function(){

    chrome.storage.sync.get(['currentLabel'], function(researchData){
        $('#currentLabel').text(researchData.currentLabel)
    })

    // function called when the set label button is clicked
    $('#setLabel').click(function(){

        // set newLabel with a temp label
        var newLabel = 'No label assigned';
        
        // set variable and check for actual input
        var tempLabel = $('#newLabel').val();
        if (tempLabel){
            newLabel = tempLabel;
        }

        // set the current label as the newly input label 
        chrome.storage.sync.set({'currentLabel': newLabel});
        
        $('#currentLabel').text(newLabel);
        $('#newLabel').val('');
    });

});