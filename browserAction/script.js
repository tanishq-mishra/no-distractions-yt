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

var toggles = document.querySelectorAll("input");
toggles.forEach(toggle => {
    var isTrue = localStorage.getItem(toggle.name) === "true" ? true : false;
    if (isTrue) {
        var newToggle = toggle.cloneNode(true);
        newToggle.checked = true;
        toggle.parentElement.replaceChild(newToggle, toggle)
    }
})
toggles = document.querySelectorAll("input");
toggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        changeState(e.target.name, e.target.checked)
    })
})