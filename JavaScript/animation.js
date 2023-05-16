function clickMenu() {
    if (nav.style.display == 'flex') {
        nav.style.display = 'none'
        body.style.overflow = 'visible'
    } else {
        nav.style.display = 'flex'
        body.style.overflow = 'hidden'
    }
}