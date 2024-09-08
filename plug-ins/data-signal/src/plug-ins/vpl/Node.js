import System from './VplSystem.js';

export default class Node extends HTMLElement {
  #system;

  constructor() {
    super();
    this.#system = new System(this);
  }

  connectedCallback() {
    if(this.#system.ready) this.#system
    .attachShadow()
    .adoptCss()
    .injectTemplate()
    .unfurlTemplate()
    .setContextFromString()
    .renderTemplateDelegate()
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
