export default class Operations {

  #host;
  #context;
  #template;

  #subscriptions = []; // {type:'list/item/value', id:'', run}


  #tags = ['bug', 'loop','print','component'];

  constructor(host) {
    this.#host = host;
  }

  attachShadow(){
    const shadow = this.#host.attachShadow({ mode: "open" });
    const slot = document.createElement('slot');
    this.#host.shadowRoot.appendChild(slot);
    return this;
  }

  setContextFromString(){
    let code = this.#host.getAttribute('context');
    if(!code) return this;
    let program = new Function(`return ${code};`).bind(globalThis);
    this.#context = program();
    return this;
  }

  retrieveContext(){
    return this.#context;
  }
  updateContext(v){
    this.#context = v;
  }

  removeSubscription(){
    this.#subscriptions.map(x=>x.subscription())
    return this;
  }

  adoptCss(){
    this.#host.shadowRoot.adoptedStyleSheets = document.adoptedStyleSheets;
    return this;
  };

  async fetchTemplate(){
    const url = this.#host.getAttribute('url');
    const response = await fetch(url);
    const html = await response.text();
    const div = document.createElement('div');
    div.innerHTML = html;

    let template;

    const templateCandidates = [...div.children].filter(node => node.nodeType === Node.ELEMENT_NODE);

    if (templateCandidates.length === 0){
      // /////console.warn('No template content found'); //result: template remains undefined
    } else if (templateCandidates.length > 0){
      // /////console.warn('One root per template please due to key/reconciler optimizations, wrapping in div');
      template = document.createElement('div');
      template.append(...div.children)
    }else{
      template = templateCandidates[0]; // correct selection
    }

    this.#template = template;

    console.log(html, templateCandidates);
    return this;

  }

