console.log("checking background")
chrome.browserAction.onClicked.addListener(function(tab){
console.log("checking ")
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});