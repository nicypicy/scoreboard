let home = 0
let guest = 0
let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

function add1() {
    home += 1
    homeEl.textContent = home
}

function add1g() {
    guest += 1
    guestEl.textContent = guest
}

function add2() {
    home += 2
    homeEl.textContent = home
}

function add2g() {
    guest += 2
    guestEl.textContent = guest
}
    
function add3() {
    home += 3
    homeEl.textContent = home
}

function add3g() {
    guest += 3
    guestEl.textContent = guest
}

function btn() {
    homeEl.textContent = 0
    guestEl.textContent = 0
    home = 0
    guest = 0
}
