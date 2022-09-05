import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let pageProps = {}
console.log(document.getElementById('__PAGE_DATA__'), 'PAGE DATA')
if(document.getElementById('__PAGE_DATA__')) {
  pageProps = JSON.parse(document.getElementById('__PAGE_DATA__').textContent)
}
console.log(pageProps, 'pageProps')
ReactDOM.hydrate(<App {...pageProps}/>, document.getElementById('root'));
