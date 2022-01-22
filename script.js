function autoScroll() {
    const redSection = document.querySelector('.slide-list')
    const redSectionWidth = redSection.scrollWidth * redSection.childNodes - 1;
    const sectionImage = redSection.querySelector('li')
    setInterval(() => {
        // if (redSection.scrollLeft !== redSectionWidth) {
        redSection.scrollTo({
            left: sectionImage.scrollWidth,
            behavior: 'smooth',
            block: 'center'
        })
        // } else if (redSection.scrollLeft === redSectionWidth) {
        //     redSection.scrollTo({
        //         left: 0,
        //         behavior: 'smooth',
        //         block: 'center'
        //     })
        // }
    }, 5000);
}
autoScroll()

function smoothScroll(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
}



