import { defineCustomElement } from 'vue'
import WebComponent from '../components/webcomponent.ce.vue'
import pkg from '../../package.json'

// define the custom element
const customWebComponent = defineCustomElement(WebComponent)

// extend the custom element with additional functionality
export default class WebComponentLib extends customWebComponent {
  constructor() {
    super()
  }

  get version() {
    return pkg.version
  }
}

