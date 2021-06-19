import {html, render} from 'lit-html'
import confetti from 'canvas-confetti'

import './greet.scss'
import cat from './cat.webp'

let counter = 0

export function greet() {
  confetti()
  render(html`${counter++}: Heyo <img src="${cat}"></img>`, document.querySelector('#greeting-box'))
}
