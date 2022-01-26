// Put all the javascript code here, that you want to execute after page load.
(function () {
    let browserContainer = document.querySelector('ytd-browse');

    function blockAll() {
        browserContainer.style.visibility = "hidden";
    }

    function blockNone() {
        browserContainer.style.visibility = "visible";
    }

    browser.runtime.onMessage.addListener((message) => {
        if (message.command == "blockAll") {
            console.log("this is happeieng:")
            blockAll();
        } else if (message.command == "blockNone") {
            blockNone();
        }
    })
})()