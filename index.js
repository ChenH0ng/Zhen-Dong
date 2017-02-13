const console = chrome.extension.getBackgroundPage().console;

const app = document.querySelector('#app');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://www.douyu.com');
xhr.onload = () => {
	console.log(xhr.responseText)
};
xhr.send();
