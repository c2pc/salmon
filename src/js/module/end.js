const buttonEnd = document.querySelector(".end .button__end")
const present = document.querySelector(".end .present")
const closeButton = document.querySelector(".end .present .close__button")


buttonEnd.addEventListener('click', () => present.classList.remove('hidden'))
closeButton.addEventListener('click', () => present.classList.add('hidden'))
