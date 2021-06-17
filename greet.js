import { html, render } from 'lit-html'
import cat from './cat.webp'
import './greet.scss'

let counter = 0

export function greet() {
  render(html`${counter++}: Heyo <img src="${cat}"></img>`, document.querySelector('#greeting-box'))
}
