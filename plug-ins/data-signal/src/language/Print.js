import Operations from '../Operations.js';

export default class Print extends HTMLElement {
  #op;

  constructor() {
    super();
    this.#op = new Operations(this);
  }

  connectedCallback() {
    this.#op
      .setContextFromString()

      .attachShadow()

      .adoptCss()
      .consumeTemplate()
      .unfurlTemplate()
      .clearContent()
      .renderValue()
  }

  disconnectedCallback() {
    this.#op
      .removeSubscription();
  }

  get context(){
    return this.#op.retrieveContext()
  }
  set context(v){
    this.#op.updateContext(v);
  }

}
