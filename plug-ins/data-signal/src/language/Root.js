import System from '../System.js';

export default class Application extends HTMLElement {
  #system;
  templates = new Map();

  constructor() {
    super();
    this.#system = new System(this);
  }

  async connectedCallback() {

    await this.#system.fetchTemplate();

    this.#system
    .setContextFromString()
    .attachShadow()
    .adoptCss()
    .unfurlTemplate()
    .clearContent()
    .renderDelegate() // root subscription in application does not change
    .log('Application Ready!')

  }

  disconnectedCallback() {
    this.#system
    .removeSubscription();
  }



}
