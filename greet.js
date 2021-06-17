import { html, render } from 'lit-html'
import cat from './cat.webp'
import './greet.scss'

let counter = 0

export function greet() {
  let greetingBox = document.querySelector('#greeting-box')
  if (!greetingBox) {
    greetingBox = document.createElement('div')
    greetingBox.id = "greeting-box"
    document.body.appendChild(greetingBox)
  }

  render(html`${counter++}: Heyo <img src="${cat}"></img>`, greetingBox)
}
