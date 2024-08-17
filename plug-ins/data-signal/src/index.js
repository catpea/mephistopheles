import Application from './language/Application.js';
import Loop        from './language/Loop.js';
import Print       from './language/Print.js';
// import Template    from 'src/language/Template';
// import Component   from 'src/language/Component';
import Signal      from './variables/Signal.js';
// import List        from 'src/variables/List';

async function install(prefix='data', url='./bootstrap.min.css'){

  const response = await fetch(url);
  const str = await response.text();
  const css = new CSSStyleSheet();
  css.replaceSync(str)
  document.adoptedStyleSheets = [css];

  customElements.define(`${prefix}-loop`, Loop);
  customElements.define(`${prefix}-print`, Print);
  customElements.define(`${prefix}-application`, Application);
  // customElements.define(`${prefix}-template`, Template());
  // customElements.define(`${prefix}-component`, Component());

}

export {
  Signal,
  install,
}
