chrome.runtime.onInstalled.addListener(() => {
chrome.contextMenus.create({
        id:"SnooSearch",
        title:"Search for \"%s reddit\"",
        contexts: ["selection"]
    });
});
chrome.contextMenus.onClicked.addListener((info, tab) => {
    
    chrome.search.query({
    text: info.selectionText + " reddit",
    disposition: "NEW_TAB"
        });

});