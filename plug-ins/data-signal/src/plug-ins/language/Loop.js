import System from '../../System.js';

export default class Loop extends HTMLElement {
  #system;
  constructor() {
    super();
    this.#system = new System(this);
  }
  connectedCallback() {
    if(this.#system.ready) this.#system
    .adoptCss()
    .attachEatingShadow()
    .consumeEatingTemplate()
    .clearContent()
    .setContextFromProperty()
    .renderContext()
  }
  disconnectedCallback() {
    if(this.#system.ready) this.#system
    .removeSubscription();
  }
  get context(){
    return this.#system.retrieveContext()
  }
  set context(v){
    this.#system.updateContext(v);
  }
}
