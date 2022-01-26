function changeState(button, isTrue) {
    alert(button + isTrue)
}

const toggles = document.querySelectorAll("input");

toggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        changeState(e.target.name, e.target.checked)
    })
})