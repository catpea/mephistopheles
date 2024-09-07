// For Registration
import Application from './language/Application.js';
import Loop        from './language/Loop.js';
import Print       from './language/Print.js';
import Bind        from './language/Bind.js';

// For Export
import Signal      from './variables/Signal.js';

async function install(prefix='data', css=['./bootstrap.min.css','bootstrap-icons.min.css']){

  for (const url of css) {
    const response = await fetch(url);
    const str = await response.text();
    const css = new CSSStyleSheet();
    css.replaceSync(str);
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, css];
  }

  customElements.define(`${prefix}-loop`, Loop);
  customElements.define(`${prefix}-print`, Print);
  customElements.define(`${prefix}-bind`, Bind);

  customElements.define(`${prefix}-application`, Application);

}

export {
  Signal,
  install,
  signalize,
}

// TODO: generalize .children into typeof = array
function signalize(root){
  for (const branch of root) {
    // all the children of every branch
    if(branch.children) branch.children = signalize(branch.children);
    // all properties of every branch
    for (const key in branch) {
      if(key === 'children') continue;
      console.log(key);
      branch[key] = new Signal( branch[key] );
    }
  }
  // convert every branch in root
  root = root.map(o=>new Signal( o ))
  // convert root
  root = new Signal( root );
  return root
}
