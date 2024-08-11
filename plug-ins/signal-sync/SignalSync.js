class Signal {
  #value;
  #subscribers;

  constructor(value) {
    this.#value = value;
    this.#subscribers = [];
  }

  subscribe(callback) {
    if (typeof callback !== 'function') {
      throw new Error('Callback must be a function.');
    }
    this.#subscribers.push(callback);

    // Instantly return current value
    callback(this.#value);

    // Return an unsubscribe function for convenience
    return () => this.unsubscribe(callback);
  }

  unsubscribe(callback) {
    const index = this.#subscribers.indexOf(callback);
    if (index > -1) {
      this.#subscribers.splice(index, 1);
    }
  }

  notify() {
    this.#subscribers.forEach(callback => {
      try {
        callback(this.#value);
      } catch (error) {
        //console.error('Error executing subscriber callback:', error);
      }
    });
  }


  set(value) {
    this.#value = value;
    this.notify();
  }
  get() {
    return this.#value;
  }
}

class SignalRenderer {
  #root;
  #template;

  constructor(root, template) {
    this.#root = root;
    this.#template = template;
  }

  render(value){
    if( Array.isArray(value) ){
      //console.log(`Rendering in Array mode`, value);
      this.#renderArray(value);
    }else{
      //console.log(`Rendering in Object mode`, value);
      this.#renderObject(value);
    }
  }

  #renderArray(list){

    const arriving = list.map(o=>[o.key, o])
    const existing = Object.fromEntries([...this.#root.children].map(o=>[o.dataset.key, o]));

    // Addition //
    // TODO: this must be in order in the DOM as well insertAfter...
    list.forEach(item => {
      const missing = existing[item.key] === undefined;

      if(missing){
        //console.info(`Injecting ${item.key}`, item);
        // this.#renderObject(item);
        item.subscribe(c=>this.#renderObject(c))
      }else{
        //console.info(`Updating ${item.key}`, item);
        // this.#updateValue(item, existing[item.key]);
        // he signal in the tag changed > called a renderer > renderer found the key exists
      }

    });

    // Removal //
    for (const key in existing) {
      if(!arriving[key]) {
         this.#root.removeChild(existing[key]);
      }
    }

    //

  }

  #renderObject(item){
    // this.#root.children

    if(this.#template){
      let templateClone = this.#template.cloneNode(true);
      templateClone.dataset.key = item.key;
      for (const el of templateClone.querySelectorAll('signal-sync')) {
        el.classList.add(`text-bg-${item.color.get()}`);
        el.classList.add(`rounded`);
        el.classList.add(`p-1`);
        el.context = item; // --> rerender, this item did not have context previously
      }
      this.#root.appendChild(templateClone);
    }else{
      // items without template are sure to have a name attribute pointing to the key to render
      const attributeName = this.#root.host.getAttribute('property');
      // this.#root.append(item[attributeName]);
      item[attributeName].subscribe(v=>this.#root.innerHTML = v)
    }

    // this is a convenience funcion
    // templateClone.innerHTML = templateClone.innerHTML.replace(/\{\{(\w+)\}\}/g, (_, propName) => `<signal-sync property="${propName}"></signal-sync>`);

    // for (const el of templateClone.querySelectorAll('signal-sync')) {
    //   el.style.border = `1px solid ${item.color}`;
    //   el.context = item; // --> rerender, this item did not have context previously
    // }
    //
    // for (const el of templateClone.querySelectorAll('signal-sync[property]')) {
    //   const attributeName = el.getAttribute('property');
    //   //console.log('attributeName', attributeName, item);
    //   //console.log('attributeValue', item[attributeName]);
    //   el.append(item[attributeName]);
    //   //console.log('attributeEl', el);
    // }

  }

  #updateValue(item, el){
    const attributeName = el.getAttribute('property');
    el.innerHTML = item[attributeName];
  }

}

class SignalProtocols {

  #host;
  #renderer;
  #template;
  #context;
  #subscription = [];
  #trash;

  constructor(host) {
    this.#host = host;
  }

  // -- protocols --

  setContext(){
    let attribute = this.#host.getAttribute('context');

    if(attribute){
      let program = new Function(`return ${attribute};`).bind(globalThis);
      this.#context = program();
    }else{
      if(!this.#context) this.#context = new Signal({attribute:false});
    }
    return this;
  }

  consumeTemplate(){
    // //console.log('OOO', slot);
    //
    // const slotContent = this.#host.shadowRoot.querySelector('slot').assignedNodes().filter(node => node.nodeType === Node.ELEMENT_NODE);
    // if (slotContent.length === 0) return //console.warn('No template content found');
    // const template = this.#host.removeChild(slotContent[0]);

    let template;
    const templateCandidates = this.#host.shadowRoot.querySelector('slot').assignedNodes().filter(node => node.nodeType === Node.ELEMENT_NODE);

    if (templateCandidates.length === 0){
      // //console.warn('No template content found'); //result: template remains undefined
    } else if (templateCandidates.length > 0){
      // //console.warn('One root per template please due to key/reconciler optimizations, wrapping in div');
      template = document.createElement('div');
      template.append(...this.#host.shadowRoot.querySelector('slot').assignedNodes())
    }else{
      template = templateCandidates[0]; // correct selection
    }
    this.#template = template;
    return this;
  }

  installRenderer(){
    this.#renderer = new SignalRenderer(this.#host.shadowRoot, this.#template);
    return this;
  };

  adoptCss(){
    this.#host.shadowRoot.adoptedStyleSheets = document.adoptedStyleSheets;
    return this;
  };

  performSubscription(){
    this.#subscription.push(this.#context.subscribe(v=>this.#renderer.render(v))); // ----------------------------------------------> call to renderer
    return this;
  }
  removeSubscription(){
    this.#subscription.map(x=>x())
    return this;
  }
  clearContent(){
    this.#host.shadowRoot.replaceChildren(); // empty
    return this;
  }
  ensureVisibility(){
    // this.#host.style.display = "block"; // permanent activation
    return this;
  }

  retrieveContext(){
    return this.#context;
  }

  updateContext(v){
    if(!this.#context){
      this.#context = new Signal(v);
    }else{
      this.#context.set(v);
    }
  }


}

export default class SignalSync extends HTMLElement {
  #protocols;

  static get observedAttributes() {
    return ["context"];
  }

  constructor() {
    // Initialization
    super();
    this.#protocols = new SignalProtocols(this);

    // Content Capture
    const shadow = this.attachShadow({
      mode: "open"
    });

    const slot = document.createElement('slot');
    this.shadowRoot.appendChild(slot);
  }

  connectedCallback() {
    this.#protocols
      .setContext()
      .adoptCss()
      .consumeTemplate()
      .clearContent()
      .installRenderer()
      .performSubscription()
      .ensureVisibility();
  }

  disconnectedCallback() {
    this.#protocols
      .removeSubscription();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if(name == 'c1ontext'){
      this.#protocols
        .removeSubscription()
        .clearContent()
        .setContext()
        .performSubscription();
    }
  }

  //

  get context(){
    return this.#protocols.retrieveContext()
  }
  set context(v){
    //console.info(`Updating ${v.key} context`, v);
    this.#protocols.updateContext(v);
  }

}

export {Signal, SignalSync}
