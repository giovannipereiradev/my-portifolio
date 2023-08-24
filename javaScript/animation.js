function clickMenu() {
    if (nav.style.display == 'flex') {
        nav.style.display = 'none'
        body.style.overflow = 'visible'
        main.style.filter = 'blur(0px)'
    } else {
        nav.style.display = 'flex'
        body.style.overflow = 'hidden'
        main.style.filter = 'blur(3px)'
    }
}

function closeMenu() {
    nav.style.display = 'none'
    body.style.overflow = 'visible'
    main.style.filter = 'blur(0px)'
}

function clickMenuTranslate() {
    if (menuTranslate.style.display == 'block') {
        menuTranslate.style.display = 'none'
    } else {
        menuTranslate.style.display = 'block'
    }
}

function clickMenuDesktop() {
    if (subMenu.style.display == 'flex') {
        subMenu.style.display = 'none'
    } else {
        subMenu.style.display = 'flex'
    }
}