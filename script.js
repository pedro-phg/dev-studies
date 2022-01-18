function autoScroll() {
    const redSection = document.querySelectorAll('section')
    console.log(redSection)
    const items = redSection.querySelectorAll('li')
    console.log(items)
    items.forEach(element => {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}
autoScroll()

function smoothScroll(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}