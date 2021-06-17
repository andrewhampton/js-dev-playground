window.addEventListener('load', async () => {
  const greetButton = document.querySelector('#greet')
  greetButton.addEventListener('click', () => {
    import('./greet.js').then(Module => {
      const { default: greet } = Module
      greet()
    })
  })
})