  consumeTemplate(){

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

    // The void elements in HTML are as follows:
    // <area>
    // <base>
    // <br>
    // <col>
    // <embed>
    // <hr>
    // <img>
    // <input>
    // <link>
    // <meta>
    // <param> Deprecated
    // <source>
    // <track>
    // <wbr>


    this.#template.querySelectorAll('embed').forEach(directive => {
      const attributes = [...directive.attributes];
      const {name} = attributes.shift();
      const replacement = document.createElement(`data-${name}`);
      attributes.forEach(attr => {
            replacement.setAttribute(attr.name, attr.value);
      });
      directive.replaceWith(replacement);
    });

    this.#template.querySelectorAll('link').forEach(directive => {
      const attributes = [...directive.attributes];
      const {name} = attributes.shift();
      const replacement = document.createElement(`data-print`);
      replacement.setAttribute('signal', name);
      attributes.forEach(attr => {
            replacement.setAttribute(attr.name, attr.value);
      });
      directive.replaceWith(replacement);
    });


    //
    // html = html.replace(/\{\{(\w+)\}\}/g, (_, propName) => `<data-print property="${propName}"></data-print>`);
    // html = html.replace(/<bug\/>/g, (_, propName) => `<data-bug></data-bug>`);
    //
    // this.#template.innerText = html;

    // Tag Rendering
    for (const tag of this.#tags) {
      this.#template.querySelectorAll(tag).forEach(furled => {
        const unfurled = document.createElement(`data-${tag}`);
        [...furled.attributes].forEach(attr => {
            unfurled.setAttribute(attr.name, attr.value);
        });
        while (furled.firstChild) {
            unfurled.appendChild(furled.firstChild);
        }
        furled.replaceWith(unfurled);
      });
    }
    return this;
  }
  //
  // subscribeAndRender(){
  //   const propertyName = this.#host.getAttribute('property');
  //   const subscription = this.#context.subscribe(contextObject=>this.#renderer.echoValue(contextObject, propertyName))
  //   this.#subscriptions.push( {type:'context', id:'property', subscription} );
  //
  //   return this;
  // }

  clearContent(){
    this.#host.shadowRoot.replaceChildren(); // empty
    return this;
  }



  renderDelegate(){
    const item = this.#context;
    let templateClone = this.#template.cloneNode(true);
    templateClone.dataset.key = item.key;

      for (const tag of this.#tags) {
        for (const el of templateClone.querySelectorAll(`data-${tag}`)) {
           const parents = [];
           let parent = el.parentNode;
           while(parent !== templateClone){
             parents.push(el.parentNode)
             parent = parent.parentNode;
           }
           const isOutermost = !parents.map(o=>o.tagName).find(o=>o.match(/^DATA-/));
          if(!isOutermost) continue; // only interested in outermost
          console.log(`Tag ${this.#host.tagName} applied #context to ${el.tagName}`, el.context);

          el.context = item;
          console.log(el.context);
        }
      }

    this.#host.shadowRoot.appendChild(templateClone);
    return this;

  }

  renderContext(){

    if(!this.#context){
      console.log(`Tag ${this.#host.tagName} has no #context`);
      return this;
    }

    console.log(`Tag ${this.#host.tagName}`, 'this.#context', this.#context);

    const subscription = this.#context.subscribe(contextObject=>this.renderTemplate(contextObject))
    this.#subscriptions.push( {type:'context', id:'main', subscription} );
    return this;
  }


  renderDebug(){
    const propertyName = this.#host.getAttribute('name');
    console.log('renderValue', propertyName);
    if(!this.#context) return this;
    if(!this.#context[propertyName]) return this;
    if(!this.#context[propertyName].subscribe) return this;

    const subscription = this.#context[propertyName].subscribe(attributeValue=>this.#host.shadowRoot.innerHTML='<i class="bi bi-bug"></i>');

    this.#subscriptions.push( {type:'debug', id:`${this.#context.key}.${propertyName}`, subscription} );
  }

  renderValue(){
    const propertyName = this.#host.getAttribute('signal');
    const withFunction = this.#host.getAttribute('with');
    console.log('renderValue', propertyName);
    if(!this.#context) return this;
    if(!this.#context[propertyName]) return this;
    if(!this.#context[propertyName].subscribe) return this;

    // with="(this, value)=>this.innerHTML = value')"
    // ( new Function(withFunction) )(this.#host, attributeValue)

    const defaultFunction = (el, value) => el.innerHTML = value;
    const electedFunction = withFunction?new Function('('+ withFunction+')(...arguments)'):defaultFunction;
    console.log('DDD', electedFunction.toString());
    const subscription = this.#context[propertyName].subscribe(attributeValue=>electedFunction(this.#host.shadowRoot, attributeValue));
    this.#subscriptions.push( {type:'value', id:`${this.#context.key}.${propertyName}`, subscription} );
  }






  // INTERMEDIATE.. continuing to drill down templates
  renderTemplate(signalValue){
    console.log({signalValue});

    const arriving = signalValue.map(o=>[o.key, o])
    const existing = Object.fromEntries([...this.#host.shadowRoot.children].map(o=>[o.dataset.key, o]));

    // -- Addition -- //
    // TODO: this must be in order in the DOM as well insertAfter...
    signalValue.forEach(item => {
      const missing = existing[item.key] === undefined;
      if(missing){
        this.renderObject(item);
      }
    });

    // -- Removal -- //
    for (const key in existing) {
      const deleted = !arriving[key];
      if(deleted) {
         this.#host.shadowRoot.removeChild(existing[key]);
      }
    }

    //
    return this;

  }

  // Rendering a piece of the array, or object with a key.
  renderObject(item){
    let templateClone = this.#template.cloneNode(true);
    templateClone.dataset.key = item.key;
    const subscription = item.subscribe(c=>{
      for (const tag of this.#tags) {
        for (const el of templateClone.querySelectorAll(`data-${tag}`)) {
           const parents = [];
           let parent = el.parentNode;
           while(parent !== templateClone){
             parents.push(el.parentNode)
             parent = parent.parentNode;
           }
           const isOutermost = !parents.map(o=>o.tagName).find(o=>o.match(/^DATA-/));
          if(!isOutermost) continue; // only interested in outermost
          console.log(`Tag ${this.#host.tagName} applied #context to ${el.tagName}`, el.context);

          el.context = c;
          console.log(el.context);
        }
      }
    });
    this.#subscriptions.push( {type:'item', id:item.key, subscription} );
    this.#host.shadowRoot.appendChild(templateClone);
  };





  log(message, context='info'){
    const div = document.createElement('div');
    div.append(message);
    div.classList.add('alert', `alert-${context}`);
    this.#host.shadowRoot.appendChild(div);
    return this;
  };

}
