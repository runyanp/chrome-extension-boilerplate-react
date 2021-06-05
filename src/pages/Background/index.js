import Bridge from 'crx-bridge';

console.log('This is the background page.');
console.log('Put the background scripts here.');

Bridge.onMessage('from-content-script', (value) => {
  console.log('hit this', value);
});

let tab;
chrome.tabs.query({ active: true }, (res) => (tab = res[0]));

function sendTestMsg() {
  try {
    Bridge.sendMessage(
      'from-background',
      { another: 'key' },
      `content-script@${tab.id}`
    );
  } catch (e) {}
  setTimeout(sendTestMsg, 1000);
}

sendTestMsg();
