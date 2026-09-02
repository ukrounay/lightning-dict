// chrome.runtime.onInstalled.addListener(()=>{

//     chrome.contextMenus.create({
//         id: 'click1',
//         title: 'click1_name',
//         contexts: ['browser_action']
//     });

//     chrome.contextMenus.onClicked.addListener(({menuItemId})=>{
//         if(menuItemId === 'click1')return chrome.tabs.create({url: 'https://www.google.com/'});
//     });

// });