console.log("Hello")
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        console.log("Hello!, this is an extension")
        if( request.message = "clicked_browser_action"){
            alert("Hello!, this is an extension")
        }
})