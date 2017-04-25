"use strict";
console.log("-- extension run background!", chrome);
chrome.commands.onCommand.addListener(function(command) {
  console.log('Command:', command);
});


chrome.runtime.onMessage.addListener(function(a, b, c) {
    var d = a.action;
    console.log('Command2:', a, d);
});


// when the PipelineLinker extension is triggered
chrome.pageAction.onClicked.addListener(function (browserTab) {
  console.log("sssss");
  // execute the script that gets injected into page of the current tag
  chrome.tabs.executeScript(null, {file: "js/page.js"}, function () {
    // send a message to content script
    chrome.tabs.sendMessage(browserTab.id, "Background page started.", function (response) {
      // receive the HTML from the tab's page and convert it to a DOM Document
      var doc = htmlToDocument(response);
    });
  });
});
