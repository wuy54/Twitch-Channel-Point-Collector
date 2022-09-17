
let onOff = document.getElementById("claimPoints");


chrome.runtime.sendMessage({ cmd: "getState" }, function (response) {

    if (response) {
        onOff.innerHTML = "ON"
    }

});

onOff.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.runtime.sendMessage({ cmd: "getState" }, function (response) {
        console.log("button getting state");
        chrome.runtime.sendMessage({ cmd: "setState", data: { value: !response } });
        console.log("button setting state");
        if (!response){
            onOff.innerHTML = "ON"
        } else {
            onOff.innerHTML = "OFF"
        }

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['script.js'],
        });
    });


});
