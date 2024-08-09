export default class SignalSync extends HTMLElement {
  // Specify observed attributes so that
  // attributeChangedCallback will work
  static get observedAttributes() {
    return ["signal"];
  }

  constructor() {
    // Always call super first in constructor
    super();

    const shadow = this.attachShadow({
      mode: "open"
    });

    // const div = document.createElement("div");
    // const style = document.createElement("style");
    // shadow.appendChild(style);
    // shadow.appendChild(div);
    // const shadowStyle = document.createElement('style');
    // shadowStyle.textContent = `::slotted(*) { display: none; }`;
    // this.shadowRoot.appendChild(shadowStyle);

    const slot = document.createElement('slot');
    this.shadowRoot.appendChild(slot);

    // Signal that we will render
    this.signalObject = null;
    this.signalTrash = [];
    this.signalTemplate = null;

    // Holds the string tamplate
    this.template = "";

  }

  fromPath(rootObject, path, rs="/"){
    const fragments = path.split(rs).filter(o=>o);
    let response = rootObject;

    for (const fragment of fragments) {
      if(!response[fragment]) throw new Error(`Path not found.`)
      response = response[fragment];
    }

    console.log('DECODING', response, rootObject, fragments );
    return response;
  }

  connectedCallback() {


    if (!this.signalObject){// && this.hasAttribute('signal')) {
      // this.signalObject = globalThis[this.getAttribute('signal')];
      this.signalObject = this.fromPath(globalThis, this.getAttribute('signal') );
    }
    // else{
    //   this.signalObject = this.fromPath(this.signalObject, this.getAttribute('signal') );
    // }

    // Get the content from the slot
    const slot = this.shadowRoot.querySelector('slot').assignedNodes();
    const slotContent = this.shadowRoot.querySelector('slot').assignedNodes().filter(node => node.nodeType === Node.ELEMENT_NODE);
    if (slotContent.length === 0) {
      console.warn('No template content found in <signal-sync>.');
      return;
    }
    // this.signalTemplate = slotContent[0];
    this.signalTemplate = this.removeChild(slotContent[0]);
    this.shadowRoot.replaceChildren(); // empty
    // this.signalTemplate = slotContent[0];



    console.log("Custom square element added to page.", this.getAttribute('signal'), this.signalObject);
    if (this.signalObject.subscribe){
      this.signalTrash.push(this.signalObject.subscribe((v)=>{
          this.render(v)
      }))
    }


  }

  disconnectedCallback() {
    console.log("Custom square element removed from page.");
  }



  adoptedCallback() {
    console.log("Custom square element moved to new page.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("Custom square element attributes changed.");
  }


  render(value) {
    if(typeof value === 'string'){

    }else if( Array.isArray(value) ){
      this.renderList(value)
    }
  }

  renderObject(value) {

  }

  renderList(value) {
    this.style.display = "block"; // permanent activation
    const arriving = value.map(o=>[o.key, o])
    const existing = Object.fromEntries([...this.shadowRoot.children].map(o=>[o.dataset.key, o]));
    console.log(existing);

    value.forEach(item => {
      if(existing[item.key]){
        // update ???
      }else{
        let templateClone = this.signalTemplate.cloneNode(true);
        templateClone.dataset.key = item.key;
        templateClone.innerHTML = templateClone.innerHTML.replace(
          /\{\{(\w+)\}\}/g, (_, propName) => {
            // return `SIGNAL-SYNC ${item.key}`
            return `<signal-sync data-context="local" signal="${propName}">nested-signal</signal-sync>`;
            // return item.get()[propName] || '';
          });
          for (const el of templateClone.querySelectorAll('signal-sync[data-context="local"]')) {
            el.signalObject = item;
          }
        this.shadowRoot.appendChild(templateClone);
      }
      //
    });
    // Removal
    for (const key in existing) {
      if(!arriving[key]) {
         this.shadowRoot.removeChild(existing[key]);
      }
    }



  }


}
