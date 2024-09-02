import Operations from '../Operations.js';

export default class Application extends HTMLElement {
  #op;
  templates = new Map();

  constructor() {
    super();
    this.#op = new Operations(this);
  }

  async connectedCallback() {

    await this.#op.fetchTemplate();

    this.#op
    .setContextFromString()
    .attachShadow()
    .adoptCss()
    .unfurlTemplate()
    .clearContent()
    .renderDelegate() // root subscription in application does not change
    .log('Application Ready!')

  }

  disconnectedCallback() {
    this.#op
    .removeSubscription();
  }



}
