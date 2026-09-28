browser.runtime.onInstalled.addListener(() => {
browser.contextMenus.create({
        id:"SnooSearch",
        title:"Search for \"%s reddit\"",
        contexts: ["selection"]
    });
});
browser.contextMenus.onClicked.addListener((info, tab) => {
    
    browser.search.query({
    text: info.selectionText + " reddit",
    disposition: "NEW_TAB"
        });

});