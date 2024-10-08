﻿chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: 'TabGuardian',
        title: 'Keep Only This Tab',
        type: 'normal',
        contexts: ['all']
    });
});
chrome.contextMenus.onClicked.addListener(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let currentTab = tabs[0];
        chrome.tabs.query({}, (tabs) => {
            tabs.map((tab) => {
                if ((tab.windowId == currentTab.windowId) &&
                    (tab.id != currentTab.id)) {
                    chrome.tabs.remove(tab.id);
                }
            });
        });
    });
});