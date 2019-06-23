import store from './store';
global.browser = require('webextension-polyfill');

// 监听来自content-script的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  sendResponse(request, sender, sendResponse);
  console.log(request, sender, sendResponse);

  if (request === 'content') {
    // 向vue popup发送信息
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, 'background', response => {});
    });
  }
});

// alert(`Hello ${store.getters.foo}!`);
