function buttonFunction(text) {
    const updateText = document.querySelector('#text')
    const button = document.querySelector('#button')
    button.addEventListener('click', function () {
        updateText.textContent = text
        return alert('Atualizei o texto.')
    })
}

buttonFunction('Alterei o texto...')