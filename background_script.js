/* Retrieve any previously set cookie and send to content script */
browser.runtime.onInstalled.addListener((e) => {
    const optionNames = ['block-all', 'block-subscriptions'];
    optionNames.forEach(o => {
        localStorage.setItem(o, "false");
    })

})




var emptyCookie = {

}


function getActiveTab() {
    return browser.tabs.query({
        active: true,
        currentWindow: true
    });
}


function changeState(button, isTrue) {
    getActiveTab().then((tabs => {
        localStorage.setItem(button, isTrue ? "true" : "false");
        browser.tabs.sendMessage(tabs[0].id, {
            button,
            isTrue
        })
    }))
}

function localStorageUpdate(e) {
    getActiveTab().then((tabs) => {
        const tabUrl = tabs[0].url;
        const urlRegex = new RegExp("https://www.youtube.com/[a-z0-9/]*");
        if (urlRegex.test(tabUrl)) {
            const optionNames = Object.keys(localStorage)
            for (i = 0; i < optionNames.length; i++) {
                const isTrue = localStorage.getItem(optionNames[i]) === "true" ? true : false;
                console.log(optionNames[i] + "=" + isTrue)
                console.log("lol")
                browser.tabs.sendMessage(tabs[0].id, {
                    button: optionNames[i],
                    isTrue

                })

            }


        }
        // optionNames.forEach(o => {
        //            })
    });
}

// update when the tab is updated
browser.tabs.onUpdated.addListener(localStorageUpdate);
// update when the tab is activated
browser.tabs.onActivated.addListener(localStorageUpdate);