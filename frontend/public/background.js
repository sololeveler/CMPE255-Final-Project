chrome.runtime.onInstalled.addListener(() => {
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.message === "GET URL"){
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage({message: "RECIEVE URL", url:tabs[0].url});
      });
    }
  })
});
