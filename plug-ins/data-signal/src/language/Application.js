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
    console.debug(`connectedCallback: ORDER ${this.tagName}/${this.getAttribute('name')} running...`);

    this.#op
      .setContextFromString()
      .attachShadow()
      .adoptCss()
      .unfurlTemplate()
      // .debugTemplate()
      .clearContent()
      .renderDelegate() // root subscription in application does not change
      // .log('Context loaded!')

  }

  disconnectedCallback() {
    this.#op
      .removeSubscription();
  }



}
