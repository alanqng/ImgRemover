// Remove all rules if page is changed, add rules and check for matches on the URL eauql to google, if all rules check out Icon will be available to press

chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { hostEquals: 'www.google.com', schemes: ['https', 'http']},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
 
 //Provides functionality for when the Icon is clicked

 chrome.pageAction.onClicked.addListener(function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
        tabs[0].id, 
        {file: 'main.js'}
      );
    });
  });