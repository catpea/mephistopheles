// For Registration
import Root from './language/Root.js';
import Bind from './language/Bind.js';
import Loop from './language/Loop.js';
import Echo from './language/Echo.js';

import Port from './plug-ins/vpl/Port.js';
import Line from './plug-ins/vpl/Line.js';
import Area from './plug-ins/vpl/Area.js';
import Node from './plug-ins/vpl/Node.js';

import Fire from './plug-ins/fire/Fire.js';

// import DraggableElement from './plug-ins/mouse/Draggable.js';

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

  customElements.define(`${prefix}-fire`, Fire, { extends: 'div' });

  customElements.define(`${prefix}-loop`, Loop);
  customElements.define(`${prefix}-echo`, Echo);
  customElements.define(`${prefix}-bind`, Bind);

  customElements.define(`${prefix}-port`, Port);
  customElements.define(`${prefix}-line`, Line);
  customElements.define(`${prefix}-area`, Area);
  customElements.define(`${prefix}-node`, Node);


  customElements.define(`${prefix}-root`, Root);




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
      branch[key] = new Signal( branch[key] );
    }
  }
  // convert every branch in root
  root = root.map(o=>new Signal( o ))
  // convert root
  root = new Signal( root );
  return root
}
