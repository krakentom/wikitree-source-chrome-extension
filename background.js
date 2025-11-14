chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['archives/actapublica-brno.js', 'archives/matriken-tirol.js', 'content.js']
    }).catch((error) => {
        console.error('Failed to inject scripts:', error);
    });
});