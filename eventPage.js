const console = chrome.extension.getBackgroundPage().console;
const query = {
	active: true,
	currentWindow: true,
};
chrome.browserAction.onClicked.addListener(tab => {
	const {height, width,}=tab;
	const options = {
		url: 'index.html',
		width: 300,
		height,
		top: 90,
		left: width - 300,
		type: "panel",
	};
	chrome.windows.create(options);
});