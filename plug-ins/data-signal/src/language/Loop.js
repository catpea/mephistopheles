import Operations from '../Operations.js';

export default class Loop extends HTMLElement {
  #op;
  constructor() {
    super();
    this.#op = new Operations(this);
  }
  connectedCallback() {
    if(this.#op.ready) this.#op
    .attachShadow()
    .adoptCss()
    .consumeTemplate()
    .clearContent()
    .setContextFromProperty()
    .renderContext()
  }
  disconnectedCallback() {
    if(this.#op.ready) this.#op
    .removeSubscription();
  }
  get context(){
    return this.#op.retrieveContext()
  }
  set context(v){
    this.#op.updateContext(v);
  }
}
