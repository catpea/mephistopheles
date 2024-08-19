import Operations from '../Operations.js';

export default class Application extends HTMLElement {
  #op;

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
      // .log('Context loaded!')

  }

  disconnectedCallback() {
    this.#op
      .removeSubscription();
  }



}