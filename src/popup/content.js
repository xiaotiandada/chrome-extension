document.addEventListener('DOMContentLoaded', function() {
  // 设置背景颜色
  const setBc = () => {
    document.body.style.backgroundColor = 'red';
  };

  const jumppage = () => {
    // window.open('http://smartsignature.io');
    chrome.runtime.sendMessage({ greeting: '你好，我是content-script呀，我主动发消息给后台！' }, function(response) {
      console.log('收到来自后台的回复：' + response);
    });
  };

  const sendMessage = () => {
    chrome.runtime.sendMessage({ greeting: '你好，我是content-script呀，我主动发消息给后台！' }, function(response) {
      console.log('收到来自后台的回复：' + response);
    });
  };

  const initButton = () => {
    let inArticle = window.location.pathname.indexOf('/p/');

    if (inArticle !== -1) {
      let sideDom = document.querySelector('.side-button-group');
      let cloneDom = document.querySelectorAll('.side-button-group .sidebutton')[2].cloneNode(true);
      sideDom.appendChild(cloneDom);

      let awesome = document.querySelectorAll('.side-button-group .sidebutton')[4];
      awesome.href = 'javascript:;';

      awesome.onclick = () => {
        console.log(111);
        chrome.runtime.sendMessage('content', function(response) {
          console.log(response);
        });
      };
    }
  };

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request, sender, sendResponse);
    if (request === 'setBc') setBc();
    else if (request === 'jumppage') jumppage();
  });

  chrome.runtime.sendMessage({ greeting: '你好，我是content-script呀，我主动发消息给后台！' }, function(response) {
    console.log('收到来自后台的回复：' + response);
  });

  initButton();
});
