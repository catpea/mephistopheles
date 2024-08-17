class List {
  #value = [];
  #subscribers;

  constructor() {
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
        /////console.error('Error executing subscriber callback:', error);
      }
    });
  }

  [Symbol.iterator]() {
    return this.#value[Symbol.iterator]();
  }

  find(callback) {
    if(typeof callback !== "function") throw new TypeError("Needs a function.");
    return this.#value.find(callback);
  }

  pop() {
    const response = this.#value.pop();
    this.notify();
    return response;
  }

  push(value) {
    const response = this.#value.push(value);
    this.notify();
    return response;
  }

  get length(){
    return this.#value.length
  }

  get() {
    return this.#value;
  }

}

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
    if(this.#value !== undefined) callback(this.#value);

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
        /////console.error('Error executing subscriber callback:', error);
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
  #host;
  #root;
  #template;
  #disposable = [];

  constructor(host, root, template, disposable) {
    this.#host = host;
    this.#root = root;
    this.#template = template;
    disposable.push(()=>this.#disposable.forEach(item=>item.dispose()))
  }

  // ECHO FUNCTION
  echoValue(signalValue, attributeName){
    const dispose = signalValue[attributeName].subscribe(attributeValue=>this.#root.innerHTML=attributeValue);
    this.#disposable.push({key:`${signalValue.key}.${attributeName}`, dispose});
  }


  // INTERMEDIATE.. continuing to drill down templates
  renderTemplate(signalValue){
    if( Array.isArray(signalValue) ){
      this.#synchronizeArray(signalValue);
    }else{
      throw new Error('RENDER TEMPLATE GOT !ARRAY AS CONTEXT!');
      // this.#renderObject(signalValue);
    }
  }

  #synchronizeArray(list){

    const arriving = list.map(o=>[o.key, o])
    const existing = Object.fromEntries([...this.#root.children].map(o=>[o.dataset.key, o]));

    // -- Addition -- //
    // TODO: this must be in order in the DOM as well insertAfter...
    list.forEach(item => {
      const missing = existing[item.key] === undefined;
      if(missing){
        this.#renderObject(item);
      }
    });

    // -- Removal -- //
    for (const key in existing) {
      const deleted = !arriving[key];
      if(deleted) {
         this.#root.removeChild(existing[key]);
      }
    }

    //

  }

  // Rendering a piece of the array, or object with a key.
  #renderObject(item){
    // this.#root.children

      let templateClone = this.#template.cloneNode(true);
      templateClone.dataset.key = item.key;


      const dispose = item.subscribe(c=>{
        for (const el of templateClone.querySelectorAll('data-signal')) {


           let isOutermost = true;
           let parent = el.parentNode;
            while(parent !== templateClone) {
              ///console.log(parent, templateClone, parent !== templateClone);
              ///console.log(parent.tagName);

              if (parent.tagName === 'DATA-SIGNAL') {
                  isOutermost = false;
                  break;
              }

            parent = parent.parentNode;
            }

            if(!isOutermost) continue

            ///console.log(`${this.#host.getAttribute('name')} is setting context to ${el.getAttribute('name')}`, isOutermost);
          if(this.#host.getAttribute('name') == 'right-signal-array'){
            if(el.getAttribute('name') == 'list-group-item'){
              console.error('BAD SELECTROR IT SHOULD NOT LOOK INSIDE colorful-listgroup', isOutermost);
            }
          }
          // el.classList.add(`text-bg-${item.color.get()}`);
          // el.classList.add(`rounded`);
          // el.classList.add(`p-1`);
          el.context = c; // --> rerender, this item did not have context previously
        }
      });

      this.#disposable.push({key:item.key, dispose});
      this.#root.appendChild(templateClone);



    // this is a convenience funcion
    // templateClone.innerHTML = templateClone.innerHTML.replace(/\{\{(\w+)\}\}/g, (_, propName) => `<data-signal property="${propName}"></data-signal>`);



  }



}

class SignalProtocols {

  #host;
  #renderer;
  #template;
  #context;
  #subscription = [];
  #disposable = [];

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
      if(!this.#context) this.#context = new Signal();
    }

    return this;
  }

  consumeTemplate(){
    // /////console.log('OOO', slot);
    //
    // const slotContent = this.#host.shadowRoot.querySelector('slot').assignedNodes().filter(node => node.nodeType === Node.ELEMENT_NODE);
    // if (slotContent.length === 0) return /////console.warn('No template content found');
    // const template = this.#host.removeChild(slotContent[0]);

    let template;
    const templateCandidates = this.#host.shadowRoot.querySelector('slot').assignedNodes().filter(node => node.nodeType === Node.ELEMENT_NODE);

    if (templateCandidates.length === 0){
      // /////console.warn('No template content found'); //result: template remains undefined
    } else if (templateCandidates.length > 0){
      // /////console.warn('One root per template please due to key/reconciler optimizations, wrapping in div');
      template = document.createElement('div');
      template.append(...this.#host.shadowRoot.querySelector('slot').assignedNodes())
    }else{
      template = templateCandidates[0]; // correct selection
    }




    this.#template = template;
    return this;
  }

  unfurlTemplate(){
    if(!this.#template) return this; // no template
    // this.#template.querySelectorAll('for').forEach(furled => {
    //   const unfurled = document.createElement('data-signal-for');
    //
    //   // Copy all attributes
    //   // [...furled.attributes].forEach(attr => {
    //   //     unfurled.setAttribute(attr.name, attr.value);
    //   // });
    //
    //   // Move children from b to i
    //   while (furled.firstChild) {
    //       unfurled.appendChild(furled.firstChild);
    //   }
    //
    //   // Replace b with i in the DOM
    //   furled.replaceWith(unfurled);
    // });

    return this;
  }


  installRenderer(){
    this.#renderer = new SignalRenderer(this.#host, this.#host.shadowRoot, this.#template, this.#disposable);
    return this;
  };

  adoptCss(){
    this.#host.shadowRoot.adoptedStyleSheets = document.adoptedStyleSheets;
    return this;
  };

  // subscribeToSignal
  // subscribeToSignalItem
  // subscribeToSignalItemProperty



  performSubscription(){
    const propertyName = this.#host.getAttribute('property');
    const echoMode = !!propertyName;
    if(echoMode){
      ///console.log('ECHO MODE', propertyName);
      this.#subscription.push( this.#context.subscribe(contextObject=>this.#renderer.echoValue(contextObject, propertyName)) ); // ----------------------------------------------> call to renderer
    }else{
      this.#subscription.push( this.#context.subscribe(contextObject=>this.#renderer.renderTemplate(contextObject)) ); // ----------------------------------------------> call to renderer
    }

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

export default class DataSignal extends HTMLElement {
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
      .unfurlTemplate()
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

    // if(name == 'context'){
    //   this.#protocols
    //     .removeSubscription()
    //     .clearContent()
    //     .setContext()
    //     .performSubscription();
    // }

  }

  //

  get context(){
    return this.#protocols.retrieveContext()
  }
  set context(v){
    this.#protocols.updateContext(v);
  }

}

function register(prefix='x'){

  customElements.define(`${prefix}-application`, DataSignal(x));
  customElements.define(`${prefix}-loop`, DataSignal(x));
  customElements.define(`${prefix}-template`, DataSignal(x));
  customElements.define(`${prefix}-print`, DataSignal(x));
  customElements.define(`${prefix}-component`, DataSignal(x));

}

export {Signal, register}
