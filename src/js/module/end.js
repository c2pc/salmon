const buttonEnd = document.querySelector(".end .button__end")
const present = document.querySelector(".end .present")
const closeButton = document.querySelector(".end .present .close__button")
const copy = document.querySelector(".end .present .copy")
const code = document.querySelector(".end .present .name")

buttonEnd.addEventListener('click', () => present.classList.remove('hidden'))
closeButton.addEventListener('click', () => present.classList.add('hidden'))

copy.addEventListener('click', () => navigator.clipboard.writeText(code.textContent))
