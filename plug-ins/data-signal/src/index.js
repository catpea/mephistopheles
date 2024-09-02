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
}
