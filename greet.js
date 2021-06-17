import { html, render } from 'lit-html'

let counter = 0

export default function greet() {
  let greetingBox = document.querySelector('#greeting-box')
  if (!greetingBox) {
    greetingBox = document.createElement('div')
    greetingBox.id = "greeting-box"
    document.body.appendChild(greetingBox)
  }

  render(html`${counter++}: Heyo`, greetingBox)
}
