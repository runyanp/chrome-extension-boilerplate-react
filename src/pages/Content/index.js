import Bridge from 'crx-bridge';
import { printLine } from './modules/print';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");

//Bridge.onMessage('something', (val) => {
//console.log('hit me', JSON.stringify(val));
//});

function sendTestMsg() {
  Bridge.sendMessage('from-content-script', { key: 'Value' }, 'background');
  setTimeout(sendTestMsg, 1000);
}

sendTestMsg();

Bridge.onMessage('from-background', (value) => {
  console.log('from-background', JSON.stringify(value));
});
