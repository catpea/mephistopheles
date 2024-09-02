import Operations from '../Operations.js';

export default class Print extends HTMLElement {
  #op;

  constructor() {
    super();
    this.#op = new Operations(this);
  }

  connectedCallback() {
    if(this.#op.ready) this.#op
    .setContextFromString()
    .attachShadow()
    .renderValue()
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
