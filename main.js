import greet from './greet.js'

window.addEventListener('load', () => {
  const greetButton = document.querySelector('#greet')
  greetButton.addEventListener('click', greet)
})
