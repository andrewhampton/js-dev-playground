window.addEventListener('load', () => {
  const greetButton = document.querySelector('#greet')
  greetButton.addEventListener('click', () => {
    import('./greet.js').then(({greet}) => greet())
  })
})
