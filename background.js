
let currentState = false;
let intervalID;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

        if (request.cmd === "getState") {
            sendResponse(currentState);
            console.log("Getting the state.");
        }

        else if (request.cmd === "setState") {
            currentState = request.data.value;
            console.log("Setting the state.");
        }

        else if (request.cmd === "setInterval") {
            intervalID = request.data.iD;
        }

        else if (request.cmd === "getInterval") {
            sendResponse(intervalID);
        }
    }
);