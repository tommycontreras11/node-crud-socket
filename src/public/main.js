const form = document.querySelector('#noteForm')
const title = document.querySelector('#title')
const description = document.querySelector('#description')

form.addEventListener('submit', e => {
    e.preventDefault()

    saveNote(title.value, description.value)

})