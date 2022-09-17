

function clickRightNow() {
    let theButton = document.querySelector('[class="ScCoreButton-sc-1qn4ixc-0 ScCoreButtonSuccess-sc-1qn4ixc-5 ffyxRu gjXDMG"]');

    // let theButton = document.querySelector('[class="ScCoreButton-sc-1qn4ixc-0 ScCoreButtonText-sc-1qn4ixc-3 ffyxRu bRFHvC"]');

    if(theButton){
        theButton.click();
    }
}

chrome.runtime.sendMessage({ cmd: "getState" }, function (response) {
    console.log("Checking the state in content script");
    if(response){
        console.log("Starting the click");
        clickRightNow();
        chrome.runtime.sendMessage({ cmd: "setInterval", data: { iD: setInterval(clickRightNow, 5000) } });
    }
    if (!response){
        console.log("Stopping the clicker");

        chrome.runtime.sendMessage({ cmd: "getInterval" }, function (intervalID) {
            clearInterval(intervalID);
        });



    }

});
