import Operations from '../Operations.js';

export default class Loop extends HTMLElement {
  #op;

  constructor() {
    super();
    this.#op = new Operations(this);

  }

  connectedCallback() {
    console.debug(`connectedCallback: ORDER ${this.tagName}/${this.getAttribute('name')} running...`);

    this.#op
    .attachShadow()
    .consumeTemplate()
      .setContextFromProperty()
      .adoptCss()
      .clearContent()
      .renderContext()
  }

  disconnectedCallback() {
    this.#op
      .removeSubscription();
  }

  get context(){
    return this.#op.retrieveContext()
  }
  set context(v){
    // console.log('YAH', this.tagName, ' got context ', v);
    this.#op.updateContext(v);
  }

}
