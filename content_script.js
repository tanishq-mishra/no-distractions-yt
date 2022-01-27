// Put all the javascript code here, that you want to execute after page load.
(function () {
    let browserContainer = document.querySelector('ytd-browse');

    function blockAll() {
        browserContainer.style.visibility = "hidden";
    }

    function unBlockAll() {
        browserContainer.style.visibility = "visible";
    }

    function blockSubs() {

        let ytSubsSection = document.querySelectorAll('ytd-guide-section-renderer');
        ytSubsSection.forEach(sub => {
            sub.style.visibility = "hidden";
        })
    }

    function unBlockSubs() {

        let ytSubsSection = document.querySelectorAll('ytd-guide-section-renderer');
        ytSubsSection.forEach(sub => {
            sub.style.visibility = "visible";
        })
    }

    browser.runtime.onMessage.addListener((message, sender, sendRes) => {
        console.log(message.button + message.isTrue)
        if (message.button === "block-all") {
            if (message.isTrue) {
                blockAll()
            } else {
                unBlockAll()
            }
        }
        if (message.button === "block-subscriptions") {
            if (message.isTrue) {
                blockSubs()
            } else {
                unBlockSubs()
            }
        }

    })
})()