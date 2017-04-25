console.log("-- extension run! page", chrome);

Mousetrap.bind(['ctrl+shift+k', 'command+shift+k'], function(e) {
    console.log("action");
    const x = chrome.runtime.sendMessage("hoge");
    console.log(x);
    return false;
});
